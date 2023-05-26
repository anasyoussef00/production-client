// export declare type TOnClickCallback = (...args: any) => void;

export declare interface IContainerButton {
  text: string;
  onClick: () => void;
  type: 'submit' | 'button';
  form?: string;
}
