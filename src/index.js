import Post from '@models/Post'
import json from './assets/json'
import xml from './assets/data.xml'
import WebapckLogo from './assets/webpack-logo'
import './styles/styles.css'

const post = new Post('Webpack Post title', WebapckLogo)

console.log('Post to String', post.toString())

console.log('JSON:', json)
console.log('xml:', xml)