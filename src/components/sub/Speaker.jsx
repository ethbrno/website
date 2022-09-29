export const Speaker = ({ speaker }) => {
    //console.log(speaker);
    const photo = speaker.photos[0].split(":");
    return (
        <a class="inline-flex items-center">
            <img alt="blog" src={`https://spec.utxo.cz/22/photos/speakers/${speaker.id}-${photo[0]}.${photo[1]}`} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
            <span class="flex-grow flex flex-col pl-4">
                <span class="title-font font-medium text-white">{speaker.name}</span>
                <span class="text-gray-500 text-xs tracking-widest mt-0.5">{speaker.bio}</span>
            </span>
        </a>
    );
};