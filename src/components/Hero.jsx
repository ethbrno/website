export const Hero = () => {
    return (<section class="text-gray-400 bg-black">
        <div class="w-full mx-auto flex md:flex-row md:h-5/6 flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 md:mb-0 mb-10 md:flex hidden justify-center">
                <img class="object-cover object-center animhue" alt="hero" src="https://images.unsplash.com/photo-1492201789320-a16a060174d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
            </div>
            <div
                class="lg:flex-grow md:w-1/2 lg:pl-32 md:pl-16 pt-4 flex flex-col md:items-start md:text-left items-center text-center text-white transition-transform">
                <img src="logo.svg" class="md:-ml-4 p-2 md:p-0  w-[343px] h-[127px] anim" alt="logo" />
                <p class="text-3xl my-2">privacy {`&`} security edition</p>
                <p class="text-xl">NOVEMBER 11-13, 2022
                </p>
                <p class="text-xl">Brno, Czech republic
                </p>
                <div class="h-[1px] bg-white w-full my-2 opacity-20"></div>
                <p class="mb-8 py-4 leading-relaxed opacity-50 text-lg font-light">#freedom #anonymity #non-kyc #encryption
                    #selfsovereignty #p2p
                    #opensource #web3 #smartcontracts #audits #vulnerabilities #analytics #wallets #scams
                    #darkforest
                    #mev #zeroknowledgeproofs
                </p>
            </div>
        </div>
    </section>)
}
