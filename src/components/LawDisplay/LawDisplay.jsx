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
        {user ?
        <div className={`border-solid border-2 rounded-md p-2 ${law.verification ? `colorful` : ``}`}>
          <h3 className='font-header text-2xl'>{law.category.name} Law in {law.state.name}</h3>
          <h5 className='font-text text-xl'>Q: {law.question}</h5>
          <p className='font-text text-xl'>A: {law.answer}</p>
          <p className='font-text text-lg'>{law.penalty}</p>
          <p className='font-text text-lg'><a href={law.reference}>Further Information</a></p>
          {user.isAdmin || user._id === law.user ?
          <div>
            <Link to={'/laws/' + law._id} state={law} className='px-2 py-1 w-20 h-10 text-lightGreen rounded-xl bg-charcoal hover:bg-white'>Update</Link>
            <br/>
            <button className='my-1 w-20 h-15 text-lightGreen rounded-xl bg-charcoal hover:bg-white' onClick={() => handleDelete(law)}>Delete</button>
          </div>
          :
          <p></p>
          }
          {law.verification ?
          <p>Verified</p>
          :
          <p>Awaiting Verification</p>
          }
        </div>
        :
        <div>
          <h3 className=''>{law.category.name}</h3>
          <h3 className=''>{law.state.name}</h3>
          <h5 className=''>{law.question}</h5>
          <p className=''>{law.answer}</p>
          <p className=''>{law.penalty}</p>
          <p className=''><a href={law.reference}>Further Information</a></p>
          {law.verification ?
            <p className=''>Verified</p>
          :
            <p className=''>Awaiting Verification</p>
          }
        </div>
        } 
    </div>
  )
}
