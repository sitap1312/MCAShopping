import { Send } from '@material-ui/icons'
import React from 'react'
import { NButton, NContainer, NDescription, NInput, NInputContainer, NTitle } from './NewsletterElements'

const Newsletter = () => {
  return (
    <NContainer>
      <NTitle>Newsletter</NTitle>
      <NDescription>Get timely updates from your favorite products.</NDescription>
      <NInputContainer>
        <NInput placeholder='Your Email'/>
        <NButton>
          <Send />
        </NButton>
      </NInputContainer>
    </NContainer>
  )
}

export default Newsletter
