import React from 'react';

const Categories = ({filterItems,category}) => {
  return (
    <div className="btn-container">
        {
category.map((catitem,index)=>{
    return(
        <button className='filter-btn'
        type='button'
        key={index}
        onClick={()=>filterItems(catitem)}
        >{catitem}</button>
    )
})
        }
          
    </div>
  );
};

export default Categories;
