'use server';

import { db } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';

export const uploadProfileImage = async (imageUrl: string) => {
  const user = await currentUser();
  const response = await db.user.update({
    where: {
      clerkId: user?.id,
    },
    data: {
      profileImage: imageUrl,
    },
  });

  return response;
};
