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
      <h1 className='font-header text-4xl my-4'>Update Law</h1>
      <form className='flex flex-col justify-center items-center font-text text-xl colorful' onSubmit={handleSubmit} autoComplete='off'>
        <div className='my-2 pt-2'>
          <label>Question:</label>
          <input className='text-lightGreen w-60 ml-10' name='question' value={update.question} onChange={handleChange} maxLength={150} required />
        </div>
        <div className='my-2'>
          <label className='mr-1'>Answer:</label>
          <input className='text-lightGreen w-60 ml-12' name='answer' value={update.answer} onChange={handleChange} maxLength={150} required />
        </div>
        <div className='my-2'>
          <label>Penalty(optional):</label>
          <input className='text-lightGreen w-52 ml-2' name='penalty' value={update.penalty} onChange={handleChange} maxLength={150} />
        </div>
        <div className='my-2'>
          <label>Reference:</label>
          <input className='text-lightGreen w-60 ml-9' name='reference' value={update.reference} onChange={handleChange} />
        </div>
        {user.isAdmin ?
          <div className='my-2'>
            <label>Verified?</label>
            <select className='text-lightGreen w-60 ml-12' name='verification' value={update.verification} onChange={handleChange}>
              <option value={true}>True</option>
              <option value={false}>False</option>
            </select>
          </div>
        :
          <br />
        }
        <button className='my-2 w-30 p-1 h-15 text-lightGreen rounded-xl bg-charcoal hover:bg-white' type='submit'>Confirm Update</button>
      </form>
      <p>{err}</p>
    </div>
  )
}
