import React from 'react'

export const NotFound404 = () => {
  return (
    <div>
        <section class="bg-white dark:bg-gray-900 ">
    <div class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div class="wf-ull lg:w-1/2">
            <p class="text-sm font-medium text-blue-500 dark:text-blue-400">404 error</p>
            <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
            <p class="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn't exist.Here are some helpful links:</p>

            <div class="flex items-center mt-6 gap-x-3">
                <a href="/">
                <button class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                    Take me home
                </button>
                </a>
            </div>
        </div>

        <div class="relative w-full mt-8 lg:w-1/2 lg:mt-0">
            <img class=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover " src="https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
        </div>
    </div>
</section>
    </div>
  )
}
