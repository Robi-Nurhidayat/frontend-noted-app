import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='px-[100px] mt-[20px]'>
       <div className='text-white '>
            <h1 className='text-[50px] font-[600]'>Noted Everything</h1>
            <h2 className='text-[30px] font-[600] -mt-2 mb-6'>YOU WANTS</h2>
       </div>
       <p className='w-[500px] text-[16px] text-white font-[400] mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, sint! Incidunt quasi sapiente sed alias accusamus. Numquam culpa iusto ullam illo ipsum beatae minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime a dolorum reprehenderit, magni quis numquam nobis vero, obcaecati alias recusandae ratione delectus error, harum libero hic inventore laudantium nesciunt dolor</p>
       <Link href={"/login"} className="text-white p-[6px_32px_7px_33px] border rounded-full hover:bg-white hover:text-[#222] duration-150">
          Mulai
        </Link>
    </div>
  )
}

export default Hero