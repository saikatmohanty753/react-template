import React from 'react'

const TableHeader = (props) => {
    const items = props.item;
    const heads = items.heads;
  return (
    <tr key={props.id}>
        {heads.map((item,i)=>(
            <th key={i}>{item}</th>
        ))}
    </tr>
  )
}

export default TableHeader