import React from "react";






import { Provider } from 'react-redux'
//import Store from './redux/store'

import {createStore} from "redux"
import allReducers from "./reducers/reducersIndex"
import {increment} from "./actions/increment"
import {decrement} from "./actions/decrement"

import {useSelector,useDispatch} from "react-redux"

//REDUCER

const store = createStore(
	allReducers,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

store.subscribe(() => console.log(store.getState()))


var All = () => {

	const counter = useSelector(state => state.counter)
	const isLogged = useSelector(state => state.isLogged)
	const dispatch = useDispatch()
return( 
	<div> 
    <h1>Welcome to React Parcel Micro App!</h1>
	<p> Counter: {counter}</p>
	<div> 
	<button onClick={() => dispatch(increment())}>+ </button>
		<button onClick={() => dispatch(decrement())}>- </button>
	</div>
	<button> Login</button>
	
	{isLogged ? <h3>secret secret </h3> : "" } 
	</div> 
		
	)
			

};

var App = () => {
	return(
	
		<Provider store={store}> 
		<All/>
	</Provider>

	)
	
}

export  default App;