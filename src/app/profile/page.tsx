import Chat from '@/components/Chat';
import Image from 'next/image';

const Profile = () => {
  return (
    <>
      <div
        id='content'
        className='flex flex-col grow overflow-y-auto bg-zinc-800'
      >
        <div className='flex justify-center bg-black grow'>
          <div className='flex justify-center w-full'>
            <iframe
              src='https://www.youtube.com/embed/HwtyqN-ZCtQ'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              className='aspect-video'
            ></iframe>
          </div>
        </div>
        <div className='border-t border-gray-200 flex flex-col h-1/6'>
          <div className='text-white flex gap-4'>
            <div className='p-2 flex place-items-center'>
              <div className='rounded-full bg-black w-16 h-16 overflow-hidden'>
                <Image src='/pfp.png' width='64' height='64' alt='pfp' />
              </div>
            </div>
            <div className='flex flex-col gap-1 grow p-2'>
              <h2 className='text-lg font-bold'>Classy</h2>
              <p>Live stream title goes here!</p>
              <div className='flex'>
                <a href='' className='text-green-500 hover:underline'>
                  Grand Theft Auto V
                </a>
              </div>
            </div>
            <div className='p-2'>
              <button className='bg-green-500 p-1 rounded w-20 hover:scale-105 transition-all ease-in-out'>
                Follow
              </button>
            </div>
          </div>
          <div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
          </div>
        </div>
      </div>
      <Chat />
    </>
  );
};

export default Profile;
