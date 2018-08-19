import * as React from 'react'

export interface IBarChartData {
  label?: string
  value: number
  color: string
}

interface IStackedBarChart {
  data: IBarChartData[]
  className?: string
}

export class StackedBarChart extends React.Component<IStackedBarChart> {
  public render() {
    const { data } = this.props

    const filteredData = data.filter(x => x.value)

    return (
      <div className="react-aws-xray-service-graph-StackedBarChart">
        {filteredData.map(d => (
          <div className="directional-bar" key={d.label} style={{ flex: d.value, backgroundColor: d.color }} />
        ))}
      </div>
    )
  }
}
