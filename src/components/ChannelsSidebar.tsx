'use client';

import { useState } from 'react';
import { BiArrowFromRight, BiArrowFromLeft } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';

const ChannelsSidebar = () => {
  const [channelsOpen, setChannelsOpen] = useState(true);
  return (
    <div
      id='channels'
      className={
        channelsOpen
          ? 'w-60 bg-zinc-700 flex flex-col overflow-y-auto'
          : 'w-14 bg-zinc-700 flex flex-col overflow-y-auto'
      }
    >
      <div
        className={
          channelsOpen
            ? 'flex text-white justify-between p-1'
            : 'flex justify-center text-white p-1'
        }
      >
        <p className={channelsOpen ? 'p-1' : 'hidden'}>For You</p>
        <button
          className='text-lg hover:bg-white/10 rounded p-2'
          onClick={() => {
            setChannelsOpen(!channelsOpen);
          }}
        >
          <BiArrowFromLeft className={channelsOpen ? 'hidden' : ''} />
          <BiArrowFromRight className={channelsOpen ? '' : 'hidden'} />
        </button>
      </div>
      <div
        className={
          channelsOpen ? 'text-white' : 'flex justify-center text-white p-1'
        }
      >
        <p className={channelsOpen ? 'p-2 text-xs' : 'hidden'}>
          Followed Channels
        </p>
        <FaRegHeart className={channelsOpen ? 'hidden' : ''} />
      </div>
    </div>
  );
};

export default ChannelsSidebar;
