import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Store from '../Store/Store';
import Basket from '../Basket/Basket';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function BeatsStore () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='store' element={<Store />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default BeatsStore;