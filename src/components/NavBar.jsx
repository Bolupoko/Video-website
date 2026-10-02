import { IconContext } from "react-icons";
import { TiThMenu } from "react-icons/ti";

function NavBar() {
  return (
    <div>
      <nav className="bg-black h-12 md:h-20 w-screen flex border border-t-amber-100 border-b-amber-100 justify-between items-center px-5">
        <logo className="text-amber-100 font-semibold text-xl md:text-2xl">ADUAVI'S<span className="text-white italic">Vlog</span></logo>
        <div className="flex gap-6">
            < TiThMenu  className ="text-white text-2xl md:text-3xl font-bold"/>
        < TiThMenu  className ="text-amber-100 text-2xl md:text-3xl font-bold"/>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
