import { Annoncement } from './components/Annoncement';
import { Navbar } from './components/NavBar';
import logo from './logo.svg';
import Home from './pages/Home';
import { ProductList } from './pages/ProductList';
import styled from "styled-components";
import { Product } from './pages/Product';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Cart } from './pages/Cart';

const FilterContainer = styled.div``
function App() {
  return (
    <div>
      <Cart/>
      <Login/>
      <Register/>
     <Home/>
     <ProductList/>
     <Product/>
    </div>
  );
}

export default App;
