export const brandproductrenderfilter = (filterarray,productarray)=>{
    if(filterarray.length == 0){
        return productarray;
    }
    let result = productarray.filter((eachProduct)=>{
        // console.log(filterarray, eachProduct.brand, filterarray[0] == eachProduct.brand, filterarray.includes(eachProduct.brand));
        // if the brand type is present in the filter array that product is returned
        if(filterarray.includes(eachProduct.brand)){
            return eachProduct;
        }
    })
    console.log(result);
    return result;
}
