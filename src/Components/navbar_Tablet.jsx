
import { Logo } from "./Logo";

export function Tablet() {
    return (
        <nav className="w-full flex-col gap-4 items-center justify-center border-b-[1px] border-white p-4">
            
            <section className='w-full flex justify-center items-center'>
               <Logo />
            </section>

            <section className='flex items-center justify-center hover:text-[#38384F] my-2  gap-10 max-[600px]:gap-6'>
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
    );
}
