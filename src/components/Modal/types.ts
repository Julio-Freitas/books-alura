export enum StatusModal {
    OPEN = "open",
    CLOSE = "close",
  }
export interface IModal {
  status: StatusModal;
  onClose: () => void;
  title: string;
  onSubmit: <T,>(data: T) => void;
}
