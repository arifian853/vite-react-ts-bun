import './App.css'
'use client';

import { SiVite, SiReact, SiTypescript, SiBun, SiLinux, SiTailwindcss } from 'react-icons/si';

import { Card, Button } from 'flowbite-react';

function App() {

  return (
    <div className='h-screen text-white bg-blue-950 flex flex-col gap-3 justify-center items-center'>
      <h1 className='text-3xl font-semibold'>Vite + React + TS w/ Bun JS Runtime</h1>
      <div className='flex md:flex-row flex-col gap-2 justify-center items-center'>
        <Card
          className="max-w-sm"
          href="#"
        >
          <h5 className="text-4xl flex justify-center items-center gap-3 font-bold tracking-tight text-gray-900 dark:text-white">
           <SiVite /> + <SiTailwindcss />
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
               Vite <span className='text-green-500'> v4.4.5 </span> + TailwindCSS <span className='text-green-500'> v3.3.3 </span>
            </p>
          </p>
        </Card>
        <Card
          className="max-w-sm"
          href="#"
        >
          <h5 className="text-4xl flex justify-center items-center gap-3 font-bold tracking-tight text-gray-900 dark:text-white">
          <SiReact /> + <SiTypescript />
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
            React <span className='text-green-500'> v18.2.0 </span> + TypeScript <span className='text-green-500'> v5.0.2 </span>
            </p>
          </p>
        </Card>
        <Card
          className="max-w-sm"
          href="#"
        >
          <h5 className="text-4xl flex justify-center items-center gap-3 font-bold tracking-tight text-gray-900 dark:text-white">
          <SiBun /> + <SiLinux />
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              BunJS <span className='text-green-500'> v1.0.6 </span> + WSL (Fedora) <span className='text-green-500'> WSL2 </span>
            </p>
          </p>
        </Card>
      </div>
      <Button.Group>
      <Button href='https://arifian853.vercel.app/' target='_blank' rel='noopener noreferrer' color="gray">
        Portfolio
      </Button>
      <Button href='https://github.com/arifian853/vite-react-ts-bun' target='_blank' rel='noopener noreferrer' color="gray">
        Repository
      </Button>
      <Button href='https://bun.sh/' target='_blank' rel='noopener noreferrer' color="gray">
        Bun official page
      </Button>
    </Button.Group>
    </div>
  )
}

export default App
