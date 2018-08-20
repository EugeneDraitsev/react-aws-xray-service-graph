import { ServiceList } from 'aws-sdk/clients/xray'
import { select, event } from 'd3-selection'
import { curveBasis } from 'd3-shape'
import { zoom as d3zoom, zoomIdentity } from 'd3-zoom'
import * as dagre from 'dagre-d3'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'

import { SegmentInfoContent } from './'

interface IDirectionalGraph {
  services: ServiceList,
  className?: string,
}

export class DirectionalGraph extends React.Component<IDirectionalGraph> {
  private node: SVGSVGElement | null

  public componentDidMount() {
    const { services } = this.props
    const svg = select(this.node as any)
    const inner = svg.append('g')

    const zoom = d3zoom().on('zoom', () => inner.attr('transform', event.transform))
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
      curve: curveBasis,
      // label: 'test',
    }))

    const render = new dagre.render()

    // Run the renderer. This is what draws the final graph.
    render(inner as any, g)

    const initialScale = 0.75
    const marginWidth = ((svg.node() as any).getBoundingClientRect().width - g.graph().width * initialScale) / 2

    svg.call(zoom.transform, zoomIdentity.translate(marginWidth, 20).scale(initialScale))
    svg.attr('height', g.graph().height * initialScale + 40)
  }

  public render() {
    return (
      <div className="react-aws-xray-service-graph-DirectionalGraph">
        <svg ref={node => this.node = node} />
      </div>
    )
  }
}
