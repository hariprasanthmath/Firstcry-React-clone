import { ADD } from "./actiontype"
import { EDIT } from "./actiontype";
import { ADDBRANDFILTER } from "./actiontype";
import { AddorDeleteFilter } from "../Functions/AddorDeleteFilter";
import { ADDGENDERFILTER } from "./actiontype";
const initialstate = {
    productdata:[],
    cartdata :[],
    brandfilter : [],
    genderfilter : [],
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
            };
            case ADDBRANDFILTER : 
            return {
                ...state,
                brandfilter :  AddorDeleteFilter(state.brandfilter,action.payload),
            };
            case ADDGENDERFILTER :
                return {
                    ...state,
                    genderfilter : AddorDeleteFilter(state.genderfilter,action.payload),
                }
          default :
          return state;
    }
}
