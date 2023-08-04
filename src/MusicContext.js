import { createContext } from "react";
import chillHop from "./data";


const MusicContext = createContext();

export function MusicProvider({children}){
    
    const musicData = chillHop();

    return(
        <MusicContext.Provider value={{musicsData: musicData}}>
            {children}
        </MusicContext.Provider>    
    );

}

export default MusicContext; 