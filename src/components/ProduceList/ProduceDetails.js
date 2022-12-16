import { useDispatch } from "react-redux";
import { cartAddProduce} from "../../store/cart";
import { likeToggle } from "../../store/produce";
function ProduceDetails({ produce }) {
  const cartItem = {};
  const dispatch = useDispatch();
  
  const handleClick = e => {
    e.preventDefault();
    dispatch(cartAddProduce(produce.id))
  }

  const likeClick = e => {
    e.preventDefault();
    dispatch(likeToggle(produce.id))
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        onClick = {likeClick}>
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick = {handleClick}>
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;