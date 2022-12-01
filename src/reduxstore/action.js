import { ADD } from "./actiontype"
import { EDIT } from "./actiontype";
import { ADDBRANDFILTER } from "./actiontype";
import { ADDGENDERFILTER } from "./actiontype";
import { SET_PRODUCT_CLICKED } from "./actiontype";
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
export function setProductClicked(data,dispatch){
       dispatch({
              type: SET_PRODUCT_CLICKED,
              payload : data
       })
}