import styled from "styled-components";

export const StyledFloatedInput = styled.div`
  position: relative;
  font-family: "Nunito";

  .label {
    font-weight: 400;
    position: absolute;
    pointer-events: none;
    left: 12px;
    top: 11px;
    transition: 0.2s ease all;
    color: #979797;
  }

  .as-placeholder {
    font-size: 16px;
  }

  .as-label {
    top: 0px;
    font-size: 14px !important;
    font-weight: 300;
    line-height: 19.1px;
  }

  .ant-form-item {
    margin: 0;
  }

  input.ant-input {
    padding-top: 20px;
  }

  .ant-input.ant-input-disabled {
    background-color: var(--primary-white);
    border: 1px solid #f5f5f5;
    color: #f5f5f5 !important;
  }

  .ant-input.ant-input-disabled + label {
    color: #f5f5f5;
  }
`;
