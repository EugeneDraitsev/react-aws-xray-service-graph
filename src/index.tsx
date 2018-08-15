import { ServiceList } from 'aws-sdk/clients/xray'
import * as React from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { DirectionalGraph } from './components'

interface IXrayInfo {
  services: ServiceList,
  className?: string,
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export class XRayInfo extends React.Component<IXrayInfo> {
  public render() {
    const { className, services } = this.props

    return (
      <Wrapper className={cn('react-aws-xray-visualizer-Wrapper', className)}>
        <DirectionalGraph services={services} />
      </Wrapper>
    )
  }
}
