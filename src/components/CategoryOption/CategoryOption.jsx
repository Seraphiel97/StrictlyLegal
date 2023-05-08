import React from 'react'

export default function CategoryOption({category}) {
  return (
    <option name='category' value={category._id}>
        {category.name}
    </option>
  )
}
