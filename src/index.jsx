
import * as $ from 'jquery'
import Post from '@models/Post'
import json from './assets/json'
import xml from './assets/data.xml'
import WebapckLogo from './assets/webpack-logo'
import React from 'react'
import {render} from 'react-dom'
import './styles/styles.css'
import './styles/less.less'
import './styles/sass.sass'
import './babel.js'

const post = new Post('Webpack Post title', WebapckLogo)

$('pre').html(post.toString())

const App = () => (
<div className="container">
  <h1>Webpack Course</h1>
  <hr />
  <div className="logo" />
  <hr />
  <pre />
  <hr />
  <div className="box">
    <h2>Less</h2>
  </div>
  <div className="card">
    <h2>Sass</h2>
  </div>
</div>
)

render(<App />, document.getElementById('app'))

console.log('Post to String', post.toString())
console.log('JSON:', json)
console.log('xml:', xml)