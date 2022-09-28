import { render } from 'preact'
import { App } from './app'
import { Navbar } from '../src/components/Nav2'
import { Footer } from '../src/components/Footer'
import './styles.css'

render(<><Navbar /><App /><Footer /></>, document.getElementById('app'))
