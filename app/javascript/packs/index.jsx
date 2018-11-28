// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/app'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
