import { JSXTemplate } from 'nest-jsx-template-engine';
import { User } from 'src/users/user.entity';

interface SessionMessages {
  info: string[],
  success: string[],
  error: string[]
}

interface SessionProps {
  csrfToken: string,
  user?: User,
  messages: SessionMessages
}

export namespace App {
  export interface RenderProps extends JSXTemplate.RenderProps  {
    $session: SessionProps
    $old: any
  }
}