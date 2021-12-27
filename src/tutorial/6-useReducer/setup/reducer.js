export const reducer = (state, action) => {
   if (action.type === 'ADD_ITEM') {
      const newPeople = [...state.people, action.payload];

      return {
         ...state, //por buena practica ( ya q se cambian los tres )
         people: newPeople,
         isModalOpen: true,
         modalContent: 'item added',
      };
   }

   if (action.type === 'NO_VALUE') {
      return {
         ...state,
         isModalOpen: true,
         modalContent: 'please enter some value',
      };
   }

   if (action.type === 'CLOSE_MODAL') {
      return {
         ...state,
         isModalOpen: false,
      };
   }

   if (action.type === 'REMOVE_ITEM') {
      const newPeople = state.people.filter(
         people => people.id !== action.payload
      );

      return {
         ...state,
         people: newPeople,
         isModalOpen: true,
         modalContent: 'item removed',
      };
   }

   // return state;
   throw new Error('no matching action type');
};
