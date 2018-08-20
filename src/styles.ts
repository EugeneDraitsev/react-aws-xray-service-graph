import { injectGlobal } from 'styled-components'

// tslint:disable-next-line
injectGlobal`
.react-aws-xray-service-graph-Wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.react-aws-xray-service-graph-Wrapper * {
  font-family: Roboto, sans-serif;
}

.react-aws-xray-service-graph-DirectionalGraph {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.react-aws-xray-service-graph-DirectionalGraph svg {
  width: 100%;
  height: 100%;
}

.react-aws-xray-service-graph-DirectionalGraph .node rect,
.react-aws-xray-service-graph-DirectionalGraph .node circle,
.react-aws-xray-service-graph-DirectionalGraph .node ellipse {
  stroke: #333;
  fill: #fff;
  stroke-width: 1px;
}

.react-aws-xray-service-graph-DirectionalGraph .edgePath path  {
  stroke: #333;
  fill: transparent;
  stroke-width: 1.5px;
}

.react-aws-xray-service-graph-StackedBarChart {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
}

.react-aws-xray-service-graph-StackedBarChart {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
}

.react-aws-xray-service-graph-StackedBarChart .directional-bar {
  height: 30px;
  min-width: 4px;
}

.react-aws-xray-service-graph-SegmentInfoContent {
  padding: 5px;
}

.react-aws-xray-service-graph-SegmentInfoContent .segment-name {
  font-size: 32px;
  word-break: break-all;
}

.react-aws-xray-service-graph-SegmentInfoContent .segment-type {
  font-size: 22px;
  font-weight: 300;
  margin: 10px 0;
}

.react-aws-xray-service-graph-SegmentInfoContent .segment-info {
  font-size: 16px;
  margin-bottom: 5px;
}
`
