import { Service } from 'aws-sdk/clients/xray'
import * as React from 'react'

import { StackedBarChart } from './'

interface IXrayInfo {
  segment: Service,
}

export class SegmentInfoContent extends React.Component<IXrayInfo> {
  public render() {
    const { segment: { Name, SummaryStatistics, Type } } = this.props

    if (!SummaryStatistics) {
      return (
        <div className="react-aws-xray-service-graph-SegmentInfoContent">
          <div className="segment-name">{Name}</div>
        </div>
      )
    }

    const total = Number(SummaryStatistics!.TotalCount)
    const averageTime = (Number(SummaryStatistics!.TotalResponseTime) / total) * 1000
    const ok = Number(SummaryStatistics!.OkCount)
    const faults = Number(SummaryStatistics!.FaultStatistics!.TotalCount)
    const errors = Number(SummaryStatistics!.ErrorStatistics!.TotalCount)
    const statsData = [
      { label: 'Ok', value: ok, color: '#6AD245' },
      { label: 'Fault', value: faults, color: '#D24545' },
      { label: 'Errors', value: errors, color: '#FF9A00' },
    ]

    return (
      <div className="react-aws-xray-service-graph-SegmentInfoContent">
        <div className="segment-name">{Name}</div>
        <div className="segment-type">{Type}</div>
        <div className="segment-info">
          Average time: <b>{Math.round(averageTime * 100) / 100}</b> ms
        </div>
        <StackedBarChart data={statsData} />
        <div className="segment-info">Total invocations: <b>{SummaryStatistics!.TotalCount}</b></div>
        {statsData.filter(x => x.value > 0).map(x => (
          <div className="segment-info"
               key={x.label}>{x.label}: <b>{x.value} ({Math.round(x.value / total * 10000) / 100})%</b>
          </div>
        ))}
      </div>
    )
  }
}
