'use client';

import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { uploadProfileImage } from './action';

type Props = {
  profileImage: string;
};
const ProfileImage = ({ profileImage }: Props) => {
  const { user } = useUser();
  const { refresh } = useRouter();

  const maxImageSize = 10000000; // 10 mb

  const handleChangeEvent = (file: any) => {
    if (file?.status === 'success') {
      uploadProfileImage(file?.cdnUrl || '');
      refresh();
    }
  };
  return (
    <div className='mx-auto md:mx-0'>
      <Avatar className='my-4 h-24 w-24 border border-white'>
        <AvatarImage src={profileImage} alt='my profile image' />
        <AvatarFallback>{user?.firstName}</AvatarFallback>
      </Avatar>

      <FileUploaderRegular
        pubkey={process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY}
        maxLocalFileSizeBytes={maxImageSize}
        imgOnly
        multiple={false}
        sourceList='local'
        onChange={({ allEntries }) => handleChangeEvent(allEntries[0])}
      />
    </div>
  );
};

export default ProfileImage;
