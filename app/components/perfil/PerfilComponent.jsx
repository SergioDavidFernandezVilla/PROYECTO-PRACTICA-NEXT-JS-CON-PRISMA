//Dependencias
import Image from "next/image";
import Link from "next/link";

//Image
import perfil from "../../utils/assets/perfil.jpg"
import useHookToogleClick from "@/app/hooks/useHookToogleClick";

export const PerfilComponent = () => {

    const {handleClickToogle, modeToogle} = useHookToogleClick()

    return (
        <li className="flex justify-center items-center gap-1 relative">
            <figure className="h-9 w-9">
            <Image src={perfil} alt="xd" className="rounded-full h-full w-full"/>
            </figure>
            
            <button className="hover:cursor-pointer" onClick={handleClickToogle}>
                <strong>SopaDeMakaco</strong>
            </button>

            {modeToogle ? (
                <div className="absolute top-full w-full bg-zinc-900 rounded">
                    <nav className="w-full h-full">
                        <ul className="flex justify-center items-center flex-col">
                            <li className="w-full">
                                <Link href="#" className="block h-full w-full p-5 hover:bg-zinc-800">Configuration</Link>
                            </li>

                            <li className="w-full">
                                <Link href="#" className="block h-full w-full p-5 hover:bg-zinc-800">Logout</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            ) : null}
        </li>
    )
}