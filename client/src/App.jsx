import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import Items from "./pages/Items";
import Cart from "./pages/CartPage";


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
