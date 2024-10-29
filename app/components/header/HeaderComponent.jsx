//Dependencias
import Image from "next/image";
import Link from "next/link";

//Icons
import logo from "../../utils/assets/images/logo.webp"
import { IoMenu, IoSunny  } from "react-icons/io5";
import { PerfilComponent } from "../perfil/PerfilComponent";

const HeaderComponent = ({handleClickToogle}) => {

    return (
        <>
        <header className="grid grid-flow-col-dense h-20">    
                <nav className="flex justify-start items-center pl-5">
                    <ul className="flex justify-start items-center gap-5 w-full h-full">
                        <li className="flex justify-center items-center gap-2" onClick={handleClickToogle}>
                            <IoMenu className="w-9 h-9 hover:cursor-pointer" />    
                        </li>

                        <li className="flex justify-center items-center gap-2">
                            <Image src={logo} alt="xd" width={36} height={36} 
                            className="rounded-lg" />
                            <Link href="#" className="text-xl hover:text-red-300">SteamVideo</Link>
                        </li>
                    </ul>                    
                </nav>


                <nav className="flex justify-end items-center pr-5">
                    <ul className="flex justify-end items-center gap-5 w-full h-full">
                        <PerfilComponent/>

                        <li className="flex justify-center items-center gap-1">
                            <IoSunny className="w-7 h-7 hover:cursor-pointer"/>
                        </li>
                    </ul>
                </nav>
        </header>
    </>
    )
}

export default HeaderComponent;
