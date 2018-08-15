import { Service } from 'aws-sdk/clients/xray'
import * as React from 'react'
import styled from 'styled-components'

import { StackedBarChart } from './'

interface IXrayInfo {
  segment: Service,
  className?: string,
}

const Wrapper = styled.div`
  padding: 5px;
`
const SegmentName = styled.div`
  font-size: 32px;
  word-break: break-all;
`
const SegmentType = styled.div`
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 10px;
`
const Info = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`

export class SegmentInfoContent extends React.Component<IXrayInfo> {
  public render() {
    const { className, segment: { Name, SummaryStatistics, Type } } = this.props

    if (!SummaryStatistics) {
      return (
        <Wrapper className={className}>
          <SegmentName>{Name}</SegmentName>
        </Wrapper>
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
      <Wrapper className={className}>
        <SegmentName>{Name}</SegmentName>
        <SegmentType>{Type}</SegmentType>
        <Info>Average time: <b>{Math.round(averageTime * 100) / 100}</b> ms</Info>
        <StackedBarChart data={statsData} />
        <Info>Total invocations: <b>{SummaryStatistics!.TotalCount}</b></Info>
        {statsData.filter(x => x.value > 0).map(x => (
          <Info key={x.label}>{x.label}: <b>{x.value} ({Math.round(x.value / total * 10000) / 100})%</b></Info>
        ))}
      </Wrapper>
    )
  }
}
