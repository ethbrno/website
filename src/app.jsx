import Router from 'preact-router';
import AsyncRoute from 'preact-async-route';
import { HomePage } from "../src/home"
import { ManifestoPage } from "../src/manifesto"
import { ManualPage } from "../src/manual"


export function App() {

  return (
    <main class="container mx-auto">
      <Router>
        <HomePage path="/" />
        <AsyncRoute
          path="/manifesto"
          component={ManifestoPage}
        />
        <AsyncRoute
          path="/manual"
          component={ManualPage}
        />
      </Router>
    </main>
  )
}
