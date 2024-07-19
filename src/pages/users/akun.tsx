import { Button } from "@/components/ui/button";

export default function Akun() {
  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
                <div className="flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="w-full pt-5 md:w-60" alt="" />
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-3">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">User name</label>
                    <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Full Name" />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Address</label>
                    <input type="email" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="email">Phone number</label>
                    <input type="email" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="city">Password</label>
                    <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="City" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="city">reset password</label>
                    <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="City" />
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end gap-2">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-[10px] px-4 rounded">Submit</button>
                      <a href="/">
                        <Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ">Cancel</Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
