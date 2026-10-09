import { IconContext } from "react-icons";
import { TiThMenu } from "react-icons/ti";

function NavBar() {
  return (
    <div>
      <nav className="fixed inset-x-0 top-0 z-50 bg-black h-12 md:h-18 w-screen flex border border-t-amber-100 border-b-amber-100 justify-between items-center px-5 md:px-64 ">

        <logo className="text-amber-100 font-semibold text-xl md:text-2xl">ADUAVI'S<span className="text-white italic">Vlog</span></logo>


        <div className="hidden md:block">
          <ul className="flex text-[#a8a883] gap-12 text-[12px] font-bold ">
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">WORKS</a></li>
            <li><a href="#">PROCESS</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </div>


        <div className="flex gap-6">
            < TiThMenu  className ="text-white text-2xl md:text-3xl font-bold"/>
        < TiThMenu  className ="md:hidden text-amber-100 text-2xl md:text-3xl font-bold"/>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
