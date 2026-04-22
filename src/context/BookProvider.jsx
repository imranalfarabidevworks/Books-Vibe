import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { addReadListLocalDb, getAllReadListFromLocalDB } from '../utils/LoalDB'
import { addWishListLocalDb,getAllWishListFromLocalDB } from '../utils/localDB' 

export const BookContext= createContext()





 const BookProvider=({children})=> {
  const [readList,setReadList]= useState(()=>getAllReadListFromLocalDB()) 
  const [wishList,setWishList]= useState(()=>getAllWishListFromLocalDB())

// useEffect(()=>{
//  const getReadListFromLocalDB= getAllReadListFromLocalDB()
//  console.log(getReadListFromLocalDB,'getAllReadListFromLocalDB')
// },[])


  //wishList
  const  handleWishList=(currentBook)=>{
  // step 1: store book index
  //step 2: where to store
  //step 2: array or collection
  //step 3: if the book is already axist then show a alart or toast
  // step 4:if not then add the book in the array or collection
  addWishListLocalDb(currentBook)
  addReadListLocalDb(currentBook)
  const isExistInReadList = readList.find(
  (book) => book.bookId === currentBook.bookId
)
if(isExistInReadList){
    toast.error ('This Book Is Already In Read List')
  return;
}

  const  isExistBook=wishList.find((book)=> book.bookId===currentBook.bookId)
  if(isExistBook){
    toast.error ('The Book Is Already Exist')
}

else{
  setWishList([...wishList,currentBook])
  toast.success(`${currentBook.bookName} is addead to wish list`)
}
console.log(currentBook,isExistBook)

} 
// book store
const  handleMarkAsRead=(currentBook)=>{
  // step 1: store book index
  //step 2: where to store
  //step 2: array or collection
  //step 3: if the book is already axist then show a alart or toast
  // step 4:if not then add the book in the array or collection
  
  const  isExistBook=readList.find((book)=> book.bookId===currentBook.bookId)
  if(isExistBook){
    toast.error ('The Book Is Already Exist')
}
else{
  setReadList([...readList,currentBook])
  toast.success(`${currentBook.bookName} is addead to read list`)
}
console.log(currentBook,isExistBook)

}
  const data={
  readList,
  setReadList,
  handleMarkAsRead,
  wishList,
  setWishList,
  handleWishList,
}
  return <BookContext.Provider value={data}>
    {children}
  </BookContext.Provider>
}
export default BookProvider;
