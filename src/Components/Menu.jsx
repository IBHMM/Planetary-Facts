export function Menu({ isOpen }) {
    return (
        <section className={`flex  absolute top-[75px] right-0 p-2 w-[100%] justify-evenly items-center z-[100000] w-full gap-5 bg-[#202029ce] border-l-[2px] border-[#4c1f69] menu ${isOpen ? 'open' : 'closed'}`}>
                <div className="flex flex-col h-full items-center justify-evenly  relative w-full">
                    <a href="http://localhost:5173/mercury" className='text-[#419EBB] hover:text-[#fff] relative flex gap-10 items-center w-[80%] '> <img className="w-[30px] h-[30px]" src="./src/planets/images/planet-mercury.svg" alt="" /> Mercury</a>
                    <a href="http://localhost:5173/venus" className='text-[#EDA249] hover:text-[#fff] relative flex gap-10 items-center w-[80%]'> <img className="w-[30px] h-[30px] " src="./src/planets/images/planet-venus.svg" alt="" /> Venera </a>
                    <a href=" http://localhost:5173/earth" className='text-[#6f2ed6] hover:text-[#fff] relative flex gap-10 items-center w-[80%]'> <img className="w-[30px] h-[30px] mr-2" src="./src/planets/images/planet-earth.svg" alt="" /> Earth </a>
                    <a href="http://localhost:5173/mars" className='text-[#D14C32] hover:text-[#fff] relative flex gap-10 items-center w-[80%]'> <img className="w-[30px] h-[30px] mr-3" src="./src/planets/images/planet-mars.svg" alt="" /> Mars </a>
                </div>

                <div className="flex flex-col h-full items-center w-[80%] relative justify-evenly  w-full">
                    <a href="http://localhost:5173/jupiter" className='text-[#D83A34] hover:text-[#fff] relative flex gap-10 items-center w-[80%]'> <img className="w-[30px] h-[30px]" src="./src/planets/images/planet-jupiter.svg" alt="" />Jupiter</a>
                    <a href="http://localhost:5173/saturn" className='text-[#CD5120] hover:text-[#fff] relative flex gap-10 items-center w-[80%]'> <img className="w-[30px] h-[30px]" src="./src/planets/images/planet-saturn.svg" alt="" /> Saturn</a>
                    <a href="http://localhost:5173/uranus" className='text-[#1ec2a4] hover:text-[#fff] relative flex gap-10 items-center w-[80%]'> <img className="w-[30px] h-[30px]" src="./src/planets/images/planet-uranus.svg" alt="" /> Uranus</a>
                    <a href="http://localhost:5173/neptune" className='text-[#2d68f0] hover:text-[#fff] relative flex gap-10 items-center w-[80%]'> <img className="w-[30px] h-[30px]" src="./src/planets/images/planet-neptune.svg" alt="" /> Neptune </a>
                </div>
        </section>
    );
}
