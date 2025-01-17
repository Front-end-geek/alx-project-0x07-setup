import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header>
        <div className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div  className="flex items-center" >
                <h1>
                    ImageGen
                </h1>
                </div>
                
            </div>
        </div>
        <nav>
        <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/gallery" className="hover:text-gray-400">Gallery</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>
    </header>
  )
}

export default Header