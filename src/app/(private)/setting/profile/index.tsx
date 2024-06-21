import ProfileForm from './form';

const Profile = () => {
  return (
    <section className='mx-auto flex flex-1 flex-col sm:justify-center md:w-1/2'>
      <h3 className='text-2xl font-semibold'>My Profile</h3>
      <p className='text-neutral-400'>Add or Update Your Profile Information</p>
      <ProfileForm />
    </section>
  );
};

export default Profile;
