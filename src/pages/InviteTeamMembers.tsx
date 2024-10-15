import React from 'react'
import InviteTeamModal from './InviteTeamModal';

export default function InviteTeamMembers() {
  return (
    <div className='min-h-screen  flex justify-center items-center'>
      <div className="w-full rounded-lg border border-gray-200 bg-white p-4 text-center shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Work fast from anywhere
        </h5>
        <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
          Collaborate with teams from anywhere in the world
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0 rtl:space-x-reverse">
         <InviteTeamModal />
        </div>
      </div>
    </div>
  );
}
