import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Toggle from './components/Toggle';


function App() {
  const productList = [
    {
      price: 9999,
      name: "cashmere",
      quantity: 0,
    },
    {
      price: 99999,
      name: "Iphone",
      quantity: 0,
    },
  ];

  // let [productList , setProductList] = useState(productList) 


  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList productList={productList} />
        <Toggle />
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default App;
