import React, { ChangeEvent, useState } from "react";
import { Input } from "antd";
import theme from "../../theme";
import { StyledFloatedInput } from "./styles";
import isEmpty from "lodash/isEmpty";

interface IFloatedInputProps {
  label: string;
  value: string;
  name: string;
  disabled: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FloatedInput: React.FC<IFloatedInputProps> = ({
  label,
  value,
  name,
  disabled,
  onChange,
}) => {
  const [focus, setFocus] = useState(false);

  const isOccupied = focus || !isEmpty(value);

  return (
    <StyledFloatedInput
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      <Input
        onChange={onChange}
        value={value}
        style={{ height: "46px", ...theme.typography.text }}
        name={name}
        disabled={disabled}
        className="mb-0"
        autoComplete="off"
      />
      <label className={`label ${isOccupied ? "as-label" : "as-placeholder"}`}>
        {label}
      </label>
    </StyledFloatedInput>
  );
};

export default FloatedInput;
