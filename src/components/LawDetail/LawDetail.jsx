import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as lawsAPI from '../../utilities/laws-api'

export default function LawDetail({law}) {
  const navigate = useNavigate()


  async function handleDelete(law) {
    try {
      const deletedLaw = await lawsAPI.deleteLaw(law)
      console.log('Success')
    } catch {
      console.log('Failure')
    }
  }
  
  return (
    <div>
        <h3>{law.category.name}</h3>
        <h3>{law.state.name}</h3>
        <h5>{law.question}</h5>
        <p>{law.answer}</p>
        <p>{law.penalty}</p>
        <p><a href={law.reference}>Further Information</a></p>
        <div>
          <button>Update</button>
          <button onClick={() => handleDelete(law)}>Delete</button>
        </div>
    </div>
  )
}
