import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(1, 'Name is required'),
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Enter a valid email address',
    ),

  dateOfBirth: z
    .string({ required_error: 'Date of birth is required' })
    .refine(
      (dob: string) => /^\d{4}-\d{2}-\d{2}$/.test(dob),
      'Date of Birth must be in mm/dd/yyyy format',
    ),
  permanentAddress: z
    .string({ required_error: 'Permanent Address is required' })
    .min(5, 'Present Address must be at least 5 characters'),
  postalCode: z
    .string({ required_error: 'Postal code is required' })
    .regex(/^\d{5,6}$/, 'Postal Code must be 5 or 6 digits'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(8, 'Password must be at least 8 characters long')
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character',
    ),
  presentAddress: z
    .string({
      required_error: 'Present address is required',
    })
    .min(5, 'Present Address must be at least 5 characters'),
  city: z
    .string({
      required_error: 'City Name is required',
    })
    .min(2, 'City must be at least 2 characters'),
  country: z
    .string({ required_error: ' Country name is required' })
    .min(2, 'Country must be at least 2 characters'),
  userName: z
    .string({ required_error: 'UserName is required' })
    .min(1, 'UserName is required'),
});
type FormData = z.infer<typeof formSchema>;

export const SettingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      dateOfBirth: '',
      permanentAddress: '',
      postalCode: '',
      password: '',
      presentAddress: '',
      city: '',
      country: '',
      userName: '',
    },
  });

  const onSubmit = () => {
    console.log('Form Data:');
  };

  return (
    <div className='flex flex-col items-center gap-8 px-6 py-10 sm:flex-row sm:items-start sm:px-14'>
      <div className='relative'>
        <div className='size-[90px]'>
          <img src='/setting-img.svg' className='rounded-full object-contain' />
        </div>

        <div className='absolute -bottom-1 -right-2'>
          <div className='size-8'>
            <img src='/pencil-icon.svg' className='rounded-full bg-black p-2' />
          </div>
        </div>
      </div>
      <div className='w-full'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid grid-cols-1 gap-7 sm:grid-cols-2'
        >
          <div>
            <div className='flex flex-col'>
              <label className='pb-3 text-base text-[#232323]'>Your Name</label>
              <input
                {...register('name')}
                placeholder='Enter your name'
                className='rounded-xl border p-3'
              />
              {errors.name && (
                <p className='text-red-500'>{errors.name.message}</p>
              )}
            </div>
            <div className='flex flex-col'>
              <label className='pb-3 text-base text-[#232323]'>Email</label>
              <input
                {...register('email')}
                placeholder='Enter your email'
                type='email'
                className='rounded-xl border p-3'
              />
              {errors.email && (
                <p className='text-red-500'>{errors.email.message}</p>
              )}
            </div>
            <div className='flex flex-col'>
              <label className='pb-3 text-base text-[#232323]'>
                Date of Birth
              </label>
              <input
                {...register('dateOfBirth')}
                placeholder='Enter date of birth'
                className='rounded-xl border p-3'
                type='date'
              />
              {errors.dateOfBirth && (
                <p className='text-red-500'>{errors.dateOfBirth.message}</p>
              )}
            </div>
            <div className='flex flex-col'>
              <label className='pb-3 text-base text-[#232323]'>
                Permanent Address
              </label>
              <input
                {...register('permanentAddress')}
                placeholder='Enter permanent address'
                className='rounded-xl border p-3'
              />
              {errors.permanentAddress && (
                <p className='text-red-500'>
                  {errors.permanentAddress.message}
                </p>
              )}
            </div>
            <div className='flex flex-col'>
              <label className='pb-3 text-base text-[#232323]'>
                Postal Code
              </label>
              <input
                {...register('postalCode')}
                placeholder='Enter postal code'
                className='rounded-xl border p-3'
              />
              {errors.postalCode && (
                <p className='text-red-500'>{errors.postalCode.message}</p>
              )}
            </div>
          </div>

          <div>
            <div className='flex flex-col'>
              <label className='pb-3 text-base text-[#232323]'>Username</label>
              <input
                {...register('userName')}
                placeholder='Enter username'
                className='rounded-xl border p-3'
              />
              {errors.userName && (
                <p className='text-red-500'>{errors.userName.message}</p>
              )}
            </div>
            <div className='flex flex-col'>
              <label className='pb-3 text-base text-[#232323]'>Password</label>
              <input
                {...register('password')}
                placeholder='Enter password'
                type='password'
                className='rounded-xl border p-3'
              />
              {errors.password && (
                <p className='text-red-500'>{errors.password.message}</p>
              )}
            </div>
            <div className='flex flex-col'>
              <label className='pb-3 text-base text-[#232323]'>
                Present Address
              </label>
              <input
                {...register('presentAddress')}
                placeholder='Enter present address'
                className='rounded-xl border p-3'
              />
              {errors.presentAddress && (
                <p className='text-red-500'>{errors.presentAddress.message}</p>
              )}
            </div>
            <div className='flex flex-col'>
              <label className='pb-3 text-base text-[#232323]'>City</label>
              <input
                {...register('city')}
                placeholder='Enter city name'
                className='rounded-xl border p-3'
              />
              {errors.city && (
                <p className='text-red-500'>{errors.city.message}</p>
              )}
            </div>
            <div className='flex flex-col'>
              <label className='pb-3 text-base text-[#232323]'>Country</label>
              <input
                {...register('country')}
                placeholder='Enter country name'
                className='rounded-xl border p-3'
              />
              {errors.country && (
                <p className='text-red-500'>{errors.country.message}</p>
              )}
            </div>
          </div>
          <div className='mt-5 flex w-full justify-center sm:justify-end'>
            <button className='rounded-3xl bg-[#232323] px-16 py-3 text-white'>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
