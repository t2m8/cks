import LgJ from '../assets/images__6_-removebg-preview.svg'
import sttang from '../assets/sttang.jpeg'

export default function Jumbotron (){
  return(
    <div className='mt-14 md:mt-24 max-w-[1640px] mx-auto'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center text-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black'>
            Welcome<span className='text-red-500'>To</span>
          </h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            <span className='text-yellow-500'>CKS</span> E-SPORT
          </h1>
        </div>
        <img
          className='w-full max-h-[500px] object-cover'
          src={sttang}
          alt='/'
        />
      </div>
    </div>
    )
}
