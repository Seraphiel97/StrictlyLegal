import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import * as usersService from '../../utilities/users-service'

export default function Login({setUser, user}) {
  const navigate = useNavigate();

  // State used in the submission to the server
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  
  // Allows for the display of an error
  const [error, setError] = useState('');

  // Only allows a visitor on the page to sign in
  useEffect(function() {
    if (user) {
      navigate('/')
    }
  })

  // Allows the manipulation of the input fields to add data
  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }
  
  // Handles the data sent to the server and setting the user state
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <h1 className="text-center my-6">Login</h1>
      <form onSubmit={handleSubmit}className="flex flex-col justify-center items-center border-solid border-2 rounded-lg p-3 bg-gradient-to-t from-pink to-mint">
        <div className="m-2">
          <label>
          Email:
          </label>
          <input type="text" name="email" value={credentials.email} 
          onChange={handleChange} className="border-solid border-2 rounded-lg ml-10"
          required/>
        </div>
        <div className="m-2">
          <label>
          Password:
          </label>
          <input type="password" name="password" value={credentials.password}
          onChange={handleChange} className="border-solid border-2 rounded-lg ml-2"
          required/>
        </div>
        <button type="submit" className="bg-charcoal hover: text-white font-bold py-2 px-4 rounded-lg mt-3">
          Sign In
        </button>
      </form>
      <p>{error}</p>
    </div>
  )
}
