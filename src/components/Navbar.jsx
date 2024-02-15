import React from 'react';
import { TextInput } from '@tremor/react';
import { SearchIcon } from '@heroicons/react/solid';

function Navbar() {
  return (
    <div className='flex space-x-3 mt-4 ml-3 w-full mr-5'>
      <h1 className='text-3xl'>Dashboard</h1>
      <div className='flex w-full'>
        
        <input
            type="text"
            placeholder='Search...'
            className='border border-gray-300 p-1 rounded-md w-full mr-3 h-9'
            />
      </div>
    </div>
  );
}

export default Navbar;

