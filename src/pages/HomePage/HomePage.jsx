import {useState, useEffect} from 'react'
import LawOption from '../../components/LawOption/LawOption'
import Footer from '../../components/Footer/Footer'
import * as lawsAPI from '../../utilities/laws-api'

export default function HomePage({user}) {
  
  const [fields, setFields] = useState({
    query: '',
    ideology: '',
    law: '',
  })
  const [response, setResponse] = useState('')
  const [err, setErr] = useState('')
  const[allLaws, setAllLaws] = useState([])

  useEffect(function() {
    getFilteredLaws();
  }, [])

  async function getFilteredLaws() {
    try {
      const lawList = await lawsAPI.getFilteredLaws();
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
            <label className='mr-4'>Keywords:</label>
            <input className='text-lightGreen w-48 ml-12 md:w-96' name='query' value={fields.query} onChange={handleChange} required/>
          </div>
          <div className='my-4'>
            <label>Political Ideology:</label>
            <select className='text-lightGreen w-48 ml-2 md:w-96' name='ideology' value={fields.ideology} onChange={handleChange} required>
              <option>--Select an Option--</option>
              <option value='conservative'>Conservative</option>
              <option value='progressive'>Progressive</option>
            </select>
          </div>
          <div className='mb-4'>
            <label className='mr-12 pr-3'>Law:</label>
            <select className='text-lightGreen w-48 ml-12 md:w-96' name='law' value={fields.law} onChange={handleChange} required>
              <option>--Select an Option--</option>
              {list}
            </select>
          </div>
          <button className='mb-4 w-20 h-15 text-lightGreen rounded-xl bg-charcoal hover:bg-white'>Submit</button>
        </form>
        <div className='border-solid border-2 rounded-xl text-center'>
          <h2 className='font-header text-2xl'>Response:</h2>
          {response === '' ?
          <h2 className='font-header text-xl'>Awaiting Submission</h2>
          :
          <>
            <h2 className='font-header text-xl'>{response}</h2>
            <h3 className='font-text text-sm'>For further information about this specific rule, please click <a href=''>HERE</a>.</h3>
          </>
          
          }
        </div>
      </div>
      <h2 className='font-text text-xl mt-4'>{err}</h2>
      <Footer />
    </div>
  )
}
