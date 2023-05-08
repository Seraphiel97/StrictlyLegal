import React from 'react'
import { useState, useEffect } from 'react'
import * as statesAPI from '../../utilities/states-api'
import StateOption from '../StateOption/StateOption'

export default function StateList() {

    const [states, setStates] = useState([])

    useEffect(function() {
        getAll();
      }, [])

    async function getAll() {
        const stateList = await statesAPI.getAll()
        setStates(stateList)
    }

    const options = states.map((state, index) => (
        <StateOption key={index} state={state} />
    ))
  
    return (
    <>
        {options}
    </>
  )
}
