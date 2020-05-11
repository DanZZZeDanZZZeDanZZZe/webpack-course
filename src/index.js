
import * as $ from 'jquery'
import Post from '@models/Post'
import json from './assets/json'
import xml from './assets/data.xml'
import WebapckLogo from './assets/webpack-logo'
import './styles/styles.css'
import './styles/less.less'
import './styles/sass.sass'
import './babel.js'

const post = new Post('Webpack Post title', WebapckLogo)

$('pre').html(post.toString())

console.log('Post to String', post.toString())

console.log('JSON:', json)
console.log('xml:', xml)