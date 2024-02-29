import styled from "styled-components";

export const StyledHeader = styled.div`
  span {
    ${({ theme }) => theme.typography.text}
  }

  button.ant-switch:not(.ant-switch-checked) {
    background: var(--primary-white);
    box-shadow: 0px 1px 4px 0px #d4ccf7;
  }

  button.ant-switch.ant-switch-checked .ant-switch-handle::before {
    background-color: var(--primary-white);
  }

  button.ant-switch .ant-switch-handle::before {
    background-color: var(--virgo-primary-purple);
  }
`;
