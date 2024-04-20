const Hero = () => {
  return (
    <div className="bg-yellow-400 pb-16 px-4">
      <div className="container mx-auto flex flex-col gp-2">
        <div className="flex items-center">
          <h1 className="text-xl text-white font-semibold pt-4">
            get the best hotels
          </h1>
          <img src="hotel.png" className="mt-1 ml-2 h-8" />
        </div>
        <div className="flex items-center/">
          <p className="text-white">
            we take care of you
          </p>
          <img src="love.png" className="mt-1 ml-1 h-5" />
        </div>
      </div>
    </div>
  )
}

export default Hero;