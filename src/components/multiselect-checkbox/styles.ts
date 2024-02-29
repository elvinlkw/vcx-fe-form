import styled from "styled-components";

export const StyledCheckbox = styled.div`
  span {
    ${({ theme }) => theme.typography.text}
  }

  .ant-checkbox.ant-checkbox-checked.ant-checkbox-disabled .ant-checkbox-inner {
    background-color: var(--option-disabled-grey);
  }

  .ant-checkbox-inner {
    border-radius: 50%;
  }

  .ant-checkbox-inner::after {
    opacity: 0;
  }
`;
