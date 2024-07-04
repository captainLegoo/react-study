import React from 'react'

export default function HomePage() {
  return (
    <main className='flex-1 p-4 flex-col gap-3 sm:gap-4 md:gap-5 justify-center'>
      <h1 className='font-semibold text-5xl sm:text-6xl md:text-7xl'>Free<span className='text-blue-400 bold'>Scribe</span></h1>
      <h3 className='font-medium'>Record <span className='text-blue-400'>&rarr;</span></h3>
    </main>
  )
}
