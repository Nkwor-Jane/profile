import React from 'react'

export default function Contact() {
  return (
    <div>
        <h3>Let's talk</h3>
        <form>
            <input type="text" placeholder='Full Name' />
            <input type="email" placeholder='Email addres' />
            <textarea name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
        </form>
    </div>
  )
}
