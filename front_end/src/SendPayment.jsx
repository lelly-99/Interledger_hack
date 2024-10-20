export default function SendPayment() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        {" "}
        <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-6">
            Transfer Funds
          </h2>

          <div className="mb-4">
            <label
              htmlFor="from"
              className="block text-sm font-medium text-gray-700"
            >
              From
            </label>
            <input
              type="text"
              id="from"
              name="from"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter sender's name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="to"
              className="block text-sm font-medium text-gray-700"
            >
              To
            </label>
            <input
              type="text"
              id="to"
              name="to"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter receiver's name"
              required
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400"
            >
              Transfer
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
