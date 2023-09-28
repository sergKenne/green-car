import { ActionTypes } from "./actionTypes";
import { IState } from "./types";

 const filterReducer = (state: IState, action:{type:ActionTypes} ) => {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCT_TO_CART:
            return {};
        default:
            return state;
    }
};

export default filterReducer

