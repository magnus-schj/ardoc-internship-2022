import React, { FC } from "react";
import TextField from "@material-ui/core/TextField";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

const SearchBox: FC<Props> = ({ value, setValue }) => {
  return (
    <div>
      <TextField
        label="søk etter en stasjon her..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
