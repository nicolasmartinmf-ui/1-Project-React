import logo from './logo.svg';
import './App.css';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
        <div className="Product-container">
            <h1>Products</h1>
            <Products />
        </div>
    </div>
  );
}

export default App;
