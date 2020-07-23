import { h } from 'nest-jsx-template-engine';
import { Layout } from './views/layout';
import { IHelloViewDTO } from './hello.view.dto';

export function Hello(props: IHelloViewDTO) {
  return <Layout title="Hello World">
    <div class="w-full flex flex-wrap">
      <div class="w-full md:w-1/2 flex flex-col">

        <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
          <a href="/" class="bg-black text-white font-bold text-xl p-4">Logo</a>
        </div>

        <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p class="text-center text-3xl">Welcome.</p>
          <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
            <div class="flex flex-col pt-4">
              <label for="email" class="text-lg">Email</label>
              <input type="email" id="email" placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div class="flex flex-col pt-4">
              <label for="password" class="text-lg">Password</label>
              <input type="password" id="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <input type="submit" value="Log In" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
          </form>
          <div class="text-center pt-12 pb-12">
            <p>Don't have an account? <a href="register.html" class="underline font-semibold">Register here.</a></p>
          </div>
        </div>

      </div>

      <div class="w-1/2 shadow-2xl">
        <img class="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/3vVzdb8KKIw?w=640" />
      </div>
    </div>
  </Layout>
}