import { h } from 'nest-jsx-template-engine';

interface IAlertProps {
  title?: string;
  message: string;
}

interface IBaseAlertProps extends IAlertProps {
  color: 'teal' | 'red' | 'blue';
}

function Alert(props: IBaseAlertProps) {
  const aProps = { 'x-on:click': 'open = false' };
  return (
    <div
      class={`bg-${props.color}-100 border-t-4 border-${props.color}-500 rounded-b text-${props.color}-900 px-4 py-3 shadow-md mb-2 relative`}
      role="alert"
      x-data="{ open: true }"
      x-show="open"
    >
      <div class="flex">
        <div class="py-1">
          <svg
            class={`fill-current h-6 w-6 text-${props.color}-500 mr-4`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
        </div>
        <div>
          {props.title ? <p class="font-bold">{props.title}</p> : null}
          <p class="text-sm">{props.message}</p>
        </div>
      </div>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3" {...aProps}>
        <svg
          class={`fill-current h-6 w-6 text-${props.color}-500`}
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );
}

export function InfoAlert(props: IAlertProps) {
  return <Alert {...props} color="blue" />;
}

export function ErrorAlert(props: IAlertProps) {
  return <Alert {...props} color="red" />;
}

export function SuccessAlert(props: IAlertProps) {
  return <Alert {...props} color="teal" />;
}
