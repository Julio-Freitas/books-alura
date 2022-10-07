

export type ItemType = {
  id: number;
  value: string | number;
  selected?: boolean
};

export interface IDropdownProps {
  options: ItemType[];
  label?: string;
  onClickItem?: (item: ItemType)=> void
}
