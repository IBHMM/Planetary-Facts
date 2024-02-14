import {Logo} from './Logo';


export function Desktop() {
    return (

        <nav className="flex flex-row w-full border-b-[1px] border-white justify-evenly p-4 ">
            
            <section className=''>
               <Logo />
            </section>

            <section className='flex items-center gap-10 hover:text-[#38384F]'>
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
    )
}

