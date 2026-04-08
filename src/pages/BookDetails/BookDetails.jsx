import React, { useState } from 'react'
import { useParams, useLoaderData } from 'react-router-dom'

function BookDetails() {
  const { bookId:bookParamsId} = useParams()
  //console.log(typeof bookParamsId, 'bookParamsId')

  const books = useLoaderData()
  //console.log(books, 'books')

  const expectedBook = books.find(
    book => book.bookId === Number(bookParamsId)
  )

  //console.log(expectedBook, 'expectedBook')

  if (!expectedBook) {
    return <h2 className="text-center text-2xl mt-10">Book Not Found</h2>
  }

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook

// book store
const [storedBook,setStoredBook]= useState([])

const  handleMarkAsRead=(currentBook)=>{
  // step 1: store book index
  //step 2: where to store
  //step 2: array or collection
  //step 3: if the book is already axist then show a alart or toast
  // step 4:if not then add the book in the array or collection
  
  const  isExistBook=storedBook.find((book)=> book.bookId===currentBook.bookId)
  if(isExistBook){
    alert ('The Book Is Already Exist')
}
else{
  setStoredBook([...storedBook,currentBook])
}
console.log(currentBook,isExistBook)

}




  return (
    <div className="grid grid-cols-2  bg-base-100 shadow-sm p-6 gap-6 container mx-auto ">
      <figure className="bg-gray-100 rounded-xl p-8 w-full flex items-center justify-center">
        <img
          src={expectedBook.image}
          alt={bookName}
          className="h-[400px] "
        />
      </figure>
 <div className="card-body">

        <h2 className="card-title text-2xl">{bookName}</h2>
        <h2 className="card-title">By {author}</h2>
        <p className="py-2 border-y border-gray-300">{category}</p>
        <p>Review:{review}</p>
        {
            tags.map((tag,index)=>( 

     <div key={index} className="badge text-green-500 bg-green-100 font-bold text-lg">{tag}</div>

            ))
        }
    <div className=" border-t space-y-3">
        <div className="flex justify-between gap-2">
          <span>  number of pages:</span>
          <span> {totalPages}</span>
        </div> 
         <div className="flex justify-between gap-1">
          <span> publisher:</span>
          <span> {publisher}</span>
        </div>
          <div className="flex justify-between gap-1">
          <span> year of publishing:</span>
          <span> {yearOfPublishing}</span>
        </div>
        <div className="flex items-center gap-2">
<button className="btn" onClick={()=> handleMarkAsRead(expectedBook)}>Mark as Read</button>
<button className="btn btn-primary">Add to wishList</button>
        </div>
    </div>
  </div>
    
      </div>
    
  )
}

export default BookDetails