import React,{useState} from 'react'
import './App.css';
import items from "./data"
import Categories from './Categories';
import Menu from './Menu';

const allCategories = ['all',...new Set(items.map((item)=>item.category))];

function App() {
  const [menuitems, setMenuitems] = useState(items)
  const [category,setCategory] = useState(allCategories)

  const filterItems = (category) =>{
    if(category === "all"){
      setMenuitems(items);
      return;
    }
    const newItems = items.filter((item)=> item.category === category);
      setMenuitems(newItems);
  };


  return (
    <main>
      <section className='menu section'>
      <div className='title'>
        <h2>our menu</h2>
        <div className='underline'></div>
      </div>
      <Categories filterItems={filterItems} category={category}/>
      <Menu items={menuitems}/>
      </section>
    </main>
  );
}

export default App;
