import { Switch } from "antd";
import { StyledHeader } from "./styes";

interface IHeaderProps {
  isEditing: boolean;
  onToggle: () => void;
}

const Header: React.FC<IHeaderProps> = ({ isEditing, onToggle }) => {
  return (
    <StyledHeader>
      <span>Editable</span>
      <Switch defaultChecked={false} value={isEditing} onChange={onToggle} />
    </StyledHeader>
  );
};

export default Header;
