import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { TakeData } from './Components/takedata';
import { Earth } from './Pages/Earth';
import { Mars } from './Pages/Mars';
import { Mercury } from './Pages/Mercury';
import { Venus } from './Pages/Venus';
import { Jupiter } from './Pages/Jupiter';
import { Saturn } from './Pages/Saturn';
import { Uranus } from './Pages/Uranus';
import { Neptune } from './Pages/Neptune';
import './App.css';
import { useState, useEffect, createContext } from 'react';

export const PlanetContext = createContext();

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    TakeData()
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if(data) return (
      <PlanetContext.Provider value={data}>
        <main className='flex flex-col items-center bg-[#070724] font-[Antonio] relative min-[820px]:gap-[100px]' id='stars'>
          <BrowserRouter>
            <Routes>
              <Route
                index
                element={<Earth />} 
              />
              <Route path='/earth' element={<Earth />} />
              <Route path='/mars' element={<Mars />} />
              <Route path='/mercury' element={<Mercury />} />
              <Route path='/venus' element={<Venus />} />
              <Route path='/jupiter' element={<Jupiter />} />
              <Route path='/saturn' element={<Saturn />} />
              <Route path='/uranus' element={<Uranus />} />
              <Route path='/neptune' element={<Neptune />} />
            </Routes>
          </BrowserRouter>
        </main>
      </PlanetContext.Provider>
  );
}

export default App;
