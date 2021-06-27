import * as React from "react";
import PropTypes from "prop-types";

import MenuLink from "./MenuLink";
import "./index.scss";
const Menu = ({ menuOptions }) => {
  return (
    <aside>
      {menuOptions.map((option) => {
        const { name, route, icon } = option;
        return (
          <MenuLink name={name} route={route} icon={icon} key={option.name} />
        );
      })}
    </aside>
  );
};

Menu.propTypes = {
  menuOptions: PropTypes.array.isRequired,
};
export default React.memo(Menu);
