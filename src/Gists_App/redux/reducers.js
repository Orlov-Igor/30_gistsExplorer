import {
	FETCH_APIDATA_ERROR,
	FETCH_APIDATA_PENDING,
	FETCH_APIDATA_SUCCESS,
	FETCH_GIST_PENDING,
	FETCH_GIST_SUCCESS,
	FETCH_GIST_ERROR,
	FETCH_OWNER_ERROR,
	FETCH_OWNER_PENDING,
	FETCH_OWNER_SUCCESS,
	DETECT_LANGUAGE,
	DETECT_URL
	
} from "./actions";
import { combineReducers } from "redux";

const initialState = {
	error: null,
	loading: false,
	list: []
};
  
function apiDataReducer(state = initialState, action) {
	switch(action.type) {
		case FETCH_APIDATA_PENDING:
		return {
			...state,
			loading: true
		};
		case FETCH_APIDATA_SUCCESS:
		return {
			...state,
			loading: false,
			list: action.payload,
		};
		case FETCH_APIDATA_ERROR:
		return {
			...state,
			loading:false,
			error: action.payload
		};
		default: return state;
	}
}

function gistsReducer(state = initialState, action) {
	switch(action.type) {
		case FETCH_GIST_PENDING:
		return {
			...state,
			loading: true
		};
		case FETCH_GIST_SUCCESS:
		return {
			...state,
			loading: false,
			list: [...state.list, {
				text: action.payload.text,
				url: action.payload.url
		}]
		};
		case FETCH_GIST_ERROR:
		return {
			...state,
			loading:false,
			error: action.payload
		};
		default: return state;
	}
}

function ownerReducer(state = {}, action) {
	switch(action.type) {
		case FETCH_OWNER_PENDING:
		return {
			...state,
			loading: true
		};
		case FETCH_OWNER_SUCCESS:
		return {
			...state,
			loading: false,
			ownerInfo: action.payload
		};
		case FETCH_OWNER_ERROR:
		return {
			...state,
			loading:false,
			error: action.payload
		};
		default: return state;
	}
}

function langReducer(state = '', action) {
	switch(action.type) {
		case DETECT_LANGUAGE:
		return action.payload
		
		default: return state;
	}
}

function urlReducer(state = '', action) {
	switch(action.type) {
		case DETECT_URL:
		return action.payload
		
		default: return state;
	}
}

const rootReducer = combineReducers({
	data: apiDataReducer,
	selectedGists: gistsReducer,
	language: langReducer,
	url: urlReducer,
	owner: ownerReducer
});

export default rootReducer;
  