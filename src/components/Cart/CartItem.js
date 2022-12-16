import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cartRemoveProduce, cartAddProduce, cartDecProduce } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  const handleClickRemove = e => {
    e.preventDefault();
    dispatch(cartRemoveProduce(item.id))
  }
  const handleClickDec = e => {
    e.preventDefault();
    dispatch(cartDecProduce(item.id))
  }
  const handleClickInc = e => {
    e.preventDefault();
    dispatch(cartAddProduce(item.id))
  }

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          className="cart-item-button"
          onClick ={handleClickInc}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick ={handleClickDec}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick ={handleClickRemove}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;