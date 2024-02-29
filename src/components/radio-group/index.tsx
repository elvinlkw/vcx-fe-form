import React, { useContext } from "react";
import { Radio, RadioChangeEvent, Space } from "antd";
import { StyledRadioGroup } from "./styles";
import ModeContext from "../../context/EditModeContext";

interface IRadioGroupProps {
  handleChange: (e: RadioChangeEvent) => void;
  isProficient: boolean;
  name: string;
}

const RadioGroup: React.FC<IRadioGroupProps> = ({
  handleChange,
  isProficient,
  name,
}) => {
  const isEditing = useContext(ModeContext);

  return (
    <StyledRadioGroup>
      <Radio.Group
        onChange={handleChange}
        value={isProficient}
        disabled={!isEditing}
        name={name}
      >
        <Space direction="vertical" size={16}>
          <Radio value={false}>No</Radio>
          <Radio value={true}>Yes</Radio>
        </Space>
      </Radio.Group>
    </StyledRadioGroup>
  );
};

export default RadioGroup;
