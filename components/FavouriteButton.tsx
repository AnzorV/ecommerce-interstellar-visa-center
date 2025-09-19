import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FavouriteButton = () => {
  return (
 <Link href={"/cart"} className='group relative'>
        <Heart className='w-5 h-6 hover:text-gravity-blue hoverEffect' />
        <span className='absolute -top-1 -right-1 text-xs w-3.5 h-3.5 text-center text-white bg-oxygen-blue rounded-full font-semibold flex items-center justify-center'>0</span>
    </Link>
  )
}

export default FavouriteButton