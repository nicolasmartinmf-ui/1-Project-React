import './App.css';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
        <h1>Products</h1>
        <div className="Product-container">

            <Products
            name='Xiaomi Redmi Note 10'
            price='$1299'
            img = 'xiaomi'
            description ={
                <>
                    The <strong>Xiaomi Redmi Note 10</strong> is a mid-range smartphone that stands out for its 6.43-inch AMOLED display with Full HD+ resolution, offering vivid colors and good contrast. It is equipped with a Snapdragon 678 processor, accompanied by options of 4 or 6 GB of RAM and internal storage of 64 or 128 GB, expandable via microSD.
                </>
            }/>
            <Products
            name='Samsung Galaxy S21'
            price='$799'
            img = 'samsung'
            description = {
                <>
                    The <strong>Samsung Galaxy S21</strong> features a 6.2-inch Dynamic AMOLED 2X display with Full HD+ resolution and 120Hz refresh rate. It is powered by the Exynos 2100 or Snapdragon 888 (depending on region), with 8GB RAM and up to 256GB of internal storage (non-expandable).
                </>
            }/>
            <Products
            name='Apple iPhone 13'
            price='$899'
            img = 'iphone'
            description ={
                <>
                    'The Apple iPhone 13 offers a 6.1-inch Super Retina XDR OLED display, powered by the A15 Bionic chip. It comes with storage options ranging from 128GB to 512GB, and offers excellent performance and battery life without microSD support.'
                </>
            }/>
        </div>
    </div>
  );
}

export default App;
