export const Footer = () => {
    return (<footer class="bg-black mx-auto">
        <div class="pt-12">
            <img src="cityscape2.png" class="object-cover w-full" />
        </div>
        <div class="bg-white flex flex-col justify-end">
            <div class="container mx-auto px-4 flex flex-wrap flex-col sm:flex-row justify-center items-center h-60">
               
                    <a href="https://twitter.com/ethbrno" rel="noopener noreferrer" class="text-black ml-1" target="_blank"><img src="logo_black.svg" class=" h-6" /></a>
                
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    <a class="text-black mr-10" href="https://twitter.com/ethbrno" rel="noopener noreferrer">Twitter
                    </a>
                    <a class="ml-3 text-black" href="https://matrix.to/#/#ethbrno:gwei.cz" rel="noopener noreferrer">Chat
                    </a>
                </span>
            </div>
        </div>
    </footer>);
};