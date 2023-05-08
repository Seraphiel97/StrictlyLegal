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

      const law = await lawsAPI.createAppointment({...lawData, user: user._id})
      setLawData({
        category: '',
        state: '',
        question: '',
        answer: '',
        penalty: '',
        reference: '',
      })
      navigate('/laws')

    } catch {

      setErr('Apologies, something is not working properly. Please check all information fields and try again.')

    }
  }
  
  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h1>Enter Law</h1>
        <div>
          <div>
            <label>Category:</label>
            <select name='category' value={lawData.category} onChange={handleChange} required>
              <CategoryList />
            </select>
          </div>
          <div>
            <label>State/Territory:</label>
            <select name='state' value={lawData.state} onChange={handleChange} required>
              <StateList />
            </select>
          </div>
          <div>
            <label>Question:</label>
            <input name='question' value={lawData.question} onChange={handleChange} maxLength={150} required />
          </div>
          <div>
            <label>Answer:</label>
            <input name='answer' value={lawData.answer} onChange={handleChange} maxLength={150} required />
          </div>
          <div>
            <label>Penalty:</label>
            <input name='penalty' value={lawData.penalty} onChange={handleChange} maxLength={150} />
          </div>
          <div>
            <label>Reference for Verification:</label>
            <input name='reference' value={lawData.reference} onChange={handleChange} required />
          </div>
          <button type='submit'>Submit</button>
        </div>
      </form>
      <p>{err}</p>
    </div>
  )
}
