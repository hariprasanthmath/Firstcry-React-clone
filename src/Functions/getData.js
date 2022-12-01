// eslint-disable-next-line no-undef
// export default getdata = async (url)=>{
//        let response = await fetch(url);
//        let result = await response.json();
//        return result;
// }
export default async function getdata(url){
     let response = await fetch(url);
     let result = await response.json();
     return result;
} 