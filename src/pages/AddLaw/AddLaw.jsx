import React from 'react'
import { useState } from 'react'

export default function AddLaw() {
  
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
              <option></option>
            </select>
          </div>
          <div>
            <label>State/Territory:</label>
            <select name='state' value={lawData.state} onChange={handleChange} required>
              <option></option>
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
            <inpue name='reference' value={lawData.reference} onChange={handleChange} required />
          </div>
        </div>
      </form>
    </div>
  )
}
