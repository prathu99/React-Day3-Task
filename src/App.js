import './App.css';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {


  return (
    <div className="App">
      <AddCart />
      <Welcome />
      <ProductList />
    </div>
  );
}

function Welcome() {
  return (
    <div className='banner'>
      <h1 className='b-head'>Shop in Style</h1>
      <p>The Black Friday Sale</p>
    </div>
  )
}

function ProductList() {

  const productList = [
    {
      productImage: "https://www.apple.com/v/iphone/home/bk/images/meta/iphone__ky2k6x5u6vue_og.png",
      productName: "Apple Iphone's",
      productPrice: "Rs.80,000 - Rs.1,80,000",
      productRating: "-",
      btnText: "Add to Cart"
    },
    {
      productImage: "https://images.moneycontrol.com/static-mcnews/2022/01/Samsung-Galaxy-S22-Ultra-5.jpg",
      productName: "Samsung Phone's",
      productPrice: "Rs.40,000 - Rs.1,00,000",
      productRating: "⭐⭐⭐⭐⭐",
      btnText: "Add to Cart"
    },
    {
      productImage: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/K30_and_K30_pro.jpg",
      productName: "Redmi Phone's",
      productPrice: "Rs.25,000 - Rs.50,000",
      productRating: "⭐⭐⭐⭐",
      btnText: "Add to Cart"
    },
    {
      productImage: "https://cdn.dxomark.com/wp-content/uploads/medias/post-96082/Sony-Xperia-1-III-featured-image-packshot-review-Recovered-Recovered-1.jpg",
      productName: "Sony Phone's",
      productPrice: "Rs.30,000 - Rs.60,000",
      productRating: "-",
      btnText: "Add to Cart"
    },
    {
      productImage: "https://www.notebookcheck.net/uploads/tx_nbc2/4_zu_3_OnePlus_9_Pro.jpg",
      productName: "Oneplus Phone's",
      productPrice: "Rs.20,000 - Rs.50,000",
      productRating: "⭐⭐⭐⭐",
      btnText: "Add to Cart"
    },
    {
      productImage: "https://lh3.googleusercontent.com/rPyMAdLAtu7DTwSkRaAi78PNz8JgHX8sUA_la_32PsTmKKpTPnrmSIx3RD2nAxOAgsB9v3K88jpzaouDBuQ6XrsVpD5nJsBCaA=rw-e365-w1182",
      productName: "Google Pixel",
      productPrice: "Rs.30,000 - Rs.80,000",
      productRating: "-",
      btnText: "Add to Cart"
    },
    {
      productImage: "https://i2.wp.com/i.blogs.es/2a01d0/realme-gt-2-15/840_560.jpg",
      productName: "Realme Phone's",
      productPrice: "Rs.15,000 - Rs.40,000",
      productRating: "⭐⭐⭐",
      btnText: "Add to Cart"
    },
    {
      productImage: "https://www.91-cdn.com/hub/wp-content/uploads/2022/06/Nothing-Phone-1-1.jpeg",
      productName: "Nothing Phone 1",
      productPrice: "Rs.30,000 - Rs.60,000",
      productRating: "-",
      btnText: "Add to Cart"
    }
  ]

  return (
    <div className='product-list'>
      {productList.map((data, index) => (
        <ProductCards key={index} product={data} />
      ))}
    </div>
  )
}

function ProductCards({ product }) {

  const [addItems, setAddItems] = useState(0);
  const [btnVariant, setBtnVariant] = useState("outlined");
  const incrCart = () => {
    return (
      setBtnVariant("disabled"),
      setAddItems(addItems + 1)
    )
  }
  console.log(addItems, btnVariant);

  return (
    <div className='product-cards'>
      <Card className='product-card'>
        <img className='p-image' src={product.productImage} alt={product.productName} />
        <h3>{product.productName}</h3>
        <p>{product.productPrice}</p>
        <p>{product.productRating}</p>
        <br></br>
        <br></br>
        <br></br>
        <Button color='error' variant={btnVariant} onClick={incrCart}>{product.btnText}</Button>
      </Card>
    </div>
  )
}

function AddCart() {
  return (
    <div className='cart'>
      <h1>Home</h1>

      <Button variant="outlined">🛒 Cart</Button>
    </div>
  )
}

export default App;
