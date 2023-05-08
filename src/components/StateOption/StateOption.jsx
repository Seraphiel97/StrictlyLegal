import React from 'react'

export default function StateOptions({state}) {
  return (
    <option name='state' value={lawData.state}>
      {state.name}
    </option>
  )
}
