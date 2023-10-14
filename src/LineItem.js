import React from 'react'
import { FaTrashRestoreAlt } from "react-icons/fa";

const LineItem = ({item,handlecheck,handledelete}) => {
  return (
    <li className='item' key={item.id}>
    <input 
    type = 'checkbox'
    checked = {item.checked}
    onChange={()=>handlecheck(item.id)}
    />
    <label onDoubleClick={()=>handlecheck(item.id)}
           style={(item.checked) ? {textDecoration:'line-through'} : item}>{item.work}</label>
    <FaTrashRestoreAlt
    role="button"
    onClick={()=>handledelete(item.id)}
    tabIndex="0"/>
    </li>
  )
}

export default LineItem