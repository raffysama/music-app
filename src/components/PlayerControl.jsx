import React, { useContext } from 'react'
import { useRef,useState,useEffect} from 'react';
import MusicContext from '../MusicContext';
import {FaPlay,FaPause,  } from 'react-icons/fa'
import {MdSkipNext,MdSkipPrevious} from 'react-icons/md'
import {PiSpeakerSimpleSlashBold,PiSpeakerSimpleHighBold,PiSpeakerSimpleLowBold, PiSpeakerSimpleNoneBold} from 'react-icons/pi'
import Player from './Player';

function PlayerControl({selectedSong}) {

  
    const audioElement = useRef(null);
    const progressBar = useRef();
    const {musicsData} = useContext(MusicContext);

    const [isPlaying, setIsplaying] = useState(false)
    const [durationTime, setNewDuration] = useState();
    const [currentTime, setCurrentTime] = useState();
    const [currentSong, setCurrentSong] = useState(musicsData[0])
    const [isOpenPlayer, setIsOpenPlayer] = useState(false);
    const [volume, setVolume] = useState(30);
    const [mute, setMute] = useState(false);



    const playPause = () =>{
      setIsplaying(!isPlaying);
    }

    const onPlaying = () => {
      const duration = audioElement.current.duration;
      const ct = audioElement.current.currentTime;

      const seconds = Math.floor(duration)
    
      setNewDuration(seconds);
      setCurrentTime(ct);
    
      setCurrentSong({
        ...currentSong,
        progress: (ct / duration) * 100,
        length: duration,
      });
    };

    const computeSeconds = (secs) =>{
      if(secs && !isNaN(secs)){
        const minutes = Math.floor(secs / 60);
        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${formattedMinutes}:${formattedSeconds}`
      }
      return '00:00';
    }
    

    useEffect(() => {
      if (audioElement && audioElement.current) {
        const clampedVolume = Math.max(0, Math.min(100, volume));
        audioElement.current.volume = clampedVolume / 100;
      }
      }, [volume, audioElement]);

    const handleVolumeChange = (e) => {
      const newVolume = parseInt(e.target.value, 10);
      setVolume(newVolume);
    };



    const previousSong = () =>{
      
      const index = musicsData.findIndex (x => x.id === currentSong.id)
      if (index === 0){
        setCurrentSong(musicsData[musicsData.length - 1])
      }
      else{
        setCurrentSong(musicsData[index - 1])
      }

      audioElement.current.currentTime = 0
    }

    const nextSong = () =>{
      
      const index = musicsData.findIndex (x => x.id === currentSong.id)
      if (index === musicsData.length - 1){
        setCurrentSong(musicsData[0])
      }
      else{
        setCurrentSong(musicsData[index + 1])
      }
      
    }

    const handleModal = () => {
      setIsOpenPlayer(!isOpenPlayer);
      
    }


    const progressChange = (e) =>{
      let progressWidth = progressBar.current.clientWidth;
      const offset = e.nativeEvent.offsetX;

      const progressOffset = offset / progressWidth * 100;
      audioElement.current.currentTime = progressOffset / 100 * currentSong.length;
    }

    useEffect(() => {
      setCurrentSong(selectedSong);
      setIsplaying(true);
    }, [selectedSong]);

    useEffect(() => {
      if (audioElement.current) {
        if (isPlaying) {
          audioElement.current.play();
        } else {
          audioElement.current.pause();
        }
      }
    }, [currentSong?.audio, isPlaying]);


  return (
    <>
    {isOpenPlayer ? <Player 
      handleModal={handleModal}
      currentSong={currentSong}
      isPlaying={isPlaying}
      previousSong={previousSong}
      playPause={playPause} 
      nextSong={nextSong}
      audioElement={audioElement}
      onPlaying={onPlaying}
      progressChange={progressChange}
      progressBar={progressBar}
      computeSeconds={computeSeconds}
      currentTime={currentTime}
      durationTime={durationTime}
      handleVolumeChange={handleVolumeChange}
      volume={volume}
      setVolume={setVolume}
      mute={mute}
      setMute={setMute}
      /> : null}
    <div className='sticky bottom-0 w-full bg-[#0f0225]'>
      <div>  
        <div className='sticky bottom-0 w-full container mx-auto px-16 '>  
          <div className=' bg-[#0f0225] flex flex-row justify-between py-5 px-5'>
            <div className=' w-1/3 cursor-pointer pt-2' >
              {currentSong && (
                <div className='flex '>
                  {/* <img className='animate-bounce w-16 h-16 absolute left-40 top-6' src={tap} alt="tap" /> */}
                  <div className='pr-5 '><img src={currentSong.cover} alt='Album Cover' className='w-14 h-14 rounded-full animate-spin  mr-3' onClick={ () => setIsOpenPlayer(handleModal)} /></div>
                  <div className='flex justify-center items-center gap-4'>
                  <div><MdSkipPrevious className='cursor-pointer text-slate-400' 
                        size={30}
                        onClick={previousSong}/></div>
                      {isPlaying ? 
                      <FaPause className='cursor-pointer text-slate-400' size={20} onClick={playPause}/> 
                      :<FaPlay className='cursor-pointer text-slate-400' size={20} onClick={playPause}/>}
                  <div><MdSkipNext className='cursor-pointer text-slate-400' 
                        size={30}
                        onClick={nextSong}/></div>
                  </div>
                </div>
              )}
            </div>
              <audio src={currentSong.audio} ref={audioElement} 
                    onTimeUpdate={onPlaying}
                    muted={mute}
                    >
              </audio>
                <div className='w-full pr-10'>
                  <div className="flex justify-center flex-col">
                    <div className='text-slate-400 pb-1 font-Poppins font-bold'>{currentSong.name}</div>
                    <div className="bg-slate-300 w-full h-2 cursor-pointer  rounded-full" onClick={progressChange} ref={progressBar}>
                      <div className="w-0 h-full bg-green-600 rounded-full" style={{width: `${currentSong.progress+"%"}`}}></div>
                    </div>
                    <div className='flex justify-between text-slate-400 pt-1'>
                      <p>{computeSeconds(currentTime)}</p>
                      <p>{computeSeconds(durationTime)}</p>
                  </div> 
                  </div>
                </div>
                <div className='flex justify-center items-center'>
                    {mute || volume === 0 ? (
                      <PiSpeakerSimpleSlashBold className='text-slate-200 cursor-pointer' size={20} onClick={() => setMute(!mute)} />
                      ): volume >= 50 ? (
                      <PiSpeakerSimpleHighBold className='text-slate-200 cursor-pointer' size={20} onClick={() => setMute(!mute)} />
                      ) : volume >= 20 ? (
                      <PiSpeakerSimpleLowBold className='text-slate-200 cursor-pointer'size={20} onClick={() => setMute(!mute)} />
                      ): volume >= 1 ? (
                      <PiSpeakerSimpleNoneBold className='text-slate-200 cursor-pointer' size={20} onClick={() => setMute(!mute)} />
                      )
                      : null}
                  <input
                    type="range"
                    value={volume}
                    onChange={handleVolumeChange}
                    min={0}
                    max={100}
                    className="transparent h-1.5 w-20 cursor-pointer appearance-none rounded-lg bg-neutral-200 thumb-color"
                    style={{
                      background: `linear-gradient(to right, #16a34a 0%, #16a34a ${volume}%, #16a34a ${volume}%, #e2e8f0 100%)`
                    }}
                  />
                </div>
          </div>
        </div>
      </div> 
    </div>
    </>
  ) 
}

export default PlayerControl
