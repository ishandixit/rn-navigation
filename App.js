import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import PlacesNavigator from "./navigations/PlacesNavigation";
import Reducers from "./store/reducers";
// import {init} from "./helpers/db";

// init().then(()=>{
//   console.log("Initialized database")
// }).catch((err)=>{
//   console.log("Error in connecting database");
//   console.log(err);
// })
const rootReducer = combineReducers({
  places: Reducers
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
