import Link from "next/link";

export default function AccessDenied () {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md px-6 py-8 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Access Denied</h2>
          <p className="mt-2 text-gray-600">
            Sorry, you do not have the necessary permissions to access this page.
          </p>
        </div>
        <div className="mt-6">
          <Link href="/">
            <button className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
              Go Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}