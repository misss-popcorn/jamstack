import MenuLink from "./MenuLink";
import "./index.scss";
const Menu = ({ menuOptions }) => {
  return (
    <aside>
      {menuOptions.map((option) => (
        <MenuLink menu={option} key={option.name} />
      ))}
    </aside>
  );
};
export default Menu;