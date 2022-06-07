import { ClipboardListIcon, LockClosedIcon } from '@heroicons/react/solid'
import { Spinner } from 'phosphor-react'
import { useState } from 'react'
import { Router, useRouter } from 'next/router'

export default function Example() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })


  const handleChangeFormValue = event => {
    setFormValues((currentValues) => ({
      ...currentValues,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <ClipboardListIcon className="mx-auto h-16 w-auto text-orange-600"/>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-orange-600">TODO</h2>            
          </div>
          <form className="mt-8 space-y-6" action='/home' method='POST' >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="flex flex-col rounded-lg shadow-sm -space-y-px gap-2">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input onChange={handleChangeFormValue} id="email-address" name="email" value={formValues.email} type="email" autoComplete="email" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input onChange={handleChangeFormValue} id="password" name="password" value={formValues.password} type="password" autoComplete="current-password" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm" placeholder="Password"/>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"/>
                <label htmlFor="remember-me" className="ml-2 block text-sm font-bold text-orange-600">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-orange-600 hover:text-orange-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button type="submit" className="group outline-none relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3 focus:outline-none">
                  <LockClosedIcon className="h-5 w-5 text-orange-500 focus:outline-none group-hover:text-orange-400" aria-hidden="true" />
                </span>
                { isLoading ?
                  <Spinner size={28} className="text-white animate-spin" />
                : 'Sign in' }
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
