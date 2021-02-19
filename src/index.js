import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

const categories = ["Restaurants", "Views", "Theaters"];
const locations = [
  {
    id: "jd73vks94b",
    name: "Pizza Hut", 
    categories: ["Restaurants"], 
    address: "Somewhere Over the Rainbow",
    coordinates: {
      lng: 34.9864112,
      lat: 32.7904282
    }
  },
  {
    id: "1ifc04ikm7",
    name: "Mitzpe Yericho Overlook", 
    categories: ["Views"], 
    address: "Mitzpe Yericho IL",
    coordinates: {
      lng: -119.4858274,
      lat: 37.8513691
    }
  },
  {
    id: "9tujcne43k",
    name: "Falafel B'Tachana", 
    categories: ["Restaurants"], 
    address: "Mishor Adumim",
    coordinates: {
      lng: 35.0762103,
      lat: 32.8218929
    }
  },
  {
    id: "9tujcne43l",
    name: "PaperMill Playhouse", 
    categories: ["Theatres"], 
    address: "Summit NJ USA",
    coordinates: {
      lng: 35.0762103,
      lat: 32.8218929
    }
  },
  
];
localStorage.setItem("categories", JSON.stringify(categories));
localStorage.setItem("locations", JSON.stringify(locations));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
