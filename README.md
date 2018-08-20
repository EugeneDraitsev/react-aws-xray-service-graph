# react-aws-xray-service-graph

Allow you to draw aws xray service graph, based on your aws service map data.

![4zANq1zfq06J29.jpg](https://s3.eu-central-1.amazonaws.com/bb-image-drai/Xray+stats+2018-08-02+12-32-41.png)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):


    $ npm install react-aws-xray-service-graph
    $ yarn add react-aws-xray-service-graph


## Usage

To use component you should pass `Services` field from your aws xray service map data to component.
To fetch aws xray service map data you can use aws-sdk like this:

```jsx
const getServiceMapData = async () => {
  const xray = new XRay({ region: 'eu-central-1', apiVersion: '2016-04-12' })
  const timePeriod = 60 * 1000 * 60 * 6 // 6 hours
  const params = {
    EndTime: new Date(),
    StartTime: new Date(Date.now() - timePeriod),
  }

  const result = await xray.getServiceGraph(params).promise()

  return {
    services: result.Services || [],
  }
}
```

Then you can pass `services` props to `XRayInfo` component:

```jsx

import XRayInfo from 'react-aws-xray-service-graph'

// services from method above
const App = () => <XRayInfo services={services} />


```

## Examples

You can find example and mock data for graph in `/exapmles` folder. To run example just clone repository and run
`yarn start`

## TODO

- [ ] Reduce dependencies size (at least remove lodash from dagre-d3)
- [ ] Rework redraw logic
- [ ] Setup CI
