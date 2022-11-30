import { ADD } from "./actiontype"
import { EDIT } from "./actiontype";
const initialstate = {
    productdata:[],
    cartdata :[],
}

export default function reducer(state = initialstate, action){
    switch (action.type){
        case ADD : 
          return {
               ...state,
               cartdata: [...state.cartdata, action.payload],
          };
          case EDIT :
            return{
                ...state,
                cartdata : state.cartdata.map((productcart)=>{
                    if(productcart.productDetails.id === action.payload.productDetails.id){
                           productcart.count = action.payload.count;
                    }

                    return productcart;
                })
            }
          default :
          return state;
    }
}
