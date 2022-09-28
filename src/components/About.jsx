export const About = () => {
    return (
        <section class="text-gray-600 bg-white body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div
                    class="lg:flex-grow md:w-1/2 lg:pl-32 md:pl-16 lg:pr-32 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="md:text-5xl text-3xl font-bold mb-4 text-gray-900">About </h1>

                    <p class="mb-8 leading-relaxed">ETHBrno is an annual independent {`&`} open community hackathon (former conference) for supporters of decentralised finance, smart contracts and Web3 happening in Brno, Czech Republic. ETHBrno² is the second, and we believe the best yet, edition.</p>

                    <p class="mb-8 leading-relaxed">ETHBrno events are organized by Gwei.cz community with the help of the UTXO Foundation.</p>

                    <p class="mb-8 leading-relaxed">This year we are focusing on privacy and security topics.</p>

                    <div class="flex justify-center">
                        <a href="https://join.ethbrno.cz/"
                            class="inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700  text-lg">Apply
                            To Hack</a>
                        <a href="https://ethbrno.cz/sponsor-deck.pdf" target="_blank" rel="noopener noreferrer"
                            class="ml-4 inline-flex text-gray-700 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200  text-lg underline">Sponsor</a>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center" alt="hero" src="key.png" />
                </div>
            </div>
        </section>
    )
}