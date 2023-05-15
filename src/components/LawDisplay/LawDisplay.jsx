import React from 'react'
import * as lawsAPI from '../../utilities/laws-api'
import { Link } from 'react-router-dom'

export default function LawDisplay({law, user, getLaws}) {

  async function handleDelete(law) {
    try {
      const deletedLaw = await lawsAPI.deleteLaw(law)
      getLaws()
    } catch {
      console.log('Failure')
    }
  }
  
  return (
    <div>
        {user ?
        <div className={` ${law.verification ? `colorful` : ``} mb-2 md:border-solid border-2 rounded-md p-2 `}>
          <h3 className='font-header text-2xl'>{law.category.name} Law in {law.state.name}</h3>
          <h5 className='font-text text-xl'>Q: {law.question}</h5>
          <p className='font-text text-xl'>A: {law.answer}</p>
          <p className='font-text text-lg'>{law.penalty}</p>
          {law.reference != '' ?
          <p className='font-text text-lg mb-2'>Click <a href={law.reference}>HERE</a> For Further Information</p>
          :
          <p className='font-text text-lg mb-2'>No reference provided</p>
          }
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
          <p className='font-text text-lg'>Verified</p>
          :
          <p className='font-text text-lg'>Awaiting Verification</p>
          }
        </div>
        :
        <div className={` ${law.verification ? `colorful` : ``} mb-2 md:border-solid border-2 rounded-md p-2 `}>
          <h3 className='font-header text-2xl'>{law.category.name} Law in {law.state.name}</h3>
          <h5 className='font-text text-xl'>Q: {law.question}</h5>
          <p className='font-text text-xl'>A: {law.answer}</p>
          <p className='font-text text-lg'>{law.penalty}</p>
          {law.reference != '' ?
          <p className='font-text text-lg mb-2'>Click <a href={law.reference}>HERE</a> For Further Information</p>
          :
          <p className='font-text text-lg mb-2'>No reference provided</p>
          }
          {law.verification ?
            <p className='font-text text-lg'>Verified</p>
          :
            <p className='font-text text-lg'>Awaiting Verification</p>
          }
        </div>
        } 
    </div>
  )
}
