import { ADD } from "./actiontype"
import { EDIT } from "./actiontype"
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