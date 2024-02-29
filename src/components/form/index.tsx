import { Button, Form, RadioChangeEvent } from "antd";
import React, { ChangeEvent, useState } from "react";
import { StyledHeading, StyledText } from "./styles";
import FloatedInput from "../floated-input";
import RadioGroup from "../radio-group";
import MultiSelectCheckbox from "../multiselect-checkbox";

interface IFormProps {
  isEditing: boolean;
}

interface IFormValues {
  firstName: string;
  isProficient: boolean;
  tools: string;
}

const TOOLS: string[] = ["Redux", "Lodash", "Ant design", "Webpack", "Other"];

const FormComponent: React.FC<IFormProps> = ({ isEditing }) => {
  const [form] = Form.useForm();

  const [formValues, setFormvalues] = useState<IFormValues>({
    firstName: "",
    isProficient: false,
    tools: "0,2,3,4",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | RadioChangeEvent
  ) => {
    setFormvalues((prevValues) => ({
      ...prevValues,
      [e.target.name as string]: e.target.value,
    }));
  };

  const handleCheckboxChange = (selectedTools: number[]) => {
    setFormvalues((prevValues) => ({
      ...prevValues,
      tools: selectedTools.join(","),
    }));
  };

  const handleSubmit = () => {
    console.log(formValues);
  };

  return (
    <Form
      layout="vertical"
      form={form}
      className="mt-5 flex flex-col gap-5"
      onFinish={handleSubmit}
    >
      <Form.Item>
        <FloatedInput
          label="First Name"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
          disabled={!isEditing}
        />
      </Form.Item>
      <Form.Item>
        <StyledHeading className="mb-4">
          Are you proficient in ReactJS development?
        </StyledHeading>
        <RadioGroup
          isProficient={formValues.isProficient}
          handleChange={handleChange}
          name="isProficient"
        />
      </Form.Item>
      <Form.Item>
        <StyledHeading>Which tools do you use?</StyledHeading>
        <StyledText className="font-normal text-base mb-4">
          Please select all that apply.
        </StyledText>
        <MultiSelectCheckbox
          onChange={handleCheckboxChange}
          name="tools"
          options={TOOLS}
          value={formValues.tools}
        />
      </Form.Item>
      <Form.Item className="flex flex-row justify-center">
        <Button
          type="primary"
          shape="round"
          size="large"
          disabled={!isEditing}
          className="py-4 px-6 mt-5 text-lg h-auto"
          style={{ width: "200px" }}
          htmlType="submit"
        >
          Process
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
