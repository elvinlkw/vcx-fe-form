import styled from "styled-components";

export const StyledRadioGroup = styled.div`
  span {
    ${({ theme }) => theme.typography.text};
  }

  .ant-radio-checked .ant-radio-inner::after {
    opacity: 0;
  }

  .ant-radio-checked.ant-radio-disabled .ant-radio-inner {
    background-color: var(--option-disabled-grey);
  }
`;
