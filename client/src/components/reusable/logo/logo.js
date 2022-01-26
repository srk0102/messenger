import React from 'react'

export default function Logo(props) {
  const {size, color, backgroundColor, name} = props
  return (
    <>
    <i className={"fab fa-whatsapp "+name} style={{"font-size": size?size:"","color":color?color:"#25D366", "backgroundColor":backgroundColor?backgroundColor:"transparent"}}></i>
    </>
  )
}
