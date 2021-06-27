import withLayout from "./hoc/withLayout";

import { menuOptions } from "../constants/menu";

const Dummy = () => {
  return <div className="sectionWrap"></div>;
};
export default withLayout(Dummy, { menuOptions });
