

export function Sections({Hstate, setIndex, index, color}) {

    return (
        <div className="flex flex-row items-center justify-between absolute top-[77px] h-[60px] w-full border-b-[1px] max-[320px]:text-[12px] min-[501px]:hidden">
            <span onClick={() => Hstate(0)} className={`relative flex cursor-pointer justify-center h-full items-center text-[14px] w-full max-[320px]:text-[12px] h-[50px]`}>
                <p className="">OVERVIEW</p>
                {index == 0 && <span className="w-[100%] bottom-0 absolute  l h-[5px]" style={index == 0 ? {'background': color} : {'background': 'none'}}></span>}
            </span>

            <span onClick={() => Hstate(1)} className={`relative flex cursor-pointer justify-center h-full items-center text-[14px] w-full max-[320px]:text-[12px] h-[50px]`}>
                <p>INTERNAL STRUCTURE</p>
                {index == 1 && <span className="w-[100%] bottom-0 absolute l h-[5px]" style={index == 1 ? {'background': color} : {'background': 'none'}}></span>}
            </span>

            <span onClick={() => Hstate(2)} className={`relative flex cursor-pointer justify-center h-full items-center text-[14px] w-full max-[320px]:text-[12px] h-[50px]`}>
                <p>SURFACE GEOLOGY</p>
                {index == 2 && <span className="w-[100%] bottom-0 absolute l h-[5px]" style={index == 2 ? {'background': color} : {'background': 'none'}}></span>}
            </span>
    </div>
    )
}