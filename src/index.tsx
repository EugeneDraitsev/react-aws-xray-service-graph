import { ServiceList } from 'aws-sdk/clients/xray'
import * as React from 'react'
import cn from 'classnames'
import { DirectionalGraph } from './components'
import './styles/index.css'

interface IXrayInfo {
  services: ServiceList,
  className?: string,
}

export default class XRayInfo extends React.Component<IXrayInfo> {
  public render() {
    const { className, services } = this.props

    return (
      <div className={cn('react-aws-xray-service-graph-Wrapper', className)}>
        <DirectionalGraph services={services} />
      </div>
    )
  }
}
