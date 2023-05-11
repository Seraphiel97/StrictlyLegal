import {useState, useEffect} from 'react'
import StateList from '../../components/StateList/StateList'
import CategoryList from '../../components/CategoryList/CategoryList'
import * as lawsAPI from '../../utilities/laws-api'

export default function HomePage({user}) {
  
  const [fields, setFields] = useState({
    query: '',
    location: '',
  })
  const [response, setResponse] = useState('')
  const [err, setErr] = useState('')

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
        location: '',
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
      <div className='md:grid grid-cols-2 gap-4'>
        <form onSubmit={handleSubmit} autoComplete='off' className="font-text text-xl border-solid border-2 rounded-xl colorful">
          <div className='my-4'>
            <label className='mr-3'>Query:</label>
            <input className='text-lightGreen' name='query' value={fields.query} onChange={handleChange} required/>
          </div>
          <div className='mb-4'>
            <label className='mr-6'>Location:</label>
            <select className='text-lightGreen' name='location' value={fields.location} onChange={handleChange} required>
              <StateList />
            </select>
          </div>
          <button className='mb-4 w-20 h-15 text-lightGreen rounded-lg bg-charcoal hover:bg-white'>Submit</button>
        </form>
        <div className='border-solid border-2 rounded-lg text-center'>
          <h2>{response}</h2>
        </div>
      </div>
      <h2 className='font-text text-xl mt-4'>{err}</h2>
      <h2 className='font-header text-xl mt-4'>{response}</h2>
    </div>
  )
}
