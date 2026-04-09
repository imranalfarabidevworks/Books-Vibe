import React, { useContext, useEffect, useState } from 'react'
import { BookContext } from '../../context/BookProvider';
import BookCard from '../ui/BookCard';

const ListedWishList = ({ sortingType }) => {
    const { wishList } = useContext(BookContext);
    const [filterWishList, setFilterWishList] = useState([]);

    useEffect(() => {
        // ১. আগে উইশ লিস্টটি কপি করে নিন
        let sortedData = [...wishList];

        if (sortingType === 'pages') {
            // b - a মানে বড় থেকে ছোট (Descending)
            sortedData.sort((a, b) => b.totalPages - a.totalPages); 
        } 
        else if (sortingType === 'rating') {
            sortedData.sort((a, b) => b.rating - a.rating);
        }

        // ২. সর্ট করা ডেটা স্টেট-এ সেট করুন
        setFilterWishList(sortedData);

    }, [sortingType, wishList]); // sortingType বা wishList পরিবর্তন হলে এটি চলবে

    // ডাটা না থাকলে এই মেসেজ দেখাবে
    if (filterWishList.length === 0) {
        return (
            <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
                <h2 className='text-5xl font-bold'>No Wish List Data Found</h2>
            </div>
        );
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    // ৩. অবশ্যই filterWishList ম্যাপ করতে হবে, wishList নয়
                    filterWishList.map((book, index) => (
                        <BookCard key={index} book={book} />
                    ))
                }
            </div>
        </div>
    );
}

export default ListedWishList;