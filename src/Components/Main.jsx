import { useState } from "react";
import {Sections} from './Sections.jsx';

export function Main({data}) {

    const [index, setIndex] = useState(0);

    const Hstate = i => {
        const new_index = i;
        setIndex(new_index);
    }

    const color = data.color;

    return (
        <main className="flex w-full text-white h-auto gap-[12%] max-[820px]:flex-col max-[820px]:items-center max-[820px]:pt-10 max-[820px]:gap-0">

            <Sections Hstate={Hstate} index={index} setIndex={setIndex} color={color} />

            <section className="flex items-center max-[820px]:justify-center justify-end w-[50%] min-[820px]:ml-3 min-h-[501px] min-w-[200px]">
                <img src={(index == 0) ? data.images.planet : (index == 2) ? data.images.internal : data.images.geology } alt="" />
            </section>

            <section className="max-[400px]:px-3  flex flex-col w-[50%] min-[1001px]:pb-20 justify-center gap-5 max-[820px]:flex-row max-[820px]:w-full max-[820px]:items-center max-[820px]:justify-enevly ">

                <div className="flex flex-col gap-5 max-[820px]:w-[50%] min-[501px]:pl-4 max-[501px]:w-full max-[501px]:text-center max-[501px]:items-center">
                    <p className="text-[80px]">
                        {data.name}
                    </p>
                    <p className="w-full max-[501px]:w-full min-[501px]:max-w-[350px] h-[170px] text-[#838391] max-[501px]:h-[145px]">
                        {
                            (index == 0) ? data.overview.content : (index == 2) ? data.structure.content : data.surface.content 
                        }
                    </p>

                    <div className="flex gap-3 items-center max-[501px]:justify-center max-[300px]:mt-2">
                        <p className=" text-[#38384F]"> Source </p>
                        <a className="w-full max-w-[100px] items-center text-[14px] text-[#838391] flex gap-3" target="blank" href={(index == 0) ? data.overview.source : (index == 2) ? data.structure.source : data.surface.source }> 
                        Wikipedia
                        <img src="../src/planets/images/icon-source.svg" alt="" />
                        </a>
                    </div>
                </div>


                <div className="flex flex-col items-start gap-[10px] max-[820px]:w-[40%] pl-3 max-[501px]:hidden max-[501px]:w-full max-[501px]:text-center">
                    <span onClick={() => Hstate(0)} className={`flex cursor-pointer pl-5 gap-10 items-center border-[1px] border-[#38384F] w-full h-[50px] max-w-[350px]  hover:bg-[#6f2ed6] `} style={index == 0 ? {'background': color} : {'background': 'none'}}>
                        <p className="text-[14px] text-[#838391]"> 01 </p>
                        <p className="">OVERVIEW</p>
                    </span>

                    <span onClick={() => Hstate(1)} className={`flex cursor-pointer pl-5 gap-10 items-center border-[1px] border-[#38384F] w-full h-[50px] max-w-[350px] hover:bg-[#6f2ed6] `}  style={index == 1 ? {'background': color} : {'background': 'none'}}>
                        <p className="text-[14px] text-[#838391]" > 02 </p>
                        <p>INTERNAL STRUCTURE</p>
                    </span>

                    <span onClick={() => Hstate(2)} className={`flex cursor-pointer pl-5 gap-10 items-center border-[1px] border-[#38384F] w-full h-[50px] max-w-[350px] hover:bg-[#6f2ed6] `}  style={index == 2 ? {'background': color} : {'background': 'none'}}>
                        <p className="text-[14px] text-[#838391]" > 03 </p>
                        <p>SURFACE GEOLOGY</p>
                    </span>
                </div>


            </section>

        </main>
    )
}