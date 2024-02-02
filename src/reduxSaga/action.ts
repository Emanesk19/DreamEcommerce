export const addToCart = (data:any)=>{
    console.warn("add to cart action is called " , data)
    return{
        type:'ADD_TO_Cart',
        data
    }
}