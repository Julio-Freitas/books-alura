export enum StatusModal {
  OPEN = "open",
  CLOSE = "close",
}
export interface IModal<T> {
  status: StatusModal;
  onClose: () => void;
  title: string;
  onSubmit: (data: T) => Promise<boolean>;
}
