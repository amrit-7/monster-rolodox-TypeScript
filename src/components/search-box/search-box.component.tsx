import { ChangeEvent } from "react";
import "./search-box.styles.css";

type SearchBoxParams = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};
const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxParams) => (
  <input
    type="search"
    placeholder={`${placeholder}`}
    className={`search-box ${className}`}
    onChange={onChangeHandler}
  />
);
export default SearchBox;
