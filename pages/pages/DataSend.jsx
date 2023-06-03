import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const DataSend = () => {
    const [state, handleSubmit] = useForm("xbjepvbr");
    if (state.succeeded) {
        return <p>Thanks for joining</p>;
    }
  return (
<>
<form onSubmit={handleSubmit}>
      <label htmlFor="email">
      </label>
      <input
      placeholder='NAME'
        id="NAME"
        type="NAME" 
        name="NAME"
      />
      <input
      placeholder='LAST NAME'
      name='Last Name'
      id='Last Name'
      type="Last Name" />
      <input 
      name='Email'
      id='Email Address'
      placeholder='EMAIL ADDRESS'
      type="Email Address" />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
</>

  )
}

export default DataSend