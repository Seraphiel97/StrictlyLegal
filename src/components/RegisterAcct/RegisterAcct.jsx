import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import * as usersService from '../../utilities/users-service'

export default function RegisterAcct({setUser, user}) {
  const navigate = useNavigate();

  // State used to send information to the server for creation functionality
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
    adminKey: '',
  });
  
  const [error, setError] = useState('');

  useEffect(function() {
    if (user) {
      navigate('/')
    }
  })

  // Allows the input values to change
  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }
  
  // Sends data to the server for creation of a user
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.signUp(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }
  
  return (
    <div>
      <h1 className="my-6 text-center">Register an Account</h1>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center border-solid border-2 rounded-lg p-3 bg-gradient-to-t from-pink to-mint">
        <div className="m-2">
          <label className='mr-10'>
          Name:
          </label>
          <input type="text" name="name" value={credentials.name} 
          onChange={handleChange} className="border-solid border-2 rounded-lg ml-12"
           required/>
        </div>
        <div className="m-2">
          <label className="mr-11">
          Email:
          </label>
          <input type="text" name="email" value={credentials.email} 
          onChange={handleChange} className="border-solid border-2 rounded-lg ml-12"
          required/>
        </div>
        <div className="m-2">
          <label className="mr-3">
          Password:
          </label>
        <input type="password" name="password" value={credentials.password}
        onChange={handleChange} className="border-solid border-2 rounded-lg ml-12"
        required/>
        </div>
        <div className="m-2">
          <label>
          Confirm Password:
          </label>
          <input type="password" name="confirm" value={credentials.confirm} 
          onChange={handleChange} className="border-solid border-2 rounded-lg"
          required/>
        </div>
        <div className="m-2">
          <label className="mr-2">
          Admin Key:
          </label>
          <input type="text" name="adminKey" value={credentials.adminKey} 
          onChange={handleChange} className="border-solid border-2 rounded-lg ml-12" />
        </div>
        <button type="submit" className="bg-charcoal hover:bg-charcoal text-white font-bold py-2 px-4 rounded-lg mt-3">
          Sign In
        </button>
      </form>
    </div>
  )
}
