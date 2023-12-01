import LgJ from '../assets/images__6_-removebg-preview.svg'

export default function Jumbotron (){
  return(
    <section className="mt-14 w-full">
      <div className="px-4 mx-auto flex flex-col md:flex md:justify-between md:items-center">
        <div className="pt-6">
        <h1>Selamat Datang Di website Cks</h1>
        </div>
        
        <img className="" src={LgJ} alt="cks" />
      </div>
    </section>
    )
}