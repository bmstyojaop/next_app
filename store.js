import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import firebase from "firebase";

// Firebaseの初期化
var firebaseConfig = {
  apiKey: "AIzaSyBkdY07fzi90iLUnnBI0SOnyMbI-TYACeM",
  authDomain: "ktnoreact.firebaseapp.com",
  databaseURL: "https://ktnoreact.firebaseio.com",
  projectId: "ktnoreact",
  storageBucket: "ktnoreact.appspot.com",
  messagingSenderId: "511415959629",
  appId: "1:511415959629:web:77b84577b1f8c09e745c04",
  measurementId: "G-2YXEJ8MPST"
};

var fireapp;
try {
  fireapp = firebase.initializeApp(firebaseConfig)
  // firebase.analytics();
} catch (error) {
  console.log(error.message);
}
export default fireapp;


// ステート初期値
const initial = {
  login:false,
  username:'(click here!)',
  email:'',
  data:[],
  items:[]
}


// レデューサー
function fireReducer(state = initial, action) {
  switch (action.type) {
    // ダミー
    case 'UPDATE_USER':
      return action.value;
    // デフォルト
    default:
      return state;
  }
}


// initStore関数
export function initStore(state = initial) {
  return createStore(fireReducer, state,
    applyMiddleware(thunkMiddleware))
}


