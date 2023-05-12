import { useState, useEffect } from 'react';
import LawDisplay from '../../components/LawDisplay/LawDisplay';
import StateList from '../../components/StateList/StateList';
import CategoryList from '../../components/CategoryList/CategoryList';
import * as lawsAPI from '../../utilities/laws-api'

export default function LawList({user}) {
  
  const [allLaws, setAllLaws] = useState([])
  const[filters, setFilters] = useState({
    verified: false,
    state: '',
    category: '',
  })
  const [err, setErr] = useState('')

  useEffect(function() {
    getAllLaws();
  }, [])

  async function getAllLaws(filters) {
    try {
      const lawList = await lawsAPI.getAllLaws(filters);
      setAllLaws(lawList)
    } catch {
      setErr('Unfortunately, Strictly Legal is experiencing technical difficulties. Please try again later!')
    }
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    try {
      const lawList = await lawsAPI.filterLaws();
      setAllLaws(lawList);
    } catch {
      setErr('Unfortunately, Strictly Legal is experiencing technical difficulties. Please try again later!')
    }
  }

  function handleChange(evt) {
    setFilters({...filters, [evt.target.name]: evt.target.value});
  }

  const list = allLaws.map((law, index) => (
    <LawDisplay law={law} key={index} user={user}/>
  ))
  
  return (
    <div className='bg-charcoal'>
      <form className='flex font-text text-lg justify-center items-center py-2 colorful' autoComplete='off' onSubmit={handleSubmit}>
        <p className='mr-2 font-bold'>Filters: </p>
        <label className='mr-2'>State - </label>
        <select className='text-lightGreen mr-2' value={filters.state} onChange={handleChange}>
          <option>--Select an Option--</option>
          <StateList />
        </select>
        <label className='mr-2'>Category - </label>
        <select className='text-lightGreen mr-2' value={filters.category} onChange={handleChange}>
          <option>--Select an Option--</option>
          <CategoryList />
        </select>
        <label className='mr-2'>Verified - </label>
        <input type='checkbox' className='mr-2' value={filters.verified} onChange={!filters.verified}/>
        <button className='w-20 h-15 text-lightGreen rounded-xl bg-charcoal hover:bg-white' type='submit'>Apply</button>
      </form>
      { allLaws.length ?
        <div >
          <h1 className='font-header text-4xl my-4'>Laws</h1>
          <div className='md:grid grid-cols-4 gap-4'>
            {list}
          </div>
          <h2 className='font-text text-2xl'>{err}</h2>
        </div>
        :
        <h1 className='font-header text-4xl my-4'>No Laws Submitted Yet</h1>
      } 
    </div>
  )
}
