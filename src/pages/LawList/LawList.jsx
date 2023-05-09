import { useState, useEffect } from 'react';
import LawDisplay from '../../components/LawDisplay/LawDisplay';
import * as lawsAPI from '../../utilities/laws-api'

export default function LawList() {
  
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
    <LawDisplay law={law} key={index}/>
  ))
  
  return (
    <div>
      { allLaws.length ?
        <div>
          {list}
          <h2>{err}</h2>
        </div>
        :
        <h1>No Laws Submitted Yet</h1>
      } 
    </div>
  )
}
