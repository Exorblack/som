import React from 'react'
import Pro from './pro'
import Basic from './Basic'
import Enter from './enter'

const pricing = () => {
  return (
    <main>
    <div className='flex justify-center items-center text-4xl font-bold pt-10'>Pricing</div>
    <div className='justify-center items-center gap-20 pb-10 sm:flex sm:px-5 block'>
    <Basic/>
    <Pro/>
    <Enter/>
    </div>
    </main>
  )
}

export default pricing
