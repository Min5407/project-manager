import { db } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import ProfileForm from './form';
import ProfileImage from './profile_image';

const Profile = async () => {
  const loginUser = await currentUser();

  const user = await db.user.findUnique({ where: { clerkId: loginUser?.id } });
  return (
    <section className='mx-auto flex flex-1 flex-col sm:justify-center md:w-1/2'>
      <h3 className='text-2xl font-semibold'>My Profile</h3>
      <p className='text-neutral-400'>Add or Update Your Profile Information</p>
      <ProfileImage profileImage={user?.profileImage || ''} />
      <ProfileForm email={user?.email || ''} name={user?.name || ''} />
    </section>
  );
};

export default Profile;
