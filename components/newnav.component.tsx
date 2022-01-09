/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Popover, Transition } from '@headlessui/react'
import {
  QuestionMarkCircleIcon,
  UserGroupIcon,
  CalendarIcon,
  ArchiveIcon,
  XIcon,
  MenuIcon,
  MailIcon,
  CodeIcon,
  HandIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { getSortedPostsData } from '../scripts/posts'

const about = [
  {
    name: 'About Kilroy',
    description: 'Learn more about us.',
    href: '/about',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Team',
    description: 'Get more information about the team and it\'s student leaders',
    href: '/team',
    icon: UserGroupIcon,
  },
  { name: 'Calendar', description: "View our entire calendar to know when and where we meet and host events.", href: '/calendar', icon: CalendarIcon },
  {
    name: 'Archives',
    description: "View our CAD and image archives of previous seasons.",
    href: '/archives',
    icon: ArchiveIcon,
  },
]

const outreach = [
    {
      name: 'Events',
      description: 'Check out our past and upcoming events',
      href: '/events',
      icon: CalendarIcon,
    },
    {
      name: 'Blue Alliance Page',
      description: 'Check out the blue alliance page for scores and clips',
      href: '/links/tba',
      icon: HandIcon
    },
    {
      name: 'Get Involved',
      description: 'Find out how to support our team.',
      href: '/outreach/get-involved',
      icon: UserGroupIcon,
    },
]

const resources = [
  {
    name: 'Github',
    description: 'Look at our open-sourced projects',
    href: '/links/github',
    icon: CodeIcon,
  },
  {
    name: 'Contact',
    description: 'Send us a message and we can get back to you.',
    href: '/contact',
    icon: MailIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(pageProps) {
  return (
    <Popover className="relative bg-gray-800 drop-shadow-md w-screen z-10" id="top">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-300 hover:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Link href="/" passHref={true}>
            <a className="text-base font-medium text-gray-400 hover:text-gray-600">Home</a>
          </Link>

          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>  
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-400',
                      'group bg-gray-800 rounded-md inline-flex items-center text-base font-medium hover:text-gray-600  focus:outline-none'
                    )}
                  >
                    <span>About</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-300',
                        'ml-2 h-5 w-5 group-hover:text-gray-400'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {about.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-yellow-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        {/* <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-gray-300" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div> */}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-400',
                      'group bg-gray-800 rounded-md inline-flex items-center text-base font-medium hover:text-gray-600 focus:outline-none'
                    )}
                  >
                    <span>Outreach</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-300',
                        'ml-2 h-5 w-5 group-hover:text-gray-400'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {outreach.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-yellow-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        {/* <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-gray-300" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div> */}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a href="/sponsors" className="text-base font-medium text-gray-400 hover:text-gray-600">
                Sponsors
            </a>

            <a href="/links/usfirst" className="text-base font-medium text-gray-400 hover:text-gray-600">
                US FIRST
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-400',
                      'group bg-gray-800 rounded-md inline-flex items-center text-base font-medium hover:text-gray-600 focus:outline-none focus:ring-yellow-500'
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-300',
                        'ml-2 h-5 w-5 group-hover:text-gray-400'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-yellow-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm tracking-wide font-medium text-gray-400 uppercase">Recent Posts</h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {/* {getSortedPostsData().map(({ id, date, title }, index) => (
                                <li key={index} className="text-base truncate">
                                  <a href={`/posts/${id}`} className="font-medium text-gray-900 hover:text-gray-700">
                                    {title} ● {date}
                                  </a>
                                </li>
                              ))} */}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a href="/posts" className="font-medium text-yellow-600 hover:text-yellow-500">
                              {' '}
                              View all posts <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="block md:flex items-center justify-end md:flex-1 lg:w-0">
            {/* <a href="#" className="whitespace-nowrap text-base font-medium text-gray-400 hover:text-gray-600">
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700"
            >
              Sign up
            </a> */}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="h-8 w-auto"
                    src="/logoSmall.png"
                    width={128}
                    height={48}
                    alt="Kilroy Logo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-300 hover:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {about.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-100"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-yellow-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="/sponsors" className="text-base font-medium text-gray-400 hover:text-gray-600">
                    Sponsors
                </a>

                <a href="/frc" className="text-base font-medium text-gray-400 hover:text-gray-600">
                    US FIRST
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  > 
                    {item.name}
                  </a>
                ))}
              </div>
              {/* <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-400">
                  Existing customer?{' '}
                  <a href="#" className="text-yellow-600 hover:text-yellow-500">
                    Sign in
                  </a>
                </p>
              </div> */}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}