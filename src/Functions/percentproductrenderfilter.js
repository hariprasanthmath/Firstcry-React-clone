import { OfferPercent } from "./OfferPercent";

export const percentproductrenderfilter = (filterarray, productarray)=>{
    if(filterarray.length == 0){
        return productarray;
    }
    console.log("percent filter running")
    let StringmatchOffilter = "";
    let result = productarray.filter((eachProduct)=>{
        console.log(eachProduct.mrp, eachProduct.price)
        let DiscountPercent = OfferPercent(eachProduct.mrp, eachProduct.price);
        if(DiscountPercent <= 10){
            StringmatchOffilter = "0-10";
        }else if(DiscountPercent > 10 && DiscountPercent <= 20){
            StringmatchOffilter = "10-20";
        }else if(DiscountPercent > 20 && DiscountPercent <= 30){
            StringmatchOffilter = "20-30";
        }else if(DiscountPercent > 30 && DiscountPercent <= 40){
            StringmatchOffilter = "30-40";
        }else if(DiscountPercent > 40){
            StringmatchOffilter = "40+";
        }
        console.log(DiscountPercent + "hello");
        if(filterarray.includes(StringmatchOffilter)){
            return eachProduct;
        }
    })
    console.log(result);
    return result;
}