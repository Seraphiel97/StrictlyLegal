import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as lawsAPI from '../../utilities/laws-api'
import StateList from '../../components/StateList/StateList'
import CategoryList from '../../components/CategoryList/CategoryList'

export default function AddLaw({user}) {
  const navigate = useNavigate();

  const [lawData, setLawData] = useState({
    category: '',
    state: '',
    question: '',
    answer: '',
    penalty: '',
    reference: '',
  })

  const [err, setErr] = useState('')

  function handleChange(evt) {
    setLawData({...lawData, [evt.target.name]: evt.target.value});
  }

  async function handleSubmit(evt){
    evt.preventDefault();
    
    try {

      const law = await lawsAPI.createLaw({...lawData, user: user._id})
      setLawData({
        category: '',
        state: '',
        question: '',
        answer: '',
        penalty: '',
        reference: '',
      })
      console.log(law)
      navigate('/laws')

    } catch {

      setErr('Apologies, something is not working properly. Please check all information fields and try again.')

    }
  }
  
  return (
    <div>
      <form className='text-center' autoComplete="off" onSubmit={handleSubmit}>
        <h1 className='font-header text-4xl mt-4'>Enter Law</h1>
        <div className='flex flex-col justify-center items-center font-text text-xl colorful'>
          <div className='my-2 pt-4'>
            <label>Category:</label>
            <select className='text-lightGreen' name='category' value={lawData.category} onChange={handleChange} required>
              <CategoryList />
            </select>
          </div>
          <div className='my-2'>
            <label>State/Territory:</label>
            <select className='text-lightGreen' name='state' value={lawData.state} onChange={handleChange} required>
              <StateList />
            </select>
          </div>
          <div className='my-2'>
            <label>Question:</label>
            <input className='text-lightGreen' name='question' value={lawData.question} onChange={handleChange} maxLength={150} required />
          </div>
          <div className='my-2'>
            <label>Answer:</label>
            <input className='text-lightGreen' name='answer' value={lawData.answer} onChange={handleChange} maxLength={150} required />
          </div>
          <div className='my-2'>
            <label>Penalty:</label>
            <input className='text-lightGreen' name='penalty' value={lawData.penalty} onChange={handleChange} maxLength={150} />
          </div>
          <div className='my-2'>
            <label>Reference for Verification:</label>
            <input className='text-lightGreen' name='reference' value={lawData.reference} onChange={handleChange} required />
          </div>
          <button className='my-4 w-20 h-15 text-lightGreen rounded-lg bg-charcoal hover:bg-white'type='submit'>Submit</button>
        </div>
      </form>
      <p>{err}</p>
    </div>
  )
}
