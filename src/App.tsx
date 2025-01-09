import { SubmitHandler, useForm } from 'react-hook-form'

type FormFields = {
  name: string
  email: string
  password: string
}

const App = () => {
  const { register, handleSubmit } = useForm<FormFields>()

  const onSubmit: SubmitHandler<FormFields> = data => {
    console.log(data)
  }

  return (
    <div className='container mx-auto bg-gray-900 text-white p-4 mt-4'>
      <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col space-y-1'>
          <label htmlFor='name' className='text-sm font-medium'>
            Name
          </label>
          <input
            {...register('name')}
            type='text'
            id='name'
            className='bg-gray-800 px-3 py-2 rounded-md border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div className='flex flex-col space-y-1'>
          <label htmlFor='email' className='text-sm font-medium'>
            Email
          </label>
          <input
            {...register('email')}
            type='email'
            id='email'
            className='bg-gray-800 px-3 py-2 rounded-md border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div className='flex flex-col space-y-1'>
          <label htmlFor='password' className='text-sm font-medium'>
            Password
          </label>
          <input
            {...register('password')}
            type='password'
            id='password'
            className='bg-gray-800 px-3 py-2 rounded-md border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md'
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default App
