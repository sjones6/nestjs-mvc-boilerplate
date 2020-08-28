import { h } from 'nest-jsx-template-engine';

interface IInputProps {
  name: string;
  value?: string;
  placeholder?: string;
}

interface ITextInputProps extends IInputProps {
  type?: 'text' | 'email' | 'password' | 'hidden';
}

export function TextInput(props: ITextInputProps) {
  return (
    <input
      type={props.type || 'text'}
      name={props.name}
      value={props.value || ''}
      placeholder={props.placeholder || ''}
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
    />
  );
}

export function HiddenInput(props: IInputProps) {
  return <TextInput {...props} type="hidden" />;
}

export function PasswordInput(props: IInputProps) {
  return <TextInput {...props} type="password" />;
}
