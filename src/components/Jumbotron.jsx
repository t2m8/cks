import LogoCks from '../assets/cks.svg'

export default function Jumbotron (){
  return(
    <section className="mt-14 w-full">
      <div className="px-4 mx-auto flex flex-col md:flex md:justify-between md:items-center">
        <div className="pt-6">
        <h1>Selamat Datang Di website Cks</h1>
        </div>
        
        <img className="" src={LogoCks} alt="cks" />
      </div>
    </section>
    )
}