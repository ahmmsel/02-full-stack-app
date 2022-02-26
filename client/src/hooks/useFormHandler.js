import { useState } from 'react'

export default function useFormHandler(initialValues = {}, callback) {
  const [values, setValues] = useState(initialValues)

  const inputChangeHandler = ({ target }) => {
    const { name, value } = target
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    callback()
  }

  return {
    values,
    inputChangeHandler,
    submitHandler,
    setValues
  }
}
