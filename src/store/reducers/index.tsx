import { combineReducers } from 'redux';


type ActionProps = {
  type: string,
  value: any
};


const pages = (state = {}, action: ActionProps) => {
  if (action.type === 'pages') {
    return  {
      ...state,
      ...action.value
    }
  }

  return state;
};



const rootReducer = combineReducers({
  pages
});


export default rootReducer;
