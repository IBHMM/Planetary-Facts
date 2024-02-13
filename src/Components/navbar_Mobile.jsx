import { useState } from "react";
import {Logo} from './Logo';
import { Menu } from "./Menu";


export function Mobile() {

    const [menu, setMenu] = useState(false);


    const handleMenu = () => setMenu(!menu);
 

    return (
        <nav className="relative flex flex-row w-full border-b-[1px] border-white items-center justify-between p-4 ">

           <section className="text-[90%] felx itens-center justify-center">
                <Logo />
           </section>

           <section className="h-[100%] flex items-center" onClick={handleMenu}>
                <img src="../src/planets/images/icon-hamburger.svg" alt=""  className="z-100" />
           </section>

            {
            
                menu && <Menu isOpen={menu}/>
            
            }
        </nav>
    );
}
