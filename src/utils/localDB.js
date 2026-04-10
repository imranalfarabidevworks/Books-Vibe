
const getAllWishListFromLocalDB=()=>{
    const addWishList=localStorage.getItem('addWishList');
    // console.log(allReadList,'readList from local db')
    if(addWishList)return JSON.parse(addWishList)
    return[]
}

const addWishListLocalDb=(book)=>{
const allBooks=getAllWishListFromLocalDB();
const isAlreadyExist=allBooks.find(bk=>bk.bookId ===book.bookId);
if(isAlreadyExist){

} else{
    // ei data ta local db te add korte chai
    allBooks.push(book)
    localStorage.setItem('wishList', JSON.stringify(allBooks))
}
}
export{getAllWishListFromLocalDB,addWishListLocalDb}