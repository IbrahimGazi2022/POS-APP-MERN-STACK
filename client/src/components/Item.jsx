import { Button } from "antd";
import "../resources/item.css";

const Item = ({item}) => {
  return (
    <div className='item'>
      <h4>{item.name}</h4>
      <img src={item.image} alt="" width='150' height='150'/>
      <h4><b>Price :</b>{item.price} $/-</h4>
      <div className="item-btn">
        <Button>Add To Cart</Button>
      </div>
    </div>
  )
}

export default Item
