import { useState, useEffect, useRef } from "react";
import NavBar from '../components/Navbar.jsx';
import { Reorder } from "framer-motion"
import audioFile from '../assets/Tanpa_pesan_terakhir_x_jaga_selalu_hatimu_x_yang_telah_merelakanmu__speed_up___Reverb_(48k).mp3';

const initialItems = [
  "🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"
  ]

export default function Quotes() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(new Audio(audioFile));

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const toggleMusic = () => {
    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <section className={`h-full ${darkMode ? 'dark' : 'light'}`}>
      <NavBar darkMode={darkMode} ToggleDarkMode={toggleDarkMode} />
      <div className="md:mt-20 mt-10 px-4 mx-auto justify-center text-center items-center flex flex-col">
        <div className="bs text-white rounded-full bg-gray-800 bs w-full p-5 mt-10">
        <button onClick={toggleMusic}>
       {isMusicPlaying ? 'Matikan Musik' : 'Hidupkan Musik'}
       </button>
        </div>
        <Reorder.Group axis="y" onReorder={setItmes} values={items} >
        {items.map(item) =>{
          <Item key={item} item={item}/>
        }}
        <Reorder.Group/>
        <div className="bs rounded bg-gray-800 bs w-full p-5 mt-10">
          <p className="font-serif text-white">" Aku hanya ingin <br />
            Membuat mama bahagia. "</p>
          <h1 className="text-yellow-500">~ Tirta Merasa ingin membahagiakan mama</h1>
        </div>
        <div className="bs rounded bg-gray-800 bs w-full p-5 mt-10">
          <p className="font-serif text-white">" Aku hanya ingin mendengarkan sebuah lagu <br />
           Tanpa teringat tentang dirimu . "</p>
          <h1 className="text-yellow-500">~ Tirta Merasa Kangen</h1>
        </div>
        <div className="bs rounded bg-gray-800 bs w-full p-5 mt-10">
          <p className="font-serif text-white">" Melihat mu begitu indah namun <br />
            Memilikimu begitu susah. "</p>
          <h1 className="text-yellow-500">~ Tirta Merasa Konyol</h1>
        </div>
        <div className="bs rounded bg-gray-800 bs w-full p-5 mt-10">
          <p className="font-serif text-white">" Aku lebih suka melawak <br />
            Kalo suka kamu mah udah pasti di tolak. "</p>
          <h1 className="text-yellow-500">~ Tirta Merasa Overthingking</h1>
        </div>
      </div>
    </section>
  );
}
