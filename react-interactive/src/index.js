import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {
    // constAndLet,
    // arrowFunctions,
    // destructuring,
    // objAssemblyComputedProps
    // spreadOperator
    promises
} from './examples'

promises()

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker();
