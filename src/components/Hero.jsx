export const Hero = () => {
    return (<section class="text-gray-400 bg-black">
        <div class="w-full mx-auto flex md:flex-row md:h-5/6 flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 md:mb-0 mb-10 md:flex hidden justify-center h-[700px]">
                <svg class="block w-full" >
                    <filter id="pixelate" x="0" y="0">
                        <feFlood x="4" y="4" height="2" width="2" />

                        <feComposite width="2" height="2" />

                        <feTile result="a" />

                        <feComposite in="SourceGraphic" in2="a"
                            operator="in" />

                        <feMorphology operator="erode" id="morph"
                            radius="5" />
                    </filter>
                    <animate
                        xlinkHref="#morph"
                        id="anim-dialiate"
                        attributeName="radius"
                        values="0;10;0"
                        dur="5s"
                        fill="freeze"
                        repeatCount="indefinite"
                    />

                    <image
                        filter="url(#pixelate)"
                        xlinkHref="cam2.png"
                        width="100%" height="100%"
                        preserveAspectRatio="xMidYMid slice" />
                </svg>
            </div>
            <div
                class="lg:flex-grow md:w-1/2 lg:pl-32 md:pl-16 pt-4 flex flex-col md:items-start md:text-left items-center text-center text-white transition-transform">
                <img src="logo.svg" class="md:-ml-4 p-2 md:p-0  w-[343px] h-[127px]" alt="logo" />
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
    </section>);
};
