import * as React from 'react'
import { ServiceList } from 'aws-sdk/clients/xray'

export interface XRayInfoProps {
  services: ServiceList,
  className?: string,
}

export class XRayInfo extends React.PureComponent<XRayInfoProps, any> { }
