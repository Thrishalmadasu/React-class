import { createStore } from "redux";
import { act } from "react";
import { omit } from "lodash";

const ADD_TO_CART = "ADD_TO_CART_ONE";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export function removeFromCart(product){
    return{
        type : REMOVE_FROM_CART,
        payload : product
    };
}

function cartReducer(state={items : {}},action){
    const product = action.payload;
    switch(action.type){
        case "ADD_TO_CART" :{
            if(state.items[product.id]){
                return {
                    ...state,
                    items : {
                        ...state.items,
                        [product.id]:{
                            ...state.items[product.id],
                            quantity: state.items[product.id].quantity + 1
                        }
                    }
                }
            }else{
                return{
                ...state,
                items: {
                    ...state.items,
                    [product.id]:{
                        ...product,
                        quantity : 1
                    }
                }
            }
            }
        }
        case "REMOVE_FROM_CART":{
            if(state.items[product.id].quantity<=1){
                return{
                    ...state,
                    items: omit(state.items,[product.id])
                }
            }else{
                return {
                    ...state,
                    items : {
                        ...state.items,
                        [product.id]:{
                            ...state.items[product.id],
                            quantity: state.items[product.id].quantity - 1
                        }
                    }
                }
            }
        }
        default :
            return state;
    }
}

const store = createStore(cartReducer);
export default store;