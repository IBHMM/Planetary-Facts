import {Logo} from './Logo';


export function Desktop() {
    return (

        <nav className="flex flex-row w-full border-b-[1px] border-white justify-evenly p-4 ">
            
            <section className=''>
               <Logo />
            </section>

            <section className='flex items-center gap-10 hover:text-[#38384F]'>
                <a href="http://localhost:5173/mercury" className='text-white hover:text-[#4c1f69]'>Mercury</a>
                <a href="http://localhost:5173/venus" className='text-white hover:text-[#4c1f69]'>Venus</a>
                <a href=" http://localhost:5173/earth" className='text-white hover:text-[#4c1f69]'>Earth</a>
                <a href="http://localhost:5173/mars" className='text-white hover:text-[#4c1f69]'>Mars</a>
                <a href="http://localhost:5173/jupiter" className='text-white hover:text-[#4c1f69]'>Jupiter</a>
                <a href="http://localhost:5173/saturn" className='text-white hover:text-[#4c1f69]'>Saturn</a>
                <a href="http://localhost:5173/uranus" className='text-white hover:text-[#4c1f69]'>Uranus</a>
                <a href="http://localhost:5173/neptune" className='text-white hover:text-[#4c1f69]'>Neptune</a>
            </section>

        </nav>
    )
}

