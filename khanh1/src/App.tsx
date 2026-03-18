import { useState } from 'react'
import { data } from "./data";

import './App.css'

function App() {
   function handleClick(item: any) {
    setSelectedMovie(item);
  }
  const [selectedMovie, setSelectedMovie] = useState(data[0]);
  return (
    <>
      <div className="px-[84px] py-[15px]">
        <div className="flex justify-center">
          <p className="flex-1 text-4xl text-amber-50">Anonime</p>
          <p className="flex-1 text-[18px] font-thin text-gray-500">Home</p>
          <p className="flex-1 text-[18px] font-thin text-gray-500">List anime</p>
          <input
            type="text"
            placeholder="Search anime or movie"
            className="w-[400px] h-[34px] rounded-[37px] bg-gray-700 border border-gray-500 px-5 outline-none"
          />
        </div>
        <div className='py-[15px]'>
          <p className="text-[32px] text-amber-50">Explore</p>
        </div>
        <div className='py-[15px]'>
          <p className="text-[22px] text-gray-500">What are you gonna watch today ?</p>
        </div>
        <div key={selectedMovie?.id}>
          <button>
            <div className="relative w-full h-auto">
              <img
                className="w-screen h-[250px] rounded-[16px] object-cover"
                src={selectedMovie?.image}
                alt={selectedMovie?.movieName}
              />
              <div className="absolute left-[40px] top-[45px] text-white max-w-[500px]">
                <p className="text-3xl text-left font-bold mb-2">{selectedMovie?.movieName}</p>
                <p className="text-sm text-left leading-relaxed text-gray-200">{selectedMovie?.description}</p>
              </div>
            </div>
          </button>
        </div>
        <div className='py-[15px]'>
          <p className="text-[36px] text-amber-50">New Release</p>
        </div>
        <div>
          <div className="grid grid-cols-6 gap-2.5 justify-center">
            {data.map((item) => (
              <button onClick={() => handleClick(item)} key={item.id}>
                <div className="relative w-full h-auto justify-center">
                  <img
                    className="w-[200px] h-[100px] rounded-[16px] object-cover" 
                    src={item.image} 
                    alt={item.movieName} 
                  />
                  <div className="absolute left-0 right-0 text-white text-center">
                    <p className="text-[16px] text-center font-light mb-2">{item.movieName}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
