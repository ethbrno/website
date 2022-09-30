
import { Hero } from "../src/components/Hero"
import { About } from "../src/components/About"
import { Manifesto } from './components/Manifesto';

export function HomePage() {

    return (
        <>
            <Hero />
            <About />
            <Manifesto />
        </>
    )
}