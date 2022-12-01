export const AddorDeleteFilter = (filterstate,data)=>{
       let filterAlreadyPresent = false;
       
        let result = filterstate.filter((filter,arrayindex)=>{
        if(filter === data){
            filterAlreadyPresent = true;
            // if the filterdata type already present in the filterarray/state wee will not return
            // hence it is filtered
        }else{
            return filter;
        }
        });
      if(!filterAlreadyPresent){
           // if the whole filterdata array does not have the filter(data) choosen by user we will add that to the array
           result.push(data);
      }
      return result;
     
}