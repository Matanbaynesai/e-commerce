import { Annoncement } from './components/Annoncement';
import { Navbar } from './components/NavBar';
import logo from './logo.svg';
import Home from './pages/Home';
import { ProductList } from './pages/ProductList';
import styled from "styled-components";

const FilterContainer = styled.div``
function App() {
  return (
    <div>
     {/* <Home/> */}
     <ProductList/>
    </div>
  );
}

export default App;
