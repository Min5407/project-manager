'use client';

import { useState } from 'react';
import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ProfileImage = () => {
  const [file, setFile] = useState<any>(null);

  const maxImageSize = 10000000; // 10 mb

  const handleChangeEvent = (file: any) => {
    if (file.status === 'success') {
      console.log(file);

      setFile(file);
    }
  };
  return (
    <div className='mx-auto md:mx-0'>
      {file && (
        <Avatar className='my-4 h-24 w-24'>
          <AvatarImage src={file.cdnUrl} alt='my profile image' />
          <AvatarFallback>NM</AvatarFallback>
        </Avatar>
      )}
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
