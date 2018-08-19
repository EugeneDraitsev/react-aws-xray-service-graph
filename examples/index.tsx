import * as React from 'react'
import * as ReactDOM from 'react-dom'
import XRayInfo from '../src/'
import mock from './mock.json'

const App = () => <XRayInfo services={mock.data} />

ReactDOM.render(<App />, document.getElementById('root'))
