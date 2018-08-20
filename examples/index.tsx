import * as React from 'react'
import * as ReactDOM from 'react-dom'
// @ts-ignore
import XRayInfo from '../dist/main.js'
import mock from './mock.json'

const App = () => <XRayInfo services={mock.data} />

ReactDOM.render(<App />, document.getElementById('root'))
