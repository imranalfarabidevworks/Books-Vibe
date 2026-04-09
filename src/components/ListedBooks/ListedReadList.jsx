import React, { useContext, useEffect, useState } from 'react'
import { BookContext } from '../../context/BookProvider';
import BookCard from '../ui/BookCard';

const ListedReadList = ({ sortingType }) => {
    const { readList } = useContext(BookContext);
    const [filterReadList, setFilterReadList] = useState([]);

    useEffect(() => {
        // ১. আগে অরিজিনাল লিস্টটি কপি করে নিন
        let sortedData = [...readList];

        if (sortingType === 'pages') {
            // ২. কপি করা ডেটার ওপর সর্ট চালান (ছোট থেকে বড় হলে a-b, বড় থেকে ছোট b-a)
            sortedData.sort((a, b) => b.totalPages- a.totalPages); 
        } 
        else if (sortingType === 'rating') {
            sortedData.sort((a, b) => b.rating - a.rating);
        }

        // ৩. সর্ট করা ডেটা দিয়ে স্টেট আপডেট করুন
        setFilterReadList(sortedData);

    }, [sortingType,]); // sortingType বা readList চেঞ্জ হলে এটি চলবে

    if (filterReadList.length === 0) {
        return (
            <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
                <h2 className='text-5xl font-bold'>No Read List Data Found</h2>
            </div>
        );
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {filterReadList.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
            </div>
        </div>
    );
}

export default ListedReadList;