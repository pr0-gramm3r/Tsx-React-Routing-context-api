import type { FC } from "react"
import Theme from "./Theme"
import Notify from "./Notify"
import Card from "./Card"
import Cart from "./Cart";
import Login from "./AuthBtn";

interface Prod{
  id: number;
  img: string;
  name: string;
  rating: number;
  reviews: string;
  current: number;
  past: number;
  discount: string;

}

const products:Prod[] = [
  {
    id: 1,
    img: "https://www.bbassets.com/media/uploads/p/l/40119524_1-amul-happy-treats-french-fries.jpg",
    name: "Amul Happy Treats French Fries, 750 g",
    rating: 4.3,
    reviews: "10k",
    current: 200,
    past: 999,
    discount: "80% off",
  },
  {
    id: 2,
    img: "https://www.bbassets.com/media/uploads/p/l/40119524_1-amul-happy-treats-french-fries.jpg",
    name: "Amul Happy Treats French Fries, 425 g",
    rating: 4.1,
    reviews: "6.2k",
    current: 129,
    past: 499,
    discount: "74% off",
  },
  {
    id: 3,
    img: "https://www.bbassets.com/media/uploads/p/l/40119524_1-amul-happy-treats-french-fries.jpg",
    name: "Amul Happy Treats French Fries, 1.2 kg",
    rating: 4.6,
    reviews: "18.4k",
    current: 349,
    past: 1499,
    discount: "77% off",
  },
];

const Dashboard:FC = () => {

  return (
    <div className="dashboard">
      <div className="top">
        <div className="left">
          <Theme />
        </div>
        <div className="right">
          <Notify/>
          <Cart />
          <Login />
        </div>
      </div>
      <div className="main ">
        {products.map(product =>{
          return <Card key ={product.id} product={product} />
        })}
      </div>
    </div>
  )
}

export default Dashboard
