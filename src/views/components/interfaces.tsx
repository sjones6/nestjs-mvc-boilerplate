export interface IHtmlElementProps {
  id?: string;
  class?: string;
  onclick?: string;
}

export interface IHtmlInputProps extends IHtmlElementProps {
  onfocus?: string;
  onblur?: string;
  value?: string;
}
