export const OfferPercent = (mrp, price)=>{
    let difference = mrp - price;
   let percent = difference/ mrp * 100;
   return Math.round(percent);
}