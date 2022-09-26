import { render } from 'preact'
import { App } from './app'
import { Nav } from '../src/components/Nav'
import './styles.css'

render(<><Nav /><App /></>, document.getElementById('app'))
