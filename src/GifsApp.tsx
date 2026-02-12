import {mockGifs} from "./mock-data/gifs.mock.tsx";

export const GifsApp=()=>{
    return(
        <>
            {/*Header*/}
            <div className="content-center">
                <h1>Buscador de Gifs</h1>
                <p>Descubre y comparte el gifs perfecto</p>
            </div>
            {/*Search*/}
            <div className="search-container">
                <input type="text" placeholder="Buscar gifs"/>
                <button>Buscar</button>
            </div>
            {/*Busquedas Previas*/}
            <div className="previous-searches">
                <h2>Busquedas Previas</h2>
                <ul className="previous-searches-list">
                    <li>Goku</li>
                    <li>naruto</li>
                    <li>Dragon Ball</li>
                </ul>
            </div>

            {/*Gifs*/}
            <div className="gifs-container">
                {
                    mockGifs.map((gif) =>(
                        <div className="gif-card" key={gif.id}>
                            <img src={gif.url} alt={gif.title}/>
                            <h3>{gif.title}</h3>
                            <p>{gif.width} x {gif.height}(1.5MB)</p>
                        </div>
                    ))

                }
            </div>
        </>
    )
}