import React from "react";
// import Modal from "./Modal";
import { connect } from "react-redux";

const Contact = ({ cards }) => {
  // console.log(cards);
  return (
    <div>
      {/* <Modal /> */}
      {cards.map((cards) => {
        return (
          <div
            className="ui raised very padded text container segments"
            style={{ marginTop: "80px" }}
            key={cards.id}
          >
            {cards.title}
            <p>
            {cards.body}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

export default connect(mapStateToProps)(Contact);
