import React from 'react';
import parse from "html-dom-parser"

const TableBody = (props) => {
    console.log(parse(props.item.action))
  return (
    <tr>
        { props?.item?(
            <>
            <td>{ props.item.id }</td>
            <td>{ props.item.value }</td>
            <td>{ props.item.phone }</td>
            <td>{ props.item.email }</td>
            <td>{ props.item.action }</td>
            </>
        ):'' }
    </tr>
  )
}

export default TableBody