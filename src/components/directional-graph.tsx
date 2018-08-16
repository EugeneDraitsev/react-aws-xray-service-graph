import { ServiceList } from 'aws-sdk/clients/xray'
import * as d3 from 'd3'
import * as dagre from 'dagre-d3'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import styled from 'styled-components'

import { SegmentInfoContent } from './'

interface IDirectionalGraph {
  services: ServiceList,
  className?: string,
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  svg {
    width: 100%;
    height: 100%;
  }
  .node rect,
  .node circle,
  .node ellipse {
    stroke: #333;
    fill: #fff;
    stroke-width: 1px;
  }
  .edgePath path {
    stroke: #333;
    fill: transparent;
    stroke-width: 1.5px;
  }
`

export class DirectionalGraph extends React.Component<IDirectionalGraph> {
  private node: SVGSVGElement | null

  public componentDidMount() {
    const { services } = this.props
    const svg = d3.select(this.node as d3.BaseType)
    const inner = svg.append('g')

    const zoom = (d3 as any).zoom().on('zoom', () => inner.attr('transform', (d3.event as any).transform))
    svg.call(zoom)

    const g = new dagre.graphlib.Graph().setGraph({})

    services.forEach(segment => g.setNode(String(segment.ReferenceId), {
      label: ReactDOMServer.renderToStaticMarkup(<SegmentInfoContent segment={segment} />),
      labelType: 'html',
    }))

    const edges = services.reduce((acc, x) => [
      ...acc,
      ...(x.Edges || []).map(r => ({ source: x.ReferenceId, target: r.ReferenceId })),
    ], [])

    edges.forEach((x: any) => g.setEdge(x.source, x.target, {
      arrowhead: 'vee',
      curve: (d3 as any).curveBasis,
      // label: 'test',
    }))

    const render = new dagre.render()

    // Run the renderer. This is what draws the final graph.
    render(inner as any, g)

    const initialScale = 0.75
    const { zoomIdentity } = d3 as any
    const marginWidth = ((svg.node() as any).getBoundingClientRect().width - g.graph().width * initialScale) / 2

    svg.call(zoom.transform, zoomIdentity.translate(marginWidth, 20).scale(initialScale))
    svg.attr('height', g.graph().height * initialScale + 40)
  }

  public render() {
    return (
      <Wrapper>
        <svg ref={node => this.node = node} />
      </Wrapper>
    )
  }
}
