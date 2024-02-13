

export function Information({data}) {

    return (

        <section 
        className=
        "flex w-full items-center gap-[20px] justify-center max-[820px]:mt-[100px] max-[900px]:min-w-[0px] px-2 max-[900px]:justify-between pb-[100px] max-[501px]:flex-col ">

            <div className="w-[100%] min-[501px]:max-w-[300px] border-[1px] flex max-[501px]:items-center max-[501px]:justify-between items-start min-[501px]:justify-center min-[501px]:flex-col pl-2 h-[100px]">
                <p className="text-[#838391] text-[14px]">ROTATION TIME</p>
                <p className="text-[30px] max-[640px]:text-[22px] m-0 p-0 text-white max-[501px]:text-[28px] max-[501px]:pr-2"> {data.rotation} </p>
            </div>

            <div className="w-[100%] min-[501px]:max-w-[300px] border-[1px] flex max-[501px]:items-center max-[501px]:justify-between items-start min-[501px]:justify-center min-[501px]:flex-col pl-2 h-[100px]">
                <p className="text-[#838391] text-[14px]">REVOLUTION TIME</p>
                <p className="text-[30px] max-[640px]:text-[22px] m-0 p-0 text-white max-[501px]:text-[28px] max-[501px]:pr-2"> {data.revolution} </p>
            </div>

            <div className="w-[100%] min-[501px]:max-w-[300px] border-[1px] flex max-[501px]:items-center max-[501px]:justify-between items-start min-[501px]:justify-center min-[501px]:flex-col pl-2 h-[100px] ">
                <p className="text-[#838391] text-[14px]"> RADIUS </p>
                <p className="text-[30px] max-[640px]:text-[22px] m-0 p-0 text-white max-[501px]:text-[28px] max-[501px]:pr-2"> {data.radius} </p>
            </div>

            <div className="w-[100%] min-[501px]:max-w-[300px] border-[1px] flex max-[501px]:items-center max-[501px]:justify-between items-start min-[501px]:justify-center min-[501px]:flex-col pl-2 h-[100px]">
                <p className="text-[#838391] text-[14px]">AVARAGE TELP</p>
                <p className="text-[30px] max-[640px]:text-[22px] m-0 p-0 text-white max-[501px]:text-[28px] max-[501px]:pr-2"> {data.temperature} </p>
            </div>

        </section>
    )
}