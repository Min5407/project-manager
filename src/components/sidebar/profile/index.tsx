import React from 'react';
import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';

const Profile = async () => {
  const user = await currentUser();

  return (
    <div className='mt-auto flex items-center gap-2'>
      <UserButton afterSignOutUrl='/sign-in' />
      <span className='w-20 truncate'>{user?.firstName} </span>
    </div>
  );
};

export default Profile;
