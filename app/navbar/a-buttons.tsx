import { Button } from '@/components/ui/button'
import React from 'react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify, Ghost } from 'lucide-react'
import Link from 'next/link'

const buttons = () => {
  return (
  <div>
    <div className='md:hidden'>
      <Sheet>
        <SheetTrigger>
          <AlignJustify/>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div className='flex flex-col space-y-5 items-start w-full text-lg text-black mt-10'>
                <Link href="/">
                  sign in 
                </Link>
                <Link href="/">
                  sign up 
                </Link>
                <Link href="/">
                  About 
                </Link>
                <Link href="/">
                  Contact 
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      </div>
      <div className='hidden md:flex md:space-x-4'>
        <Button className='text-md' variant="ghost">
        <Link href='/'>
          Sign in
        </Link>
        </Button>
        <Button className='text-md bg-blue-600 text-white hover:bg-black hover:text-white' variant="ghost">
          <Link href='/'>Get started</Link>
        </Button>

      </div>

  </div>
  )
}

export default buttons
