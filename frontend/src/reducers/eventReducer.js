export const eventReducer = (state = [], action) => {
  // console.log(action.date)
  console.log(action.events)
  switch (action.type){
    case 'CHANGE_EVENTS':
      return [...action.events]
    default:
      return state
  }
};
