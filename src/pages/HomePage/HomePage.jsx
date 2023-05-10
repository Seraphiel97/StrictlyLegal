import React from 'react'
import StateList from '../../components/StateList/StateList'
import CategoryList from '../../components/CategoryList/CategoryList'

export default function HomePage() {
  
  function handleSubmit(evt) {
    evt.preventDefault()
  }
  
  return (
    <div>
      <h1 className='font-header text-4xl my-4'>Strictly Legal</h1>
      <h2 className='font-header text-2xl'>Mission:</h2>
      <form onSubmit={handleSubmit} autoComplete='off' className="font-text text-xl flex flex-col flex-auto items-center justify-center colorful">
        <div className='my-4'>
          <label className='mr-3'>Query:</label>
          <input className='text-lightGreen'/>
        </div>
        <div className=''>
          <label className='mr-6'>Location:</label>
          <select className='text-lightGreen'>
            <StateList />
          </select>
        </div>
        <div className='my-4'>
          <label className='mr-1'>Category:</label>
          <select className='text-lightGreen'>
            <CategoryList />
          </select>
        </div>
        <button className='mb-4 w-20 h-15 text-lightGreen rounded-lg bg-charcoal hover:bg-white'>Submit</button>
      </form>
    </div>
  )
}
