import React from 'react'

const Header = ({title}) => {
  return (
    <header>{title}</header>
  )
}
Header.defaultProps={
    title: "to do list"
  }

export default Header