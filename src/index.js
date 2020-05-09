import Post from './Post.js'
import json from './assets/json'
import xml from './assets/data.xml'
import WebapckLogo from './assets/webpack-logo.png'
import './styles/styles.css'

const post = new Post('Webpack Post title', WebapckLogo)

console.log('Post to String', post.toString())

console.log('JSON:', json)
console.log('xml:', xml)