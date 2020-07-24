import { h } from 'nest-jsx-template-engine';
import { MainLayout } from '@layouts/main';
import { TextInput, PasswordInput } from '@components/inputs';

export function Register(props) {
  return <MainLayout title="Register">
    <form class="flex flex-col pt-3 md:pt-8" action="/register" method="post">

      <div class="flex flex-col pt-4">
        <label for="first_name" class="text-lg">First Name</label>
        <TextInput name="first_name" value={props.$old.first_name} />
      </div>

      <div class="flex flex-col pt-4">
        <label for="last_name" class="text-lg">Last Name</label>
        <TextInput name="last_name" value={props.$old.last_name} />
      </div>

      <div class="flex flex-col pt-4">
        <label for="email" class="text-lg">Email</label>
        <TextInput type="email" name="email" value={props.$old.email} placeholder="your@email.com" />
      </div>

      <div class="flex flex-col pt-4">
        <label for="password" class="text-lg">Password</label>
        <PasswordInput name="password" value='' placeholder="Password" />
      </div>

      <TextInput type="hidden" value={props.csrfToken} name="_csrf" />

      <input type="submit" value="Log In" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
    </form>
    <div class="text-center pt-12 pb-12">
      <p>Already have an account? <a href="/login" class="underline font-semibold">Login.</a></p>
    </div>
  </MainLayout>
}