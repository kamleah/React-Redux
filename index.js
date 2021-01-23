const redux = require("redux");
const reduxLogger = require("redux-logger")

const createStore = redux.createStore;
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

const logger = reduxLogger.createLogger()
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIceCream() {
    return {
      type: BUY_ICECREAM,
      info: "First redux action",
    };
  }

const initialStateCake = {
  noOfCake: 10,  
};
const initialStateIcecream = {    
    noOfIceCream: 20
  };

const Cakereducer = (state = initialStateCake, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCake: state.noOfCake - 1,
      }      
    default:
      return state;
  }
};
const IceCreamreducer = (state = initialStateIcecream, action) => {
    switch (action.type) {
      case BUY_ICECREAM:
        return {
          ...state,
          noOfIceCream: state.noOfIceCream - 1,
        }      
      default:
        return state;
    }
  };


const rootReducer = combineReducers({
    cake:Cakereducer,
    icecream:IceCreamreducer
})
const store = createStore(rootReducer,applyMiddleware(logger));
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Update State", store.getState())
);

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
