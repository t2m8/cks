import { Outlet, Link } from "react-router-dom";

export default function Footer (){
  return(
    <div className="text-center text-sm pb-6 text-neutral-500">
      <div>© {new Date().getFullYear()} by t2m8</div>
    </div>
    )
}