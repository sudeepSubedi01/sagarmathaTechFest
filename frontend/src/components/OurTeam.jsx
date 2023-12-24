import React from 'react'

const OurTeam = () => {
  return (
    <>
    <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Team</h2>
      <p className="mt-6 text-lg leading-8 text-gray-600"></p>
    </div>
    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="/avatar.jpeg" alt=""/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Jhalak Pandey</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">Leader/Researcher</p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="/avatar.jpeg" alt=""/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Roshan Bhandari</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">Backend Developer</p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="/avatar.jpeg" alt=""/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Roshan Sharma</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">Researcher/Tester</p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="/avatar.jpeg" alt=""/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Sudeep Subedi</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">Frontend Developer</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>

    </>
  )
}

export default OurTeam