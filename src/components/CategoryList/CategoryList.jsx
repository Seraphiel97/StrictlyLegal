import React from 'react'
import { useState, useEffect } from 'react'
import * as categoriesAPI from '../../utilities/categories-api'
import CategoryOption from '../CategoryOption/CategoryOption'

export default function CategoryList() {
  
    const [categories, setCategories] = useState([])

    useEffect(function() {
        getAll();
      }, [])

    async function getAll() {
        const categoryList = await categoriesAPI.getAll()
        setCategories(categoryList)
    }

    const options = categories.map((category, index) => (
        <CategoryOption key={index} category={category} />
    ))
  
    return (
    <>
        {options}
    </>
  )
}
