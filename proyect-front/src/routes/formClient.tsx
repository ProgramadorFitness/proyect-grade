import DefaultLayout from "../layout/DefaultLayout";


const Client = () => {

    /*const [name, setName] = useState("")

    const handleTextChange = (event) = {
        setName(event.target.value)
    }*/
  return (
    <DefaultLayout>
    <div>
        <form>
            <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-center text-3xl font-semibold leading-7 text-gray-900">Personal Information</h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                <label  className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                <div className="mt-2">
                    <input  type="text" name="first-name" id="first-name"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>

                <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                <div className="mt-2">
                    <input type="text" name="last-name" id="last-name"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>

                <div className="sm:col-span-4">
                <label  className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                    <input id="email" name="email" type="email"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>

                <div className="sm:col-span-3">
                <label  className="block text-sm font-medium leading-6 text-gray-900">Genre</label>
                <div className="mt-2">
                    <select id="genre" name="genre"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option>Male</option>
                    <option>Female</option>
                    </select>
                </div>
                </div>

                <div className="col-span-full">
                <label  className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                <div className="mt-2">
                    <input type="text" name="street-address" id="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                <label  className="block text-sm font-medium leading-6 text-gray-900">City</label>
                <div className="mt-2">
                    <input type="text" name="city" id="city"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>

                <div className="sm:col-span-2">
                <label   className="block text-sm font-medium leading-6 text-gray-900">Neighborhood</label>
                <div className="mt-2">
                    <input type='text' name="neighborhood" id="neighborhood" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>

                <div className="sm:col-span-2">
                <label  className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                <div className="mt-2">
                    <input type="number" name="phone" id="phone"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>

                <div className="sm:col-span-2">
                <label  className="block text-sm font-medium leading-6 text-gray-900">Phone #2</label>
                <div className="mt-2">
                    <input type="number" name="phone2" id="phone2"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>
            </div>
        </div>
      </form>
    </div>
    </DefaultLayout>
  )
}

export default Client