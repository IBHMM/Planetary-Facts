import {Navbar} from '../Components/Navbar'
import {Main} from '../Components/Main.jsx'
import { useContext } from 'react';
import { PlanetContext } from '../App';
import { Information } from '../Components/Information.jsx'


export function Saturn() {

    const data = useContext(PlanetContext);

    return(
        <>
            <Navbar />
            <Main data={data[5]}/>
            <Information data={data[5]} />
        </>
    )
}