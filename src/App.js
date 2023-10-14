import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {

  const [items , setitems]=useState(
    [{ id:1,
      checked:true,
      work: "make ai"
    },
    { id:2,
        checked:false,
        work: "check ai"
    },
      { id:3,
        checked:true,
        work: "deploy ai"
    }

])
const handlecheck =(id) =>{
    const listitems = items.map((item)=> item.id === id ?
    {...item ,checked:!item.checked} : item)
    setitems(listitems)
    localStorage.setItem("todolist",JSON.stringify(listitems))
}
const handledelete=(id)=>{
    const listitems=items.filter((item)=> id!==item.id)
    setitems(listitems)
    localStorage.setItem("todolist",JSON.stringify(listitems))

}
  return (
    <div className="App">
      <Header title=" Nirmal creations"/>
      <Content 
      items={items}
      handlecheck={handlecheck}
      handledelete={handledelete}
      />
      <Footer />
    </div>
  );
}

export default App;
