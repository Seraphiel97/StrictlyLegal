import {useState, useEffect} from 'react'
import StateList from '../../components/StateList/StateList'
import CategoryList from '../../components/CategoryList/CategoryList'
import * as lawsAPI from '../../utilities/laws-api'

export default function HomePage({user}) {
  
  const [fields, setFields] = useState({
    query: '',
    location: '',
    category: '',
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
        category: '',
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
      <form onSubmit={handleSubmit} autoComplete='off' className="font-text text-xl flex flex-col flex-auto items-center justify-center colorful">
        <div className='my-4'>
          <label className='mr-3'>Query:</label>
          <input className='text-lightGreen' name='query' value={fields.query} onChange={handleChange} required/>
        </div>
        <div className=''>
          <label className='mr-6'>Location:</label>
          <select className='text-lightGreen' name='location' value={fields.location} onChange={handleChange} default='64594560ad021b1df26fc5f3' required>
            <StateList />
          </select>
        </div>
        <div className='my-4'>
          <label className='mr-1'>Category:</label>
          <select className='text-lightGreen' name='category' value={fields.category} onChange={handleChange} default='64594561ad021b1df26fc662' required>
            <CategoryList />
          </select>
        </div>
        <button className='mb-4 w-20 h-15 text-lightGreen rounded-lg bg-charcoal hover:bg-white'>Submit</button>
      </form>
      <h2 className='font-text text-xl mt-4'>{err}</h2>
      <h2 className='font-header text-xl mt-4'>{response}</h2>
    </div>
  )
}
