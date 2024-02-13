export function Menu({ isOpen }) {
    return (
        <section className={`flex absolute top-[75px] right-0 p-2 w-[100%] flex-col items-center z-[100000] gap-5 bg-[#202020ce] border-l-[2px] border-[#4c1f69] menu ${isOpen ? 'open' : 'closed'}`}>
            <a href="http://localhost:5173/mercury" className='text-white hover:text-[#4c1f69]'>Mercury</a>
            <a href="http://localhost:5173/venus" className='text-white hover:text-[#4c1f69]'>Venus</a>
            <a href=" http://localhost:5173/earth" className='text-white hover:text-[#4c1f69]'>Earth</a>
            <a href="http://localhost:5173/mars" className='text-white hover:text-[#4c1f69]'>Mars</a>
            <a href="http://localhost:5173/jupiter" className='text-white hover:text-[#4c1f69]'>Jupiter</a>
            <a href="http://localhost:5173/saturn" className='text-white hover:text-[#4c1f69]'>Saturn</a>
            <a href="http://localhost:5173/uranus" className='text-white hover:text-[#4c1f69]'>Uranus</a>
            <a href="http://localhost:5173/neptune" className='text-white hover:text-[#4c1f69]'>Neptune</a>
        </section>
    );
}
