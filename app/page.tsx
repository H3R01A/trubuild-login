import Image from "next/image";
import google from "@/public/images/google.svg";
import linkedin from "@/public/images/linkedin.svg";
import logo from "@/public/images/logo.svg";

export default function Home() {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-between">
        <div className="mb-2 mt-10 flex place-content-center place-items-center">
          <Image
            src={logo}
            alt="Company Logo"
            width={60}
            height={50}
            className="mr-2"
          />
          <span className="text-xl font-semibold text-white">TruBuild</span>
        </div>
        <div className="flex w-[32rem] max-w-[32rem] flex-col place-content-center place-items-center items-center gap-2 rounded-e-3xl rounded-s-3xl bg-white py-10 lg:place-content-center">
          <div>
            <h1 className="text-balance bg-gradient-to-r from-purple-400 to-orange-600 bg-clip-text text-center text-2xl font-bold text-transparent">
              Super charge your construction projects with TruBuild.
            </h1>
          </div>
          <p className="mt-1 text-sm text-gray-400">
            Get started by creating a TruBuild account
          </p>
          <div className="mt-8 flex space-x-4 text-xs">
            <button className="flex place-items-center rounded-md bg-gray-100 px-6 py-3 pl-3 text-black">
              <Image
                src={google}
                alt="Google Logo"
                width={24}
                height={24}
                className="mr-2"
              />
              Continue with Google
            </button>
            <button className="flex place-items-center rounded-md bg-gray-100 px-6 py-3 pl-3 text-black">
              <Image
                src={linkedin}
                alt="Google Logo"
                width={24}
                height={24}
                className="mr-2"
              />
              Continue with Linkedin
            </button>
          </div>
          <h3 className="mb-6 mt-3 text-sm text-black">OR</h3>
          <div className="flex flex-col space-y-0.5">
            <p className="place-self-start pb-2 text-sm text-black">
              Business Email Address
            </p>
            <input
              type="text"
              className="w-96 rounded-md border border-gray-300 py-4 pl-3 text-sm text-black shadow-sm placeholder:text-left"
              placeholder="Name@company.com"
            />
          </div>
          <div className="mt-6">
            <button className="w-96 rounded-e-2xl rounded-s-2xl bg-[#0a0a3a] px-6 py-4 text-center text-lg font-bold">
              Create your account
            </button>
          </div>
          <div className="mt-4 text-sm">
            <p className="text-black">
              Already have an account?{" "}
              <a
                className="font-bold text-blue-950 hover:underline"
                href="/signin"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
      <footer className="mb-6 mt-8 text-center text-sm text-gray-400">
        By continuing, you agree to our terms and Privacv Policy.
      </footer>
    </>
  );
}
