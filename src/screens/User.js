
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import { UserGroupIcon, UsersIcon } from '@heroicons/react/outline'
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

const stats = [
  { id: 1, name: 'Buyer', stat: '71.289', icon: UserGroupIcon, change: '', changeType: 'increase' },
  { id: 2, name: 'Seller', stat: '10.437', icon: UsersIcon, change: '', changeType: 'increase' },
]

const people = [
  {
    name: 'Miftah',
    title: 'Dont have a kiosk',
    role: 'Buyer',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://img.freepik.com/free-photo/fashion-portrait-young-man-black-shirt-poses-wall-with-contrast-shadows_186202-4522.jpg?t=st=1655448025~exp=1655448625~hmac=367d55d12c971294d47cf01b8d368f9d062a36fb73924a708c99c73574edb880&w=740',
  },
  {
    name: 'Zaky',
    title: 'Dont have a kiosk',
    role: 'Buyer',
    email: 'zaky@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://img.freepik.com/free-photo/fashion-portrait-young-man-black-shirt-poses-wall-with-contrast-shadows_186202-4522.jpg?t=st=1655448025~exp=1655448625~hmac=367d55d12c971294d47cf01b8d368f9d062a36fb73924a708c99c73574edb880&w=740',
  },
  {
    name: 'Mawar',
    title: 'Mawar Shop',
    role: 'Seller',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Sabrina',
    title: 'Sabrina Shop',
    role: 'Seller',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  }, {
    name: 'Zaky',
    title: 'Dont have a kiosk',
    role: 'Buyer',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://img.freepik.com/free-photo/fashion-portrait-young-man-black-shirt-poses-wall-with-contrast-shadows_186202-4522.jpg?t=st=1655448025~exp=1655448625~hmac=367d55d12c971294d47cf01b8d368f9d062a36fb73924a708c99c73574edb880&w=740',
  },
  {
    name: 'Mawar',
    title: 'Mawar Shop',
    role: 'Seller',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Sabrina',
    title: 'Sabrina Shop',
    role: 'Seller',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  }, {
    name: 'Sabrina',
    title: 'Sabrina Shop',
    role: 'Seller',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  }, {
    name: 'Zaky',
    title: 'Dont have a kiosk',
    role: 'Buyer',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://img.freepik.com/free-photo/fashion-portrait-young-man-black-shirt-poses-wall-with-contrast-shadows_186202-4522.jpg?t=st=1655448025~exp=1655448625~hmac=367d55d12c971294d47cf01b8d368f9d062a36fb73924a708c99c73574edb880&w=740',
  },
  {
    name: 'Mawar',
    title: 'Mawar Shop',
    role: 'Seller',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Sabrina',
    title: 'Sabrina Shop',
    role: 'Seller',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function User() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px6 md:px-7">
      <div>

        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.id}
              className="relative border-2 bg-gray-150 pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
            >
              <dt>
                <div className="absolute bg-indigo-500 rounded-md p-3">
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.name}</p>
              </dt>
              <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
                <p
                  className={classNames(
                    item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                    'ml-2 flex items-baseline text-sm font-semibold'
                  )}
                >
                  {item.changeType === 'increase' ? (
                    <ArrowSmUpIcon className="self-center flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                  ) : (
                    <ArrowSmDownIcon className="self-center flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />
                  )}

                  <span className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                  {item.change}
                </p>
                <div className="absolute bottom-0 inset-x-0 bg-gray-150 px-4 py-4 sm:px-6">
                  <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      {' '}
                      View all<span className="sr-only"> {item.name} stats</span>
                    </a>
                  </div>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className='mt-10 '>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => (
            <li key={person.email} className="border-2 col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
              <div className="w-full flex items-center justify-between p-6 space-x-6">
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-gray-900 text-sm font-medium truncate">{person.name}</h3>
                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                      {person.role}
                    </span>
                  </div>
                  <p className="mt-1 text-gray-500 text-sm truncate">{person.title}</p>
                </div>
                <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src={person.imageUrl} alt="" />
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="w-0 flex-1 flex">
                    <a
                      href={`mailto:${person.email}`}
                      className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                    >
                      <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-3">Email</span>
                    </a>
                  </div>
                  <div className="-ml-px w-0 flex-1 flex">
                    <a
                      href={`tel:${person.telephone}`}
                      className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                    >
                      <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-3">Call</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
