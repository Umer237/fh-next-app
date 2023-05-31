import { IoIosCheckmarkCircleOutline} from 'react-icons/io';
import React from 'react'
import Link from 'next/link';

const ThankYou = () => {
  return (
<>

<div className='Thank-You-Flex'>
    <div className='Thank-You-Icons'>
<IoIosCheckmarkCircleOutline/>
</div>
<div className='Thank-You-Text'>
    <h2>THANK YOU</h2>
    <p>Your message has been recieved and we will be contacting you shortly to follow-up. If you would like to speak to someone immediately feel free to call</p>
    <Link href='/'>
    <button>Go Back To Home</button>
</Link>
</div>
</div>
</>
  )
}

export default ThankYou