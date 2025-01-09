const App = () => {
  return (
    <div className='container mx-auto bg-gray-900 text-white p-4 mt-4'>
      <form className='space-y-4'>
        <div className='flex flex-col space-y-1'>
          <label htmlFor='name' className='text-sm font-medium'>
            Name
          </label>
          <input
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
            type='email'
            id='email'
            className='bg-gray-800 px-3 py-2 rounded-md border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div className='flex flex-col space-y-1'>
          <label htmlFor='message' className='text-sm font-medium'>
            Message
          </label>
          <textarea
            id='message'
            rows={4}
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
