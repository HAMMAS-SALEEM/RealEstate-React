import React from 'react'
import { TEInput, TERipple } from 'tw-elements-react'

const AuthForm = ({
  handleAuth,
  setFieldValue,
  title,
  desc,
  error,
  fields
}) => {
  return (
    <div>
      <div className='pt-20'>
        <h1 className='text-center text-5xl mb-12 font-bold'>{title}</h1>
        <form onSubmit={handleAuth}>
          <p className='mb-4 text-center'>{desc}</p>
          {fields.map(field => (
            <TEInput
              key={field.name}
              type={field.type}
              label={field.label}
              className='mb-4'
              onChange={e => setFieldValue(field.name, e.target.value)}
              required={field.required}
              value={field.value}
            ></TEInput>
          ))}
          {error && <p className='text-red-500 text-center'>{error}</p>}
          <div className='mb-12 pb-1 pt-1 text-center'>
            <TERipple rippleColor='light' className='w-full'>
              <button
                className='mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]'
                type='submit'
                style={{
                  background:
                    'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'
                }}
              >
                {title}
              </button>
            </TERipple>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthForm
