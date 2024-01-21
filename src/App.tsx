import { useEffect,  useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { Show } from "./Show";

function App() {
  const [color, setColor] = useState("orange");
  const [opacity, setOpacity] = useState(0);
  const [count, setCount] = useState(0);
  const [name, setName] = useState<string>();
  const [handScale, setHandScale] = useState(1);
  const [isfirstPage, setIsFirstPage] = useState(true);

  

  const hexColorCodes = [
    "#FFDDC1",
    "#FFEDD8",
    "#FAE3D9",
    "#E1D5E7",
    "#D4EEEC",
    "#CFE7F5",
    "#E0E0E0",
    "#F8F8F8",
    "#D3D3D3",
    "#FFCDCD",
    "#B5EAD7",
    "#B4EEB4",
    "#ADD8E6",
    "#FFD700",
    "#FFEC8B",
    "#F0E68C",
    "#FFE4E1",
    "#E0FFFF",
    "#FFFACD",
    "#E6E6FA",
    "#F5F5F5",
    "#FFE4C4",
    "#FFFAF0",
    "#FFEBCD",
    "#F0F8FF",
    "#FFF5EE",
    "#F0FFF0",
    "#F0E68C",
    "#98FB98",
    "#FAFAD2",
    "#AFEEEE",
    "#E0FFFF",
    "#DDA0DD",
    "#8FBC8F",
    "#FFB6C1",
    "#DDA0DD",
    "#F0E68C",
    "#AFEEEE",
    "#FFE4C4",
    "#D3D3D3",
    "#FFB6C1",
    "#F08080",
    "#ADD8E6",
    "#FFDEAD",
    "#98FB98",
    "#FFC0CB",
    "#E0FFFF",
    "#20B2AA",
    "#FFE4E1",
    "#AFEEEE",
  ];

  setTimeout(() => {
    setOpacity(1);
  }, 4000);

  useEffect(() => {
    console.log(opacity);

    let intervalColor = setInterval(() => {
      let rand = Math.floor(Math.random() * hexColorCodes.length);
      setColor(hexColorCodes[rand]);
    }, 10);

    return () => {
      clearInterval(intervalColor);
    };
  }, [color]);

  useEffect(() => {
    const arrowScaleInterval = setInterval(() => {
      setHandScale((prevHandScale) => (prevHandScale === 1 ? 1.5 : 1));
    }, 500);

    const intervalCount = setInterval(() => {
      setCount((prevCount) => (prevCount === 0 ? 1 : 0));
    }, 1000);
    
    
    return () => {
      clearInterval(intervalCount);
      clearInterval(arrowScaleInterval);
    };
  }, []);
 

  document.body.style.backgroundColor = color;

  return isfirstPage ? (
    <>
    
      {count === 0 && (
        <div className="flex ">
          <div>
            <ConfettiExplosion />
          </div>
          <div className="absolute right-0">
            <ConfettiExplosion />
          </div>
        </div>
      )}

      <div className="container h-screen w-full">
        <div
          className={`text-6xl text-white absolute left-[34%] border-4 border-yellow-300 bg-yellow-300 rounded-lg shadow-xl shadow-gray-400`}
        >
          Jai Shree Ram
        </div>

        <div className="images flex">
          <img className="opacity-80 h-screen" src="Ram.png" alt="Ram Image" />
          <img
            className="absolute right-0 opacity-80 h-screen"
            src="Ram.png"
            alt="Ram Image"
          />
        </div>
      </div>
      <div className="flex-col absolute top-0 left-[38vw]">
        <input
          
          style={{ transition: "opacity 2s ease-in-out", opacity: opacity }}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter your Name!"
          value={name}
          className="text-white text-center absolute left-[-15%] h-12 top-96 w-[30vw]   bg-orange-200 rounded-xl border-4 border-black"
          type="text"
        />
        <div
          style={{
            transition: "opacity 2s ease-in-out",
            opacity: opacity,
            transform: `scale(${handScale})`,
          }}
          className={`text-4xl scale-[${handScale}] absolute top-[72%] left-36`}
        >
          👆
        </div>
        <button
          onClick={() => setIsFirstPage(false)}
          style={{ transition: "opacity 2s ease-in-out", opacity: opacity }}
          className={`text-white text-4xl   button text-bold bg-orange-200 rounded-3xl border-4  border-yellow-400 h-28 mt-[70vh] hover:scale-125 hover:bg-sky-200 px-14`}
        >
          Jai Shree Ram
        </button>
      </div>
    </>
  ) : (
    <Show name={name} />
  );
}

export default App;
