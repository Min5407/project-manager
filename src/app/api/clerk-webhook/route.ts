import { db } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, email_addresses, first_name, image_url } = (body as any)?.data;

    const email = email_addresses[0]?.email_address;

    await db.user.upsert({
      where: { clerkId: id },
      update: {
        email,
        name: first_name,
        profileImage: image_url,
      },
      create: {
        email,
        clerkId: id,
        name: first_name || '',
        profileImage: image_url || '',
      },
    });

    return new NextResponse('User Updated in the database successfully', { status: 200 });
  } catch (e) {
    console.error('clerk webhook error while updating user', e);
    return new NextResponse('Error ocurred while updating user in the database', { status: 500 });
  }
}
