import React, { useContext} from 'react';
import MusicContext from '../MusicContext';

function Music({ handleSelectedSong}) {
  const { musicsData } = useContext(MusicContext);
  


  const computeSeconds = (secs) => {
    if (secs && !isNaN(secs)) {
      const minutes = Math.floor(secs / 60);
      const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(secs % 60);
      const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formattedMinutes}:${formattedSeconds}`;
    }
    return '00:00';
  };

  return (
    <div className='bg-[#130729] w-full'>
      <h1 className='pl-12 text-4xl font-bold text-slate-400 my-10'>Song</h1>
      <div className="flex flex-col">
        <div className="overflow-hidden w-full sm:-mx-6 lg:-mx-8">
          <div className=" w-full px-20">
            <div className="overflow-hidden w-full">
              <table className="w-11/12 text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-slate-800">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-slate-400 text-xl">Title</th>
                    <th scope="col" className="px-6 py-4 text-slate-400 text-xl">Artist</th>
                    <th scope="col" className="px-6 py-4 text-slate-400 text-xl">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {musicsData.map((musicData,index) => (
                    <tr
                      className={`border-b dark:border-slate-800 cursor-pointer ${
                        musicData.active ? "text-green-500" : "text-slate-400"
                      }`}
                      key={musicData.id}
                      onClick={() => {
                        handleSelectedSong(musicData);
                      }}          
                    >
                      <td className="whitespace-nowrap px-6 py-6 font-medium flex items-center gap-3"> 
                        <span>#{index + 1}</span><img src={musicData.cover} alt='Album Cover' className='w-10 h-10 rounded-xl' />{musicData.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {musicData.artist}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {computeSeconds(musicData.duration)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default Music;
