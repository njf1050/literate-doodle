export default function AppReducer(state, action) {
  console.log("entered reducer ");
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    default:
      console.log("default case in reducer");
      return state;
  }
}
