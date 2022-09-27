import { render } from 'preact'
import { App } from './app'
import { Nav } from '../src/components/Nav'
import { Footer } from '../src/components/Footer'
import './styles.css'

render(<><Nav /><App /><Footer /></>, document.getElementById('app'))
