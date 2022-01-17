import { Send } from '@material-ui/icons'
import React from 'react'
import { NButton, NContainer, NDescription, NInput, NInputContainer, NTitle } from './NewsletterElements'

const Newsletter = () => {
  return (
    <NContainer>
      <NTitle></NTitle>
      <NDescription></NDescription>
      <NInputContainer>
        <NInput />
        <NButton>
          <Send />
        </NButton>
      </NInputContainer>
    </NContainer>
  )
}

export default Newsletter
