import {CustomHeader} from "./shared/components/CustomHeader.tsx";
import {SearchBar} from "./shared/components/SearchBar.tsx";
import {PreviousSearches} from "./gifs/components/PreviousSearches.tsx";
import {GifList} from "./gifs/components/GifList.tsx";

import {useState} from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions.ts";
import type { Gif } from "./gifs/interfaces/gif.interface.ts";

export const GifsApp=()=>{
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms,setPreviousTerms]=useState<string[]>([]);

    const handleTermClicked=(term:string)=>{
        console.log({term});
    }
    const handleSearch= async(query:string='')=>{
        query=query.trim().toLowerCase();
        if (query.length===0)return;
        if (previousTerms.includes(query))return;
        setPreviousTerms([query,...previousTerms].splice(0,8));
        const gifs=await getGifsByQuery(query);
        setGifs(gifs);
        
    }
    return(
        <>
            {/*Header*/}
            <CustomHeader title="Buscador de Gifs" description="descubre y comparte tus gifs favoritos"/>
            {/*Search*/}
           <SearchBar
               placeholder="busca lo que quieras"
               onQuery={handleSearch}/>

            {/*Busquedas Previas*/}
           <PreviousSearches
               searches={previousTerms}
               onLabelClicked={handleTermClicked}/>

            {/*Gifs*/}
            <GifList gifs={gifs}/>
        </>
    )
}