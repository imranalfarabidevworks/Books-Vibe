import { use } from 'react';

import BookCard from '../../ui/BookCard';
// ------json data------
const booksPromise=fetch('booksData.json')
.then(res=> res.json())

function AllBooks() {
  const books= use(booksPromise)
  console.log(books)
  return (
    
      <div className='my-12 container mx-auto'>
      <h1 className='text-3xl font-bold text-center mb-8'>Books</h1>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8'>
      {
        books.map((book, index)=>{
return <BookCard key={index} book={book} />
        }
        )
      
          
        }
      
    </div>
    </div>
  )
}
export default AllBooks