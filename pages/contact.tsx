import type { NextPage } from "next";
import Link from "next/link";

const Contact: NextPage = () => {
  return (
    <div className="flex justify-center items-center w-screen min-h-[95vh] bg-gray-900">
      <main className="bg-gray-900 min-h-full">
        <br />
        <div className="w-full max-w-lg text-center">
          <div className="px-4 sm:px-0">
            <h3 className="text-4xl font-medium leading-6 text-gray-300">Contact</h3>
            <p className="mt-1 text-sm text-gray-400">
              This information will be sent to a select few members and adults, and will not be shared elsewhere. We respond within a few days, assuming there is not a break or holiday during the time when this is sent. Your response will be sent directly into the inbox of the reply email address listed.
            </p>
          </div>
        </div>
        <br />
        <form id="contactform" method="POST" action="/api/contact">
          <div className="shadow sm:rounded-md sm:overflow-hidden h-full">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      Kilroy Contact
                    </span>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      placeholder="Interested in joining kilroy"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                      placeholder="John Smith"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Reply Address <span className="text-red-500 font-bold">*</span>
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required={true}
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                  Message <span className="text-red-500 font-bold">*</span>
                </label>
                <div className="mt-1">
                  <textarea
                    id="content"
                    name="content"
                    rows={3}
                    required={true}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="Type your message here"
                  />
                </div>
              </div>

              <fieldset>
                <div>
                  <legend className="text-base font-medium text-gray-900">Priority <span className="text-red-500 font-bold">*</span></legend>
                  <p className="text-sm text-gray-500">How quickly should we get back to you?</p>
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <input
                      id="priority-urgent"
                      name="priority"
                      type="radio"
                      value="High"
                      required={true}
                      className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300"
                    />
                    <label htmlFor="priority-urgent" className="ml-3 block text-sm font-medium text-gray-700">
                      Urgent - We will get back to you as soon as possible
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="priority-medium"
                      name="priority"
                      type="radio"
                      value="Medium"
                      className="focus:ring-amber-500 h-4 w-4 text-amber-600 border-gray-300"
                    />
                    <label htmlFor="priority-medium" className="ml-3 block text-sm font-medium text-gray-700">
                      Medium - We will get back to you soon, most likely within a few buisness days
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="priority-low"
                      name="priority"
                      type="radio"
                      value="Low"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <label htmlFor="priority-low" className="ml-3 block text-sm font-medium text-gray-700">
                      Low Priority - We will get back to you when we are available
                    </label>
                  </div>
                </div>
              </fieldset>

              <p className="px-5 text-sm text-red-500">
                Required *
              </p>
            </div>

            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Contact;
