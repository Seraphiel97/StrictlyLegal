import React from 'react'

export default function LawOption({law}) {
  return (
    <option name='law' value={law._id}>
        {law.question}
    </option>
  )
}
