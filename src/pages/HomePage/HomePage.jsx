import {useState, useEffect} from 'react'
import StateList from '../../components/StateList/StateList'
import LawOption from '../../components/LawOption/LawOption'
import * as lawsAPI from '../../utilities/laws-api'

export default function HomePage({user}) {
  
  const [fields, setFields] = useState({
    query: '',
    law: '',
  })
  const [response, setResponse] = useState('')
  const [err, setErr] = useState('')
  const[allLaws, setAllLaws] = useState([])

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
    <LawOption law={law} key={index} />
  ))
  
  function handleChange(evt) {
    setFields({...fields, [evt.target.name]: evt.target.value});
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    try {
      const responseAI = await lawsAPI.getResponse({...fields, user: user._id})
      setResponse(responseAI)
      setFields({
        query: '',
        law: '',
      })
      setErr('')
    } catch {
      setErr('Apologies, something is not working properly. Please check all information fields and try again.')
    }
  }
  
  return (
    <div>
      <h1 className='font-header text-4xl my-4'>Strictly Legal</h1>
      <h2 className='font-header text-2xl'>Mission:</h2>
      <div>
        <form onSubmit={handleSubmit} autoComplete='off' className="font-text text-xl border-solid border-2 rounded-xl colorful mb-4 md:">
          <div className='my-4'>
            <label className='mr-3'>Query:</label>
            <input className='text-lightGreen w-48 md:w-96' name='query' value={fields.query} onChange={handleChange} required/>
          </div>
          <div className='mb-4'>
            <label>Law:</label>
            <select className='text-lightGreen w-48 ml-7 md:w-96' name='law' value={fields.law} onChange={handleChange} required>
              {list}
            </select>
          </div>
          <button className='mb-4 w-20 h-15 text-lightGreen rounded-xl bg-charcoal hover:bg-white'>Submit</button>
        </form>
        <div className='border-solid border-2 rounded-xl text-center'>
          <h2 className='text-xl'>Response:</h2>
          {response === '' ?
          <h2>Awaiting Query Submission</h2>
          :
          <h2>{response}</h2>
          }
        </div>
      </div>
      <h2 className='font-text text-xl mt-4'>{err}</h2>
    </div>
  )
}
