import Link from "next/link";
import { Layout } from "@/components/index";

const NotFound = () => {
  return (
    <Layout title="404 page">
      <div className="max-w-3xl mx-auto overflow-hidden">
        <div className="px-10 py-16">
          <div>
            <h1 className="py-4 text-3xl font-extrabold text-white lg:text-4xl">
              Looks like you have found the doorway to the great nothing
            </h1>
            <p className="py-4 text-base text-gray-200">
              The content you’re looking for doesn’t exist. Either it was
              removed, or you mistyped the link.
            </p>
            <p className="py-2 text-base text-gray-200">
              Sorry about that! Please visit our hompage to get where you need
              to go.
            </p>
            <Link href="/">
              <a>
                <button className="w-full px-1 py-5 my-4 text-white bg-indigo-600 border rounded-md lg:w-auto sm:px-16 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                  Go back to Homepage
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
