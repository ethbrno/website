import Router from 'preact-router';
import AsyncRoute from 'preact-async-route';
import { HomePage } from "../src/home";
import { ManifestoPage } from "../src/manifesto";
import { ManualPage } from "../src/manual";
import { SchedulePage } from "../src/schedule";
import { VenuesPage } from "../src/venues";
import { ContributorsPage } from "../src/contributors";
import { TeamPage } from "../src/team";

import fetch from "../src/lib/fetch";
import { useQuery } from "react-query";

export const useBundle = () => useQuery(["bundle"], () =>
  fetch("https://spec.utxo.cz/22/bundle.json")
);

export function App() {
  return (
    <main>
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
        <AsyncRoute
          path="/schedule"
          component={SchedulePage}
        />
        <AsyncRoute
          path="/venues"
          component={VenuesPage}
        />
        <AsyncRoute
          path="/contributors"
          component={ContributorsPage}
        />
        <AsyncRoute
          path="/team"
          component={TeamPage}
        />
      </Router>
    </main>
  );
}
