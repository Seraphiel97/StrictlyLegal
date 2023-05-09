import React from 'react'
import StateList from '../StateList/StateList'
import CategoryList from '../CategoryList/CategoryList'

export default function HomePage() {
  
  function handleSubmit(evt) {
    evt.preventDefault()
  }
  
  return (
    <div>
      <h1>Strictly Legal</h1>
      <h2>Mission:</h2>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <div>
          <label>Query:</label>
          <input />
        </div>
        <div>
          <label>Location:</label>
          <select>
            <StateList />
          </select>
        </div>
        <div>
          <label>Category:</label>
          <select>
            <CategoryList />
          </select>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}
