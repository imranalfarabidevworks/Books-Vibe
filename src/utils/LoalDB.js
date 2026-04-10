
const getAllReadListFromLocalDB=()=>{
    const allReadList=localStorage.getItem('readList');
    // console.log(allReadList,'readList from local db')
    if(allReadList)return JSON.parse(allReadList)
    return[]
}

const addReadListLocalDb=(book)=>{
const allBooks=getAllReadListFromLocalDB();
const isAlreadyExist=allBooks.find(bk=>bk.bookId ===book.bookId);
if(isAlreadyExist){

} else{
    // ei data ta local db te add korte chai
    allBooks.push(book)
    localStorage.setItem('readList', JSON.stringify(allBooks))
}
}


export{getAllReadListFromLocalDB,addReadListLocalDb}