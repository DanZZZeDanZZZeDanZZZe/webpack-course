import Post from './Post.js'
import '.styles/styles.css'

const post = new Post('Webpack Post title')

console.log('Post to String', post.toString())