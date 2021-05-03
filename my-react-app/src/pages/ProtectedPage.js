import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export const ProtectedPage = () => {
  const isAuthed = true
  const history = useHistory()

  useEffect( () => {
    if (!isAuthed) {
      history.push('/')
    }
  })

  return (
      <h1>Only authed users should be able to see this.</h1>
    )
}