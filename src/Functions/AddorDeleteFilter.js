export const AddorDeleteFilter = (filterstate,data)=>{
       let filterAlreadyPresent = false;
       
        let result = filterstate.filter((brandfilter,arrayindex)=>{
        if(brandfilter === data){
            filterAlreadyPresent = true;
            
        }else{
            return brandfilter;
        }
        });
      if(!filterAlreadyPresent){
           result.push(data);
      }
      return result;
     
}