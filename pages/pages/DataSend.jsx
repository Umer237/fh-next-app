import React from 'react'

const DataSend = () => {
  return (
<>
<div className='Data-Send-Top'>
<h2>Send Data To Email</h2>
</div>
<div className='Inputs'>
    <div>
    <input type="text" placeholder='NAME'/>
    </div>
    <div>
    <input type="text" placeholder='LAST NAME'/>
    </div>
    <div>
    <input type="text" placeholder='EMAIL' />
    </div>
</div>
<div className='Button'>
    <button>Submit</button>
</div>
</>

  )
}

export default DataSend