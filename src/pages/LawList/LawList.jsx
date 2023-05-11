import { useState, useEffect } from 'react';
import LawDisplay from '../../components/LawDisplay/LawDisplay';
import * as lawsAPI from '../../utilities/laws-api'

export default function LawList({user}) {
  
  const [allLaws, setAllLaws] = useState([])

  const [err, setErr] = useState('')

  useEffect(function() {
    getAllLaws();
  }, [])

  async function getAllLaws() {
    try {
      const lawList = await lawsAPI.getAllLaws();
      setAllLaws(lawList)
    } catch {
      setErr('Unfortunately, Strictly Legal is experiencing technical difficulties. Please try again later!')
    }
  }

  const list = allLaws.map((law, index) => (
    <LawDisplay law={law} key={index} user={user}/>
  ))
  
  return (
    <div>
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
