import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export default function LawUpdate() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state
  
  const [update, setUpdate] = useState({
    question: '',
    answer: '',
    penalty: '',
    reference: '',
  })
  
  useEffect(function() {
    setUpdate({
      question: state.question,
      answer: state.answer,
      penalty: state.penalty,
      reference: state.reference,
    });
  }, [])

  function handleChange(evt) {
    setUpdate({...update, [evt.target.name]: evt.target.value});
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    try {
      navigate('/laws')
    } catch {

    }
  }

  return (
    <div>
      <h1>LawUpdate</h1>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <div>
          <label>Question:</label>
          <input name='question' value={update.question} onChange={handleChange} maxLength={150} required />
        </div>
        <div>
          <label>Answer:</label>
          <input name='answer' value={update.answer} onChange={handleChange} maxLength={150} required />
        </div>
        <div>
          <label>Penalty:</label>
          <input name='penalty' value={update.penalty} onChange={handleChange} maxLength={150} />
        </div>
        <div>
          <label>Reference:</label>
          <input name='reference' value={update.reference} onChange={handleChange} required />
        </div>
        <button type='submit'>Confirm Update</button>
      </form>
    </div>
  )
}
