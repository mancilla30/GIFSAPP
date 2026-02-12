import {CustomHeader} from "./shared/components/CustomHeader.tsx";
import {SearchBar} from "./shared/components/SearchBar.tsx";
import {PreviousSearches} from "./gifs/components/PreviousSearches.tsx";
import {GifList} from "./gifs/components/GifList.tsx";
import {mockGifs} from "./mock-data/gifs.mock.tsx";

export const GifsApp=()=>{
    return(
        <>
            {/*Header*/}
            <CustomHeader title="Buscador de Gifs" description="descubre y comparte tus gifs favoritos"/>
            {/*Search*/}
           <SearchBar placeholder="busca lo que quieras"/>
            {/*Busquedas Previas*/}
           <PreviousSearches searches={['Goku','Dragon Ball Z']}/>
            {/*Gifs*/}
            <GifList gifs={mockGifs}/>
        </>
    )
}