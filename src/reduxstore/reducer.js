import { ADD } from "./actiontype"
import { EDIT } from "./actiontype";
import { ADDBRANDFILTER } from "./actiontype";
import { AddorDeleteFilter } from "../Functions/AddorDeleteFilter";
import { ADDGENDERFILTER } from "./actiontype";
import { SET_PRODUCT_CLICKED } from "./actiontype";
import { SET_ADDRESS, DECREASEPRODUCTCOUNT, DELETECARTPRODUCT, INCREASECARTPRODUCTCOUNT, ADDUSER, LOGIN, LOGOUT, PERCENTFILTER } from "./actiontype";
const initialstate = {
    productdata:[],
    cartdata :[],
    pageclicked: {},
    brandfilter : [],
    genderfilter : [],
    percentfilter : [],
    userAddress : {},
    registeredUsers : [],
    isAuth : false,
    currentUser : {}
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
                };
            case PERCENTFILTER : 
                 return {
                 ...state,
                percentfilter : AddorDeleteFilter(state.percentfilter,action.payload)
                 };
            case SET_PRODUCT_CLICKED :
                return {
                    ...state,
                    pageclicked : {...action.payload}
                };
            case SET_ADDRESS : 
            return {
                ...state,
                userAddress : {...action.payload}
            };
            case DECREASEPRODUCTCOUNT :
                return {
                    ...state,
                    cartdata : state.cartdata.map((eachProduct)=>{
                        if(eachProduct.productDetails.id === action.payload.id){
                            eachProduct.count = eachProduct.count - 1;
                        }
                        return eachProduct;
                    })
                };
            case DELETECARTPRODUCT : 
               return {
                 ...state,
                 cartdata : state.cartdata.filter((eachProduct)=>{
                    if(eachProduct.productDetails.id != action.payload){
                          return eachProduct;
                    }
                 })
               };
            case INCREASECARTPRODUCTCOUNT :
                return {
                    ...state,
                    cartdata : state.cartdata.map((eachProduct)=>{
                        if(eachProduct.productDetails.id == action.payload){
                            eachProduct.count = eachProduct.count + 1;
                        }
                        return eachProduct;
                    })
                };
            case ADDUSER : 
            return {
                ...state,
                registeredUsers : [...state.registeredUsers, action.payload]
            };
            case LOGIN : 
            return {
                ...state,
                isAuth : true,
                currentUser : action.payload
            };
            case LOGOUT : 
            return {
                ...state,
                isAuth : false,
                currentUser : {}
            }

          default :
          return state;
    }
}
