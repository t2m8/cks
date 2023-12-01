import LgJ from '../assets/images__6_-removebg-preview.svg'
import sttang from '../assets/sttang.jpeg'

export default function Jumbotron (){
  return(
    <section className="mt-16 md:mt-24 bg-cyan-500 w-full">
      <div className="px-4 mx-auto flex flex-wrap md:flex md:justify-between md:items-center">
        <div className="pt-6">
        <h1>Selamat Datang Di website Cks</h1>
        </div>
        {/*w-1/2 h-2/5*/}
        <img className="" src={sttang} alt="cks" />
      </div>
    </section>
    )
}