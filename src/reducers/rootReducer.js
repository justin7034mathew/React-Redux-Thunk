const initialState = {
  cards: [
    {
      id: 1,
      title: "Alex",
      body: "Semantic empowers designers and developers by creating a shared vocabulary for UI Semantic empowers designers and developers by creating a shared vocabulary for UI Semantic empowers designers and developers by creating a shared vocabulary for UI",
    },
    {
      id: 2,
      title: "Adam",
      body: "Semantic empowers designers and developers by creating a shared vocabulary for UI Semantic empowers designers and developers by creating a shared vocabulary for UI Semantic empowers designers and developers by creating a shared vocabulary for UI",
    },
    {
      id: 3,
      title: "john",
      body: "emantic empowers designers and developers by creating a shared vocabulary for UI Semantic empowers designers and developers by creating a shared vocabulary for UI Semantic empowers designers and developers by creating a shared vocabulary for UI",
    },
  ],
  users : [],
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
  
  switch (action.type) {
    case 'DELETE_CARD':
      let newCard = state.cards.filter((card) => {
        return action.id !== card.id;
      });

      return {
        ...state,
        cards : newCard
      };

    case 'FETCH_USERS':
      return{ ...state, users: action.payload }  

      default:
        return state
  }
};

export default rootReducer;
