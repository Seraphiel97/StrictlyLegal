import React from 'react'

export default function StateOptions({state}) {
  return (
    <option name='state' value={state._id}>
      {state.name}
    </option>
  )
}
