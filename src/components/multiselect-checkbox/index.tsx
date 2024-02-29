import { Checkbox, Space } from "antd";
import React, { useContext } from "react";
import { StyledCheckbox } from "./styles";
import EditModeContext from "../../context/EditModeContext";

interface IMultiSelectCheckbox {
  onChange: (e: number[]) => void;
  name: string;
  options: string[];
  value: string;
}

const MultiSelectCheckbox: React.FC<IMultiSelectCheckbox> = ({
  onChange,
  value,
  options,
}) => {
  const isEditing = useContext(EditModeContext);

  return (
    <StyledCheckbox>
      <Checkbox.Group
        onChange={onChange}
        disabled={!isEditing}
        defaultValue={value.split(",").map(Number)}
      >
        <Space direction="vertical" size={16}>
          {options.map((tool, idx) => (
            <Checkbox key={idx} name={tool} value={idx}>
              {tool}
            </Checkbox>
          ))}
        </Space>
      </Checkbox.Group>
    </StyledCheckbox>
  );
};

export default MultiSelectCheckbox;
