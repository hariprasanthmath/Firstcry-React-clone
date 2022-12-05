

export const genderproductrenderfilter = (filterarray,productarray)=>{
    if(filterarray.length == 0){
        return productarray;
    }
    let result = productarray.filter((eachProduct)=>{
        // console.log(filterarray, eachProduct.gender, filterarray[0] == eachProduct.gender, filterarray.includes(eachProduct.gender));
        // if the gender type is present in the filter array that product is returned
        if(filterarray.includes(eachProduct.gender)){
            return eachProduct;
        }
    })
    console.log(result);
    return result;
}
