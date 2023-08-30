import Image from 'next/image';
import Link from 'next/link';
import {
  BiSearch,
  BiSolidCameraHome,
  BiDotsVerticalRounded,
} from 'react-icons/bi';

const Header = () => {
  return (
    <header className='bg-zinc-800 h-12 border-b border-black'>
      <nav className='flex h-full'>
        <div className='flex text-white font-bold'>
          <div className='flex place-items-center'>
            <Link href='/'>
              <div className='p-1 text-3xl text-green-500'>
                <BiSolidCameraHome />
              </div>
            </Link>
          </div>
          <div className='flex'>
            <div className='px-2 h-full'>
              <Link
                href='/following'
                className='h-full flex place-items-center hover:text-green-500'
              >
                <p>Following</p>
              </Link>
            </div>
            <div className='px-2 h-full'>
              <Link
                href='/browse'
                className='h-full flex place-items-center hover:text-green-500'
              >
                <p>Browse</p>
              </Link>
            </div>
          </div>
          <div className='text-2xl flex place-items-center px-2'>
            <button className='hover:bg-white/10 rounded p-1'>
              <BiDotsVerticalRounded />
            </button>
          </div>
        </div>
        <div className='flex grow justify-center'>
          <div className='flex mx-4 w-1/3 place-items-center'>
            <div className='flex text-white w-full p-1 rounded'>
              <div className='w-full z-10'>
                <input
                  type='search'
                  name=''
                  id=''
                  placeholder='Search'
                  className='bg-zinc-800 w-full h-full focus:outline-[3px] px-2 focus:outline-green-500 outline outline-1 -outline-offset-1 outline-zinc-600 hover:outline-2 hover:outline-zinc-500 rounded-bl rounded-tl'
                />
              </div>
              <button className='rounded-tr rounded-br bg-zinc-600 hover:bg-white/10 p-2 text-lg'>
                <BiSearch />
              </button>
            </div>
          </div>
        </div>
        <div className='flex place-items-center px-2'>
          <div className='rounded-full overflow-hidden'>
            <Link href='/profile'>
              <Image src='/pfp.png' width='40' height='40' alt='pfp' />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
