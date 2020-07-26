import { h } from 'nest-jsx-template-engine';
import { User } from 'src/users/user.entity';

interface INavProps {
  user?: User
}

function AuthenticatedMenu(props: INavProps) {
  return <div>
    <a href="/logout">logout</a>
  </div>
}
function PublicMenu(props: INavProps) {
  return <div>
    <a class="inline-block mx-2 hover:text-gray-700" href="/login">Login</a>
    <a class="inline-block mx-2 rounded text-white bg-black p-2 hover:bg-gray-700" href="/register">Sign Up</a>
  </div>
}

export function Nav(props: INavProps) {

  const Menu = props.user ? AuthenticatedMenu : PublicMenu

  return <nav class="bg-white py-2 px-4 width-full shadow">
    
    <div class="container mx-auto flex justify-between">
      <div class="relative block p-4 text-xl">
        <a href="/" class="hover:text-gray-700">
          <h1>App Name</h1>
        </a>
      </div>
      <div class="flex p-4">
        <Menu user={props.user} />
      </div>
    </div>
  </nav>
}