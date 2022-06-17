
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import { BadgeCheckIcon, BanIcon } from '@heroicons/react/outline'
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

const stats = [
    { id: 1, name: 'Verified', stat: '71.289', icon: BadgeCheckIcon, change: '', changeType: 'increase' },
    { id: 2, name: 'Unverified', stat: '10.437', icon: BanIcon, change: '', changeType: 'increase' },
]

const people = [
    {
        name: 'Miftah Kios',
        title: 'Pademangan Ancol',
        role: 'Verified',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://img.freepik.com/free-vector/marketplace-concept-illustration_114360-7262.jpg?t=st=1655427604~exp=1655428204~hmac=d20f96ae222f3646fac9b5c2154d55a123c6cc0b156df1e3c52802c31f2e1019&w=740',
    },
    {
        name: 'Zaky Kios',
        title: 'Kemayoran Jakarta Utara',
        role: 'Unverified',
        email: 'zaky@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://img.freepik.com/free-vector/thrift-shop-concept-illustration_114360-7593.jpg?t=st=1655448611~exp=1655449211~hmac=d0aae4c25eaf9603323ffaa2318afd6e6e8a28459095cfabb263350bc9a90b7f&w=740',
    },
    {
        name: 'Mawar Kios',
        title: 'Mangga Dua',
        role: 'Verified',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://img.freepik.com/free-vector/marketplace-concept-illustration_114360-7002.jpg?t=st=1655455772~exp=1655456372~hmac=1d90054a48d5c33024ed1cda4e7800700db8b7d9987bf2fbb4d8878aeee97173&w=740',
    },
    {
        name: 'Miftah Kios',
        title: 'Pademangan Ancol',
        role: 'Verified',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://img.freepik.com/free-vector/marketplace-concept-illustration_114360-7262.jpg?t=st=1655427604~exp=1655428204~hmac=d20f96ae222f3646fac9b5c2154d55a123c6cc0b156df1e3c52802c31f2e1019&w=740',
    },
    {
        name: 'Zaky Kios',
        title: 'Kemayoran Jakarta Utara',
        role: 'Unverified',
        email: 'zaky@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://img.freepik.com/free-vector/thrift-shop-concept-illustration_114360-7593.jpg?t=st=1655448611~exp=1655449211~hmac=d0aae4c25eaf9603323ffaa2318afd6e6e8a28459095cfabb263350bc9a90b7f&w=740',
    },
    {
        name: 'Mawar Kios',
        title: 'Mangga Dua',
        role: 'Verified',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://img.freepik.com/free-vector/marketplace-concept-illustration_114360-7002.jpg?t=st=1655455772~exp=1655456372~hmac=1d90054a48d5c33024ed1cda4e7800700db8b7d9987bf2fbb4d8878aeee97173&w=740',
    },
    {
        name: 'Miftah Kios',
        title: 'Pademangan Ancol',
        role: 'Verified',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://img.freepik.com/free-vector/marketplace-concept-illustration_114360-7262.jpg?t=st=1655427604~exp=1655428204~hmac=d20f96ae222f3646fac9b5c2154d55a123c6cc0b156df1e3c52802c31f2e1019&w=740',
    },
    {
        name: 'Zaky Kios',
        title: 'Kemayoran Jakarta Utara',
        role: 'Unverified',
        email: 'zaky@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://img.freepik.com/free-vector/thrift-shop-concept-illustration_114360-7593.jpg?t=st=1655448611~exp=1655449211~hmac=d0aae4c25eaf9603323ffaa2318afd6e6e8a28459095cfabb263350bc9a90b7f&w=740',
    },
    {
        name: 'Mawar Kios',
        title: 'Mangga Dua',
        role: 'Verified',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://img.freepik.com/free-vector/marketplace-concept-illustration_114360-7002.jpg?t=st=1655455772~exp=1655456372~hmac=1d90054a48d5c33024ed1cda4e7800700db8b7d9987bf2fbb4d8878aeee97173&w=740',
    },

    // More people...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Kiosk() {
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
                                {item.name === 'Verified' ?
                                    <div className="absolute bg-green-800 rounded-md p-3">
                                        <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    :
                                    <div className="absolute bg-red-800 rounded-md p-3">
                                        <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                }
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
                                        {person.role === 'Verified' ?
                                            <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                                {person.role}
                                            </span>
                                            :
                                            <span className="flex-shrink-0 inline-block px-2 py-0.5 text-red-800 text-xs font-medium bg-red-100 rounded-full">
                                                {person.role}
                                            </span>
                                        }
                                    </div>
                                    <p className="mt-1 text-gray-500 text-sm truncate">{person.title}</p>
                                    <a href="#" className="mt-5 text-sm truncate font-medium text-indigo-600 hover:text-indigo-500">
                                        View Products<span className="sr-only"> stats</span>
                                    </a>
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
