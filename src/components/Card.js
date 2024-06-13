import React, { useEffect } from "react";
import { useSelector , useDispatch,} from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUsers } from "../action/cardAction";


  const Card = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let { user } = useParams()

    const card = useSelector((state) => {
      return state.cards.find((card) => card.title === user);

    });

    const users = useSelector(( state ) => {
      return state.users
    })


useEffect(() => {
  dispatch(fetchUsers())
},[])

const { title, body } = card;

const onButtonClick = () => {
  let id = card.id;
  dispatch({ type: "DELETE_CARD", id});
  navigate("/contact")
};

return users.map((users) => {
  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header"> {users.name} </h3>
      <p>{users.email}</p>
      <button className="ui primary right floated button"
         onClick={onButtonClick}
      >
        DELETE
      </button>
    </div>
  );
  });
};
export default Card;
