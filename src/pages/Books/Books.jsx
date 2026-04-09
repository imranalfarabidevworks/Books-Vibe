import React, { useContext, useState } from 'react'
import { BookContext } from '../../context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/ListedBooks/ListedReadList';
import ListedWishList from '../../components/ListedBooks/ListedWishList';

const Books=()=> {

const [sortingType, setsortingType]= useState("")
console.log(sortingType,'sortingType')

  const {readList,wishList}= useContext(BookContext);
console.log(readList,wishList,'bookContext')

  return (
    <div className='container mx-auto my-3'>
      <div className='flex justify-center my-3'>
<div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">Sort by:{sortingType}⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=> setsortingType('pages')}>
      <a>pages</a></li>
    <li onClick={()=> setsortingType('rating')}><a>rating</a></li>
  </ul>
</div>
</div>
      {/* Read List: {storedBook.length} <br />
      Wish List:{wishList.length} Wish List:{wishList.length} */}
      <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
 <ListedReadList sortingType={sortingType}/>
    </TabPanel>
    <TabPanel>
   <ListedWishList sortingType={sortingType} />
    </TabPanel>
  </Tabs>
      
    </div>
  )
}
export default Books