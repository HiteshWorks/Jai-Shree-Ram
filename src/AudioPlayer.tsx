import { useEffect, useRef } from "react";


  function AudioPlayer() {
  const audioref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    function playaudio(){
      audioref.current?.play();
    }


    window.addEventListener('click' , playaudio);
    
  


    return ()=>{
      window.removeEventListener('click' , playaudio);
    
    }

  }, []);

  return (
    <>
     
      <audio ref={audioref} src="RamBgmusic.mp3"></audio>
    </>
  );
}

export default  AudioPlayer;