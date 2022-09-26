export const About = () => {
    return (
        <section class="text-gray-600 bg-white body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div
                    class="lg:flex-grow md:w-1/2 lg:pl-32 md:pl-16 lg:pr-32 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="text-5xl font-bold mb-4 text-gray-900">About </h1>

                    <p class="mb-8 leading-relaxed">ETHBerlin is known as the hackathon extravaganza, a cultural festival, an educational event, a platform for hacktivism, and a community initiative to push the decentralized ecosystem forward. ETHBerlin³ is the third edition, and we've come a long way since we hosted our first hackathon in 2018.</p>

                    <p class="mb-8 leading-relaxed">After successful events in 2018 and 2019, ETHBerlin decided to reaffirm its commitment with the ecosystem and founded the Department of Decentralization. The DoD is responsible for initiatives that go beyond organizing hackathons and seek to also support the projects coming from our events and community. ETHBerlin 2018 and ETHBerlinZwei 2019 sought to marry the culture and values of Berlin with those of the builder community and arguably succeeded at it.</p>

                    <p class="mb-8 leading-relaxed">Now, in 2022 we are back with ETHBerlin³ - to the power of 3. This time, we are pushing even further into becoming a festival for people from all backgrounds, and most importantly, a hub where builders will be able to get their creative juices flowing by discovering various cultural and educational experiences spread across the weekend.</p>

                    <p class="mb-8 leading-relaxed">We are (in random order): Ksenya, Jacob, Franzi, Eylon, Anna, Kirill, Hany, Wesley, Afri, Helena, Stina, Rose, Alex, Ligi, Nich, Carl, MP, Tim, Caspar, Kaan, Raul. Supported by countless volunteers and creative contributors.</p>
                    <div class="flex justify-center">
                        <button
                            class="inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700  text-lg">Apply
                            To Hack</button>
                        <button
                            class="ml-4 inline-flex text-gray-700 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200  text-lg underline">Sponsor</button>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center" alt="hero" src="key.png" />
                </div>
            </div>
        </section>
    )
}