import {Routes, Route} from 'react-router-dom';

import BrandsPage from './pages/BrandsPage.jsx';
import BrandsModelPage from "./pages/BrandsModelPage.jsx";


import './App.css'

import GuitarDetails from "./pages/GuitarDetails.jsx";

function App() {
  return (

    <>
      <main>

        <Routes>
          <Route path = "/" element={<BrandsPage />} />
            <Route path = "/brands/:id" element={<BrandsModelPage />} />
            {/*<Route path="/brand/:brandId/models/:modelId" element={<GuitarDetails />} />*/}

        </Routes>
      </main>
        {/*<Header />*/}
    </>

  )
}

export default App
