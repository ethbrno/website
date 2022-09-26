export const Hero = () => {
    return (<section class="text-gray-400 bg-black">
        <div class="w-full mx-auto flex md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                <img class="object-cover object-center" alt="hero" src="cam2.png" />
            </div>
            <div
                class="lg:flex-grow md:w-1/2 lg:pl-32 md:pl-16 lg:pr-32 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center text-white">
                <img src="logo.svg" class="-ml-4" />
                <p class="text-3xl my-2">privacy {`&`} security edition</p>
                <p class="text-xl">NOVEMBER 11-13, 2022
                </p>
                <p class="text-xl">Brno, Czech republic
                </p>
                <div class="h-[1px] bg-white w-full my-2 opacity-20"></div>
                <p class="mb-8 leading-relaxed serif opacity-50 text-lg">#freedom #anonymity #non-kyc #encryption
                    #selfsovereignty #p2p
                    #opensource #web3 #smartcontracts #audits #vulnerabilities #analytics #wallets #scams
                    #darkforest
                    #mev #zeroknowledgeproofs
                </p>
            </div>
        </div>
    </section>)
}
