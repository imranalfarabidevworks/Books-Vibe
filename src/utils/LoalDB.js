
const getAllReadListFromLocalDB=()=>{
    const allReadList=localStorage.getItem('readList');
    console.log(allReadList,'readList from local db')
}

const addReadListLocalDb=()=>{

}

export{getAllReadListFromLocalDB,addReadListLocalDb}