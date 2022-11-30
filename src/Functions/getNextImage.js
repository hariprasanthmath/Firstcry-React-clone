export default function getNextImage(url) {
    let result = ""
    for(let index=0;index <url.length;index++){
         if(index === url.length-6){
            result = result + "b";
         }else{
            result = result + url.charAt(index);
         }
    }
    return result;
}