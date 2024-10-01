"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Eddie!
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Your Ai Support Counsellor. Sign in to continue. We are currently
              in beta.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <h1 className="mt-10 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Eddie!
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Your Ai Support Counsellor. Sign in to continue. We are
                currently in beta.
              </p>
            </div>
            <div className="grid w-full flex-grow items-center px-4 sm:justify-center">
              <SignUp.Root>
                <SignUp.Step
                  name="start"
                  className="w-full space-y-6 rounded-2xl bg-white px-4 py-10 shadow-md ring-1 ring-black/5 sm:w-96 sm:px-8"
                >
                  <header className="text-center">
                    <h1 className="mt-4 text-xl font-medium tracking-tight text-zinc-950">
                      Create your account to Join the waitlist for Eddie!
                    </h1>
                  </header>
                  <div className="space-y-2">
                    <Clerk.Connection
                      name="google"
                      className="flex w-full items-center justify-center gap-x-3 rounded-md bg-gradient-to-b from-white to-neutral-50 px-2 py-1.5 text-sm font-medium text-neutral-950 shadow outline-none ring-1 ring-black/5 hover:to-neutral-100 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 active:text-neutral-950/60"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 16"
                        aria-hidden
                        className="size-4"
                      >
                        <g clipPath="url(#a)">
                          <path
                            fill="currentColor"
                            d="M8.32 7.28v2.187h5.227c-.16 1.226-.57 2.124-1.192 2.755-.764.765-1.955 1.6-4.035 1.6-3.218 0-5.733-2.595-5.733-5.813 0-3.218 2.515-5.814 5.733-5.814 1.733 0 3.005.685 3.938 1.565l1.538-1.538C12.498.96 10.756 0 8.32 0 3.91 0 .205 3.591.205 8s3.706 8 8.115 8c2.382 0 4.178-.782 5.582-2.24 1.44-1.44 1.893-3.475 1.893-5.111 0-.507-.035-.978-.115-1.369H8.32Z"
                          />
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path fill="#fff" d="M0 0h16v16H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                      Login with Google
                    </Clerk.Connection>
                  </div>
                  <p className="text-center mt-4 text-sm text-zinc-600">
                    or Sign up via email:
                  </p>
                  <hr className="my-4" />
                  <Clerk.GlobalError className="block text-sm text-red-400" />
                  <div className="space-y-4">
                    <Clerk.Field name="emailAddress" className="space-y-2">
                      <Clerk.Label className="text-sm font-medium text-zinc-950">
                        Email
                      </Clerk.Label>
                      <Clerk.Input
                        type="email"
                        required
                        className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
                      />
                      <Clerk.FieldError className="block text-sm text-red-400" />
                    </Clerk.Field>
                    <Clerk.Field name="password" className="space-y-2">
                      <Clerk.Label className="text-sm font-medium text-zinc-950">
                        Password
                      </Clerk.Label>
                      <Clerk.Input
                        type="password"
                        required
                        className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
                      />
                      <Clerk.FieldError className="block text-sm text-red-400" />
                    </Clerk.Field>
                  </div>
                  <SignUp.Action
                    submit
                    className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
                  >
                    Sign Up
                  </SignUp.Action>

                  <p className="text-center text-sm text-zinc-500">
                    Already have an account?{" "}
                    <a
                      href="/sign-in"
                      className="inline-block font-medium text-zinc-950 decoration-zinc-950/20 underline-offset-4 outline-none hover:text-zinc-700 hover:underline focus-visible:underline"
                    >
                      Sign in
                    </a>
                  </p>
                </SignUp.Step>
                <SignUp.Step
                  name="verifications"
                  className="w-full space-y-6 rounded-2xl bg-white px-4 py-10 shadow-md ring-1 ring-black/5 sm:w-96 sm:px-8"
                >
                  <header className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 40 40"
                      className="mx-auto size-10 text-zinc-950"
                      aria-hidden
                    >
                      <mask
                        id="a"
                        width="40"
                        height="40"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
                      </mask>
                      <g fill="currentColor" mask="url(#a)">
                        <path d="M43.5 3a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V2ZM43.5 8a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V7ZM43.5 13a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 18a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 23a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 28a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 33a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 38a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1Z" />
                        <path d="M27 3.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 8.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM23 13.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM21.5 18.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM20.5 23.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM22.5 28.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 33.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM27 38.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2Z" />
                      </g>
                    </svg>
                    <h1 className="mt-4 text-xl font-medium tracking-tight text-zinc-950">
                      Verify email code
                    </h1>
                  </header>
                  <Clerk.GlobalError className="block text-sm text-red-400" />
                  <SignUp.Strategy name="email_code">
                    <Clerk.Field name="code" className="space-y-2">
                      <Clerk.Label className="text-sm font-medium text-zinc-950">
                        Email code
                      </Clerk.Label>
                      <Clerk.Input
                        type="otp"
                        required
                        className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
                      />
                      <Clerk.FieldError className="block text-sm text-red-400" />
                    </Clerk.Field>
                    <SignUp.Action
                      submit
                      className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
                    >
                      Verify
                    </SignUp.Action>
                  </SignUp.Strategy>
                  <p className="text-center text-sm text-zinc-500">
                    Already have an account?{" "}
                    <a
                      href="/sign-in"
                      className="inline-block font-medium text-zinc-950 decoration-zinc-950/20 underline-offset-4 outline-none hover:text-zinc-700 hover:underline focus-visible:underline"
                    >
                      Sign in
                    </a>
                  </p>
                </SignUp.Step>
                <SignUp.Step
                  name="continue"
                  className="w-full space-y-6 rounded-2xl bg-white px-4 py-10 shadow-md ring-1 ring-black/5 sm:w-96 sm:px-8"
                >
                  <header className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 40 40"
                      className="mx-auto size-10 text-zinc-950"
                      aria-hidden
                    >
                      <mask
                        id="a"
                        width="40"
                        height="40"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
                      </mask>
                      <g fill="currentColor" mask="url(#a)">
                        <path d="M43.5 3a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V2ZM43.5 8a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V7ZM43.5 13a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 18a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 23a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 28a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 33a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 38a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1Z" />
                        <path d="M27 3.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 8.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM23 13.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM21.5 18.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM20.5 23.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM22.5 28.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 33.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM27 38.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2Z" />
                      </g>
                    </svg>
                    <h1 className="mt-4 text-xl font-medium tracking-tight text-zinc-950">
                      Continue registration
                    </h1>
                  </header>
                  <Clerk.GlobalError className="block text-sm text-red-400" />
                  <Clerk.Field name="username" className="space-y-2">
                    <Clerk.Label className="text-sm font-medium text-zinc-950">
                      Username
                    </Clerk.Label>
                    <Clerk.Input
                      type="text"
                      required
                      className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
                    />
                    <Clerk.FieldError className="block text-sm text-red-400" />
                  </Clerk.Field>
                  <SignUp.Action
                    submit
                    className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
                  >
                    Continue
                  </SignUp.Action>
                  <p className="text-center text-sm text-zinc-500">
                    Already have an account?{" "}
                    <a
                      href="/sign-in"
                      className="inline-block font-medium text-zinc-950 decoration-zinc-950/20 underline-offset-4 outline-none hover:text-zinc-700 hover:underline focus-visible:underline"
                    >
                      Sign in
                    </a>
                  </p>
                </SignUp.Step>
              </SignUp.Root>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
