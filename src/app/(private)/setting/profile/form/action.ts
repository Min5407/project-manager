'use server';

import { db } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { FormSchemaType } from './_schema';

export const updateProfile = async (data: FormSchemaType) => {
  const user = await currentUser();

  const res = await db.user.update({
    where: {
      clerkId: user?.id,
    },
    data: {
      name: data.name,
      email: data.email,
    },
  });

  return res;
};
