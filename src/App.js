import Navbar from './components/Navbar/Navbar';
import ProductCard from './components/ProductCard/ProductCard';
import Search from './components/Search/Search';
import Sidebar from './components/Sidebar/Sidebar';
import './style.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="top-container">
        <div className="nav-text-container">
          <button className="nav-text-link">Medical Darpan</button>
          &nbsp;&gt;&nbsp;
          <button className="nav-text-link">Search</button>&nbsp;&gt;&nbsp;
          <button className="nav-text-link active">FabiFlu Tablet</button>
        </div>
        <Search />
      </div>
      <Sidebar />
      <div className="product-card-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}

export default App;
