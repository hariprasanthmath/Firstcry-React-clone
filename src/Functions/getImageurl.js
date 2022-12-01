export  const getImageurl = (url, id)=>{
    let result = ""
    let toAddchar = "";
    if(id === 1){
       toAddchar = "a";
    }else if(id === 2){
        toAddchar = "b";
    }else if(id === 3){
        toAddchar = "c";
    }else if(id === 4){
        toAddchar = "d";
    }
    for(let index=0;index <url.length;index++){
         if(index === url.length-6){
            result = result + toAddchar;
         }else{
            result = result + url.charAt(index);
         }
    }
    return result;
}