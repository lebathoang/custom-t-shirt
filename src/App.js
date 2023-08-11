import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Client from '~/pages/client'
import Order from '~/pages/order'
import Product from '~/pages/product'
import Detail from '~/pages/detail'
import Gallery from '~/pages/gallery'
import CreateNewProduct from './pages/create_new_product';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Order />} />
          <Route path="/client" element={<Client />} />
          <Route path="/product" element={<Product />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/create" element={<CreateNewProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;