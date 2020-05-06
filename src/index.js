import Post from './Post.js'
import json from './'
import WebapckLogo from './assets/webpack-logo.png';
import './styles/styles.css'

const post = new Post('Webpack Post title', WebapckLogo)

console.log('Post to String', post.toString())

console.log('JSON:', json)