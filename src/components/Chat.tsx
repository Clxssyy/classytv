'use client';

import { useState } from 'react';
import {
  BiArrowFromRight,
  BiArrowFromLeft,
  BiGroup,
  BiMessage,
} from 'react-icons/bi';

const Chat = () => {
  const [chatOpen, setChatOpen] = useState(true);

  return (
    <>
      <button
        className={
          chatOpen
            ? 'hidden'
            : 'absolute right-0 text-white p-2 hover:bg-white/10 rounded-lg m-2 text-lg'
        }
        onClick={() => {
          setChatOpen(!chatOpen);
        }}
      >
        <BiArrowFromRight />
      </button>
      <div
        className={
          chatOpen
            ? 'w-80 bg-zinc-700 flex flex-col border-l border-gray-200'
            : 'hidden'
        }
      >
        <div className='flex justify-between border-b text-white p-1'>
          <div className='flex place-items-center text-lg hover:bg-white/10 rounded'>
            <button
              onClick={() => {
                setChatOpen(!chatOpen);
              }}
              className='p-2'
            >
              <BiArrowFromLeft />
            </button>
          </div>
          <p className='p-1'>Stream Chat</p>
          <div className='flex place-items-center text-lg hover:bg-white/10 rounded aspect-square'>
            <button className='p-2'>
              <BiGroup />
            </button>
          </div>
        </div>
        <div id='chat' className='bg-zinc-800 p-1 overflow-y-scroll grow'></div>
        <div className='p-2'>
          <div className='bg-zinc-800 rounded flex overflow-hidden'>
            <input
              type='text'
              name=''
              id=''
              placeholder='Start chatting'
              className='w-full p-2 bg-transparent outline-none text-white'
            />
            <button className='bg-zinc-600 p-2 text-white'>
              <BiMessage />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
