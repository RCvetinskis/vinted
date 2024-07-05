import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full h-[85dvh] flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold text-gray-800">
        Sorry, page not found!
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        The page you are looking for might have been removed or doesn't exist.
      </p>
      <Link
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
        href="/"
      >
        Go back to Home
      </Link>
    </div>
  );
};
export default Page;
