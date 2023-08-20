import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import { tbody, thead } from '../../tableitems'

const Table = () => {
  return (
    <div className='accordion'>
        <table className='table table-bordered table-hover table-striped w-100 dataTable no-footer dtr-inline'>
            <thead>
                {thead?.map((item,index)=><TableHeader key={index} item={item} id={index} />)}
            </thead>
            <tbody>
                {tbody?.map((item,index)=><TableBody key={index} item={item} id={index}/>)}
            </tbody>
        </table>
    </div>
  )
}

export default Table