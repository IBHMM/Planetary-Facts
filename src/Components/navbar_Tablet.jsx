
import { Logo } from "./Logo";

export function Tablet() {
    return (
        <nav className="w-full flex-col gap-4 items-center justify-center border-b-[1px] border-white p-4">
            
            <section className='w-full flex justify-center items-center'>
               <Logo />
            </section>

            <section className='flex items-center justify-center hover:text-[#38384F] my-2  gap-10 max-[600px]:gap-6'>
                <a href="http://localhost:5173/mercury" className='text-[#419EBB] hover:text-[#fff]'>Mercury</a>
                <a href="http://localhost:5173/venus" className='text-[#EDA249] hover:text-[#fff]'>Venus</a>
                <a href=" http://localhost:5173/earth" className='text-[#6f2ed6] hover:text-[#fff]'>Earth</a>
                <a href="http://localhost:5173/mars" className='text-[#D14C32] hover:text-[#fff]'>Mars</a>
                <a href="http://localhost:5173/jupiter" className='text-[#D83A34] hover:text-[#fff]'>Jupiter</a>
                <a href="http://localhost:5173/saturn" className='text-[#CD5120] hover:text-[#fff]'>Saturn</a>
                <a href="http://localhost:5173/uranus" className='text-[#1ec2a4] hover:text-[#fff]'>Uranus</a>
                <a href="http://localhost:5173/neptune" className='text-[#2d68f0] hover:text-[#fff]'>Neptune</a>
            </section>

        </nav>
    );
}
