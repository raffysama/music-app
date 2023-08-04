import React from 'react';
import SideBars from './components/SideBars';
import Home from './pages/Home';
import Artist from './pages/Artist';
import Music from './pages/Music';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import './App.css';
import { MusicProvider } from './MusicContext';
import PlayerControl from './components/PlayerControl';
import { useState } from 'react';
import songdata from './data';

function App() {


  const [selectedSong, setSelectedSong] = useState();
  const [data,setData] = useState(songdata)


  const handleSelectedSong = (song) => {
    setSelectedSong(song);
    const newData = data.map((elem) => {
      if (elem.id === song.id) {
        return {
          ...elem,
          active: !elem.active,
        };
      } else {
        return elem;
      }
    });
    setData(newData)
    console.log(newData)
  };



  return (
    <div>
      <Router>
          <MusicProvider>
            {/* <Navbar /> */}
            <div className="flex flex-row">
              <SideBars/>
                <Routes>
                  <Route path='/' element={<Home handleSelectedSong={handleSelectedSong}/>}></Route>
                  <Route path='/music' element={<Music handleSelectedSong={handleSelectedSong} selectedSong={selectedSong}/>}></Route>
                  <Route path='/artist' element={<Artist handleSelectedSong={handleSelectedSong}/>}></Route>
                </Routes>
            </div>
            {selectedSong && <PlayerControl selectedSong={selectedSong} />}
          </MusicProvider>
      </Router>
    </div>
  );
}

export default App;
