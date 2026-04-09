import React from 'react'
import HeroImg from '../../assets/pngwing 1.png'

function Banner() {
  return (
    <div className="container mx-auto my-8">
      <div className="hero bg-base-200 min-h-[70vh] rounded-2xl">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:justify-between gap-6 lg:gap-0 p-4 lg:p-12">
          
          {/* Image */}
          <img
            src={HeroImg}
            alt="Hero"
            className="w-full max-w-sm lg:max-w-md rounded-lg"
          />

          {/* Text & Button */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Books to freshen up <br /> your bookshelf
            </h1>
            <button className="btn btn-success text-lg">
              View The List
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner