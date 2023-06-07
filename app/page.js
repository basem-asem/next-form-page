import Image from 'next/image'
import backgroundImage from '../public/images/bg-intro-desktop.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center sm:p-14 p-5 items-center relative">
      <Image 
        src={backgroundImage}
        alt="background"
        layout='fill'
        objectFit='cover'
        quality={100}
        className="bg-RedColor "
        priority
        />
      <div className="z-10 w-full max-w-5xl justify-between text-sm md:grid-cols-2 grid items-center gap-3">
        <div className='text-white flex justify-center items-center flex-col md:text-start text-center'>
          <h1 className='font-bold text-4xl mb-5'>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
        </div>
        <div className="">
          <div className="bg-blueColor text-white text-base rounded-md p-3 mb-3 shadow-md shadow-darkBlueColor text-center">
          Try it free 7 days <span className='text-xs text-GrayishBlueColor'>then $20/mo. thereafter</span> 
          </div>
          <div className="form bg-white rounded-md p-5 mt-3 shadow-md shadow-darkBlueColor">
            {/* start form  */}
          <form className='space-y-4'>
          <input type="text" id='firstName' className='p-4 outline rounded-md outline-slate-300 outline-1 text-darkBlueColor font-semibold w-full' placeholder='First Name'  required/>
          <input type="text" id='lastName' className='p-4 outline rounded-md outline-slate-300 outline-1 text-darkBlueColor font-semibold w-full' placeholder='Last Name'  required/>
          <input type="email"  id='email' className='p-4 outline rounded-md outline-slate-300 outline-1 text-darkBlueColor font-semibold w-full' placeholder='Email Address'  required/>
          <input type="password" id='password' className='p-4 outline rounded-md outline-slate-300 outline-1 text-darkBlueColor font-semibold w-full' placeholder='Password' minlength="10" maxlength="20" required/>
          <button type="submit" className='uppercase bg-GreenColor text-white text-center w-full rounded-md p-4 border-b-4 border-green-600'>claim your free trial</button>
          </form>
          <p className='text-xs text-center py-3 text-GrayishBlueColor'>By clicking the button, you are agreeing to our <span className='text-RedColor'>Terms and Services</span></p>
          </div>
        </div>
      </div>
    </main>
  )
}
