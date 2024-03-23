import { Button } from '@/components/ui/button'
import React from 'react'

const firstsection = () => {
  return (
    <section className="hero bg-gray-800 text-white py-20 px-10 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Our Service</h1>
      
      {/* Wrap full description and apply media query */}
        <p className="text-xl leading-relaxed mb-8 text-center">  {/* Full description content */}
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
   <div className='flex gap-4 justify-center items-center'>   
  <Button className='text-md bg-blue-600 text-white hover:bg-gray-600 hover:text-white font-bold' variant="ghost">
          Get started
  </Button>
  <Button className='text-md bg-gray-500 text-white font-bold' variant="default">Learn More</Button>
  </div>  
  <div className='pt-10 video-container'>
    <video className='rounded-xl flex w-[1000px] h-auto' width="100%" height="auto" autoPlay muted loop>
      <source src="/content/earth_-_1236 (Original).mp4" type='video/mp4'/>
    </video>
  </div>
</section>
  )
}

export default firstsection
