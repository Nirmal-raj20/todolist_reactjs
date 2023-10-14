import React from 'react'
import ItemList from './ItemList';


const Content = ({items,handlecheck,handledelete}) => {
    // const [doing , setchange ]= useState('padikalam')
    // const change = () => {
    //     const li=["padikalam","velaiyadalam","thongalam"];
    //     const random=Math.floor(Math.random()*3);
    //     setchange(li[random])
    //   }

    // const [count , setcount]= useState(100)
    // const increment = () =>{
    //     setcount( count + 1)
    // };
    // const decrement = () =>{
    //     setcount( counts=>counts - 1)
    // };
    
    

    // list ,filter and map
    // const number=[-2,-1,0,1,2]
    // const itemss=number.filter(n => n>=0).map(n => ({number:n}))
    // console.log(itemss)

  return (
    <main>
    {/* <div>vanga {doing}</div>
    <button onClick={change}>family</button> */}

    {/* <button onClick={decrement}>-</button>
    <span>{count}</span>
    <button onClick={increment}>+</button> */}

    {(items.length) ? (
    <ItemList
    items={items}
    handlecheck={handlecheck}
    handledelete={handledelete}
    />
    ) : (<p style={{textShadow:24 }}>your todo list is empty</p>)}
    </main>
      )
}

export default Content