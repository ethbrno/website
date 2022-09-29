import { render } from "preact";
import { App } from "./app";
import { Navbar } from "../src/components/Nav2";
import { Footer } from "../src/components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import "./styles.css";

const queryClient = new QueryClient();

render(
  <QueryClientProvider client={queryClient}>
    <Navbar />
    <App />
    <Footer />
  </QueryClientProvider>,
  document.getElementById("app"),
);
