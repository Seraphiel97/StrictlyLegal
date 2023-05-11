import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import * as lawsAPI from '../../utilities/laws-api'

export default function LawUpdate({user}) {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const id = useParams();
  
  const [update, setUpdate] = useState({
    question: '',
    answer: '',
    penalty: '',
    reference: '',
    verification: false,
  });

  const [err, setErr] = useState('')
  
  useEffect(function() {
    setUpdate({
      question: state.question,
      answer: state.answer,
      penalty: state.penalty,
      reference: state.reference,
      verification: state.verification,
    });
  }, []);

  function handleChange(evt) {
    setUpdate({...update, [evt.target.name]: evt.target.value});
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    try {
      const law = await lawsAPI.updateLaw({...update, id: id})
      console.log(law)
      navigate('/laws')
    } catch {
      setErr('Apologies, something has gone wrong. Please check the information fields and try again.')
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
          <label>Penalty(optional):</label>
          <input name='penalty' value={update.penalty} onChange={handleChange} maxLength={150} />
        </div>
        <div>
          <label>Reference:</label>
          <input name='reference' value={update.reference} onChange={handleChange} required />
        </div>
        {user.isAdmin ?
          <div>
            <label>Verified?</label>
            <select name='verification' value={update.verification} onChange={handleChange}>
              <option value={true}>True</option>
              <option value={false}>False</option>
            </select>
          </div>
        :
          <br />
        }
        <button type='submit'>Confirm Update</button>
      </form>
      <p>{err}</p>
    </div>
  )
}
