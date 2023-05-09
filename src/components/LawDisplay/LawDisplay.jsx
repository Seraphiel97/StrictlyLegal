import React from 'react'
import * as lawsAPI from '../../utilities/laws-api'
import { Link } from 'react-router-dom'

export default function LawDisplay({law, user}) {

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
        {user.isAdmin || user._id === law.user ?
        <div>
          <Link to={'/laws/' + law._id} state={law}>Update</Link>
          <button onClick={() => handleDelete(law)}>Delete</button>
        </div>
        :
        <p></p>
        }
        {law.verification ?
        <p>Verified</p>
        :
        <p>Awaiting Verification</p>
        }
        <hr />
    </div>
  )
}
