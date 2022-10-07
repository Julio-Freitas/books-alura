import { useState } from "react";
import * as S_ from "./styles";
import { IDropdownProps, ItemType } from "./types";

export const Dropdown = ({ onClickItem, options, label }: IDropdownProps) => {
  const [_option, _setOption] = useState<ItemType | null>(null);
  const _handleSelected = (option: ItemType) => {
    _setOption(option);
    if (onClickItem) onClickItem(option);
  };

  return (
    <S_.Container>
      <label>{label}</label>
      <S_.WrapperUl>
        {options.map((option) => (
          <S_.WrapperLi
            key={option.id}
            selected={_option?.id === option.id}
            onClick={() => _handleSelected(option)}
          >
            {option.value}
          </S_.WrapperLi>
        ))}
      </S_.WrapperUl>
    </S_.Container>
  );
};
