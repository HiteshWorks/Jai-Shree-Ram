import { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";


interface ShowProps {
  name: string | undefined;
}

export const Show: React.FC<ShowProps> = ({ name }) => {
  const [count, setCount] = useState(0);
 

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prevCount) => (prevCount === 0 ? 1 : 0));
    }, 1000);

  
     
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
    
      {count == 0 && (
        <>
          <div>
            <ConfettiExplosion />
          </div>
          <div className="absolute right-0">
            <ConfettiExplosion />
          </div>
          <div className="absolute left-[50vw]">
            <ConfettiExplosion />
          </div>
          <div className="absolute bottom-0 left-[50vw]">
            <ConfettiExplosion />
          </div>
          <div className="absolute bottom-0">
            <ConfettiExplosion />
          </div>
          <div className="absolute bottom-0  right-0">
            <ConfettiExplosion />
          </div>
        </>
      )}

      <div className="flex">
        <img className="h-screen" src="RamShow.png" alt="Ram pics" />
        <div className="showContainer shadow-xl shadow-gray-400 text-red-600 p-5 text-2xl leading-relaxed bg-orange-200 absolute top-44 left-[25%] rounded-lg h-[50vh] w-[50vw]">
          Heartfelt congratulations to everyone on the auspicious occasion of
          the Shree Ram Mandir inauguration in Ayodhya. May the temple stand as
          a symbol of unity, peace, and devotion, fostering harmony and
          spiritual growth. Wishing blessings to all who contributed to this
          momentous achievement.{" "}
          <strong className="text-6xl text-orange-400 mt-3 mx-12">
            🕊️Jai Shri Ram!🙏
          </strong>
          <div className="flex mt-4 text-purple-400 justify-end">
            {" "}
            From:{name ? name.toUpperCase() : "RamBhakt"}
          </div>
        </div>
        <img
          className="h-screen absolute right-0 z-[-1]"
          src="RamShow.png"
          alt="Ram pics"
        />
      </div>
    </>
  );
};
