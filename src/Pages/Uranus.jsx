import {Navbar} from '../Components/Navbar'
import {Main} from '../Components/Main.jsx'
import { useContext } from 'react';
import { PlanetContext } from '../App';
import { Information } from '../Components/Information.jsx'


export function Uranus() {

    const data = useContext(PlanetContext);

    return(
        <>
            <Navbar />
            <Main data={data[6]}/>
            <Information data={data[6]} />
        </>
    )
}