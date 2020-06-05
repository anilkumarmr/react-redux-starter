const INITIAL_STATE = {};

export const TestReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case "":
         return {
            ...state,
         };

      default:
         return state;
   }
};

export default TestReducer;
