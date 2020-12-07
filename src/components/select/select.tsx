import * as React from "react";
import "./select.styles.css";
import chevronDown from "../../assets/images/down.svg";
import chevronUp from "../../assets/images/up.svg";
interface SelectPropsInterface {
  options: SelectOptionInterface[];
  default?: SelectOptionInterface;
  customClassPrefix?: string;
  defaultValue?: string;
  onSelectRegion: (regId: string) => void;
}

interface SelectOptionInterface {
  key: string;
  value: string;
}
interface SelectMenuOptionInterface {
  option: SelectOptionInterface;
  onSelect: (option: SelectOptionInterface) => void;
}

export const Select: React.FC<SelectPropsInterface> = (
  props: SelectPropsInterface
) => {
  const { options, onSelectRegion, defaultValue } = props;
  const [selectedOption, setSelectedOption] = React.useState<
    SelectOptionInterface | undefined
  >(props.default);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // React.useEffect(() => {
  //   setSelectedOption(props.default)
  // }, []);

  const onOptionSelect = (option: SelectOptionInterface): void => {
    setSelectedOption(option);
    setIsMenuOpen(false);
    onSelectRegion(option.key);
  };

  return (
    <div className={` react-selector`}>
      <button
        className={`react-selector__control`}
        onClick={(): void => setIsMenuOpen((state) => !state)}
      >
        <div className={`react-selector__control__label`}>
          {selectedOption?.value || defaultValue || "Select"}
        </div>
        <span className={`react-selector__dropdown-indicator`}>
          <img
            src={isMenuOpen ? chevronUp : chevronDown}
            alt={`dropdown indicator ${isMenuOpen ? "up" : "down"}`}
          />
        </span>
      </button>
      {isMenuOpen  && (
        <div className={`react-selector__menu`}>
          <ul className={`react-selector__menu__list`} role="menu">
            {options.map((option: SelectOptionInterface) => (
              <React.Fragment key={option.key}>
                <SelectMenuOption
                  option={option}
                  key={option.key}
                  onSelect={onOptionSelect}
                />
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const SelectMenuOption: React.FC<SelectMenuOptionInterface> = (
  props: SelectMenuOptionInterface
) => {
  const { option, onSelect } = props;

  const onItemClick = (): void => {
    onSelect(option);
  };

  return (
    <li
      key={option.value}
      className={`menu-list__item`}
      onClick={onItemClick}
      role="option"
      aria-selected="true"
    >
      <label>{option.value}</label>
    </li>
  );
};
