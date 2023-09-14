export default function Signup() {
  return (
    <div className='home grow flex place-items-center justify-center'>
      <div className='rounded-lg bg-zinc-800 p-4 text-white w-1/2 h-auto flex flex-col gap-8'>
        <div className='flex justify-center'>
          <h2 className='text-4xl font-bold'>
            Classy<span className='text-green-500'>.</span>tv
          </h2>
        </div>
        <div className='flex flex-col justify-center place-items-center'>
          <div className='grid grid-cols-1 gap-4'>
            <input
              type='text'
              name=''
              id=''
              placeholder='Username'
              className='p-1 rounded focus:outline-green-500 focus:outline focus:outline-4 text-black'
            />
            <input
              type='text'
              name=''
              id=''
              placeholder='Email'
              className='p-1 rounded focus:outline-green-500 focus:outline focus:outline-4 text-black'
            />
            <input
              type='password'
              name=''
              id=''
              placeholder='Password'
              className='p-1 rounded focus:outline-green-500 focus:outline focus:outline-4 text-black'
            />
            <input
              type='text'
              name=''
              id=''
              placeholder='Repeat Password'
              className='p-1 rounded focus:outline-green-500 focus:outline focus:outline-4 text-black'
            />
          </div>
        </div>
        <div className='flex flex-col justify-center place-items-center gap-2'>
          <button className='px-4 py-2 rounded bg-green-500'>Sign up</button>
          <div className='flex justify-center'>
            <a href='/login' className='hover:text-green-500'>
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
