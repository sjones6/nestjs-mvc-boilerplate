import { h } from 'nest-jsx-template-engine';
import { IHtmlElementProps } from './interfaces'; 

interface IButtonProps extends IHtmlElementProps {
  label: string
  disabled: boolean
  onclick?: string
}


function Button(props: IButtonProps) {
  const { label, ...rest} = props;
  return <button {...rest} class={'rounded p2 ' + (props.class || '')}>
    {label}
  </button>
}

export function PrimaryButton(props: IButtonProps) {
  return <Button {...props} class={'text-white bg-black p-2 hover:bg-gray-700 ' + (props.class || '')} />
}