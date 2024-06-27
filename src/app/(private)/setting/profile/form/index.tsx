'use client';

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { formSchema, FormSchemaType } from './_schema';
import { updateProfile } from './action';

type Props = FormSchemaType;
const ProfileForm = ({ email, name }: Props) => {
  const { refresh } = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name,
      email,
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    setIsLoading(true);
    await updateProfile({ email: data.email, name: data.name });
    setIsLoading(false);
    refresh();
  };

  return (
    <Form {...form}>
      <form className='my-8 flex flex-col gap-4' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          disabled={isLoading}
          name='name'
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className='text-md'>User First Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          disabled={isLoading}
          name='email'
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className='text-md'> Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button
          type='submit'
          className='bg-purple-500 text-white hover:bg-purple-400'
          disabled={isLoading}
        >
          {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
          submit
        </Button>
      </form>
    </Form>
  );
};

export default ProfileForm;
