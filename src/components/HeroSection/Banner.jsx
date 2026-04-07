import React from 'react'
import HeroImg from '../../assets/pngwing 1.png'
function Banner() {
  return (
    <div>
        <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
    <img
      src={HeroImg}
      className="max-w-sm rounded-lg mr-30"
    />
    <div>
      <h1 className="text-5xl font-bold ml-30"> Books to freshen up <br /> your bookshelf</h1>

     <button className="btn btn-success mt-6 ml-30">View The List</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner