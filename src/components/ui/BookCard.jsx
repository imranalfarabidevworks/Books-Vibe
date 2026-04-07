import React from 'react'
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';

 function BookCard({ book }) {
  return (
 <Link to={`/bookDetails/${book.bookId}`} className="card bg-gray-100  shadow-md">
  <figure className="p-6">
    <img
      src={book.image}
      alt={book.bookName} className="rounded-xl h-[300px]"/>
  </figure>
  <div className="card-body">
    <div className="flex gap-2 items-center">
     {
      book.tags.map((tag,index)=>(
        <div key={index} className="badge text-green-500 bg-green-100 font-bold text-lg">{tag}</div>
      ))
     }
     </div>
    <h2 className="card-title text-2xl"> {book.bookName}</h2>
    <p className="text-lg font-semibold">{book.author}</p>
    <div className="card-actions justify-between border-t border-dashed  border-gray-300 pt-4 text-xl"> 
      <div className="font-semibold">{book.category}</div>
      <div className="font-semibold flex items-center gap-2">{book.rating}<CiStar /></div>
    </div>
  </div>
</Link>
  )
}
export default BookCard;