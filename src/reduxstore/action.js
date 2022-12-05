import { ADD, LOGIN } from "./actiontype"
import { EDIT } from "./actiontype";
import { ADDBRANDFILTER } from "./actiontype";
import { ADDGENDERFILTER } from "./actiontype";
import { SET_PRODUCT_CLICKED } from "./actiontype";
import { SET_ADDRESS, DECREASEPRODUCTCOUNT, DELETECARTPRODUCT, INCREASECARTPRODUCTCOUNT, ADDUSER, LOGOUT, PERCENTFILTER } from "./actiontype";

export  function storeClickedItem(data,dispatch){
       dispatch({
        type:ADD,
        payload:data
       })
}
export  function EditCartdata(data,dispatch){
       dispatch({
              type : EDIT,
              payload : data
       })
}
export function AddGlobalbrandfilterstate(data,dispatch){
       dispatch({
              type : ADDBRANDFILTER,
              payload : data
              // data here is array with the needed filters for brand
       })
}
export function AddGlobalgenderfilterstate(data,dispatch){
       dispatch({
              type : ADDGENDERFILTER,
              payload : data
       })
}
export function AddGlobalPercentFilter(data,dispatch){
       dispatch({
              type : PERCENTFILTER,
              payload : data
       })
}
export function setProductClicked(data,dispatch){
       dispatch({
              type: SET_PRODUCT_CLICKED,
              payload : data
       })
}
export function setUserAddredd(data,dispatch){
       dispatch({
              type: SET_ADDRESS,
              payload : data
       })
}
export function decreaseproductcount(data,dispatch){
       dispatch({
              type: DECREASEPRODUCTCOUNT,
              payload : data
       })
}
export function deletecartproduct(id,dispatch){
       dispatch({
              type: DELETECARTPRODUCT,
              payload : id
       })
}
export function increasecartproductcount(id,dispatch){
       dispatch({
              type: INCREASECARTPRODUCTCOUNT,
              payload : id
       })
}
export function registeruser(data,dispatch){
       dispatch({
              type : ADDUSER,
              payload : data
       })
}
export function userLoginSet(data,dispatch){
       dispatch({
              type: LOGIN,
              payload : data
       })
}
export function userLogoutSet(dispatch){
       dispatch({
              type: LOGOUT
              
       })
}