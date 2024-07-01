import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import Item from "./pages/Item";


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/item" element={<Item />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
