import React from 'react'

export default function Listofcomments(props:{
    name : string;
    email : string;
    comment : string;
    onDelete : Function;
}) {
    const first = props.name[0]
  return (
    <div className='border-2 border-black bg-gray-200 px-1 py-1'>
        <div className='flex gap-2 '>

      <div className='h-10 w-10 bg-blue-300 rounded-full items-center justify-center flex font-bold '>{first}</div>
      <div>

      <div className='font-bold'>{props.name}</div>
      <div>{props.email}</div>
      </div>
        </div>
        <div className='flex  gap-12'>

      <div
       className=''>{props.comment}</div>
      <button onClick={()=>{
        props.onDelete()
      }} className='bg-gray-600 text-white rounded-lg h-5 w-12 text-sm'>delete</button>
        </div>
 
    </div>
  )
}
