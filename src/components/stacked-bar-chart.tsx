import * as React from 'react'
import styled from 'styled-components'

export interface IBarChartData {
  label?: string
  value: number
  color: string
}

interface IStackedBarChart {
  data: IBarChartData[]
  className?: string
}

interface IBar {
  flex: number
  color: string
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
`

const Bar = styled.div`
  height: 30px;
  flex: ${(props: IBar) => props.flex};
  background-color: ${(props: IBar) => props.color};
  min-width: 4px;
`

export class StackedBarChart extends React.Component<IStackedBarChart> {
  public render() {
    const { className, data } = this.props

    const filteredData = data.filter(x => x.value)

    return (
      <Wrapper className={className}>
        {filteredData.map(d => (
          <Bar key={d.label} flex={d.value} color={d.color} />
        ))}
      </Wrapper>
    )
  }
}
