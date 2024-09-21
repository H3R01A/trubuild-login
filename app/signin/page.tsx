import Image from "next/image";
import google from "@/public/images/google.svg";
import linkedin from "@/public/images/linkedin.svg";
import logo from "@/public/images/logo.svg";

export default function SignIn() {
  return (
    <>
      <div className="container mx-auto px-96">
        <div className="mb-2 mt-10 flex place-content-center place-items-center">
          <Image
            src={logo}
            alt="Company Logo"
            width={60}
            height={50}
            className="mr-2"
          />
          <p className="text-xl">TruBuild</p>
        </div>
        <div className="flex h-auto flex-col place-content-center items-center gap-2 rounded-e-3xl rounded-s-3xl bg-white py-10">
          <div>
            <h1 className="text-balance bg-gradient-to-r from-purple-400 to-orange-600 bg-clip-text text-center text-2xl font-bold text-transparent">
              Welcome Back!
            </h1>
          </div>
          <p className="mt-5 text-sm text-gray-400">
            Access your TruBuild account by signing back in!
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
                alt="Linkedin logo"
                width={24}
                height={24}
                className="mr-2"
              />
              Continue with LinkedIn
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
            <p className="place-self-end pt-4 text-sm font-bold text-blue-950">
              Reset password
            </p>
          </div>

          <div className="mt-6">
            <button className="w-96 rounded-e-2xl rounded-s-2xl bg-blue-950 px-6 py-4 text-center text-lg">
              Sign in
            </button>
          </div>
          <div className="mt-4 text-sm">
            <p className="text-black">
              Don't have an account?{" "}
              <a className="font-bold text-blue-950 hover:underline" href="/">
                Create an account
              </a>
            </p>
          </div>
        </div>
      </div>
      <footer className="mb-6 mt-8 flex justify-center text-sm text-slate-100">
        By continuing, you agree to our terms and Privacv Policy.
      </footer>
    </>
  );
}
