import * as React from "react";

import Layout from "../../components/Layout";

const withLayout = (Component, props) => {
  return class extends React.Component {
    render() {
      return (
        <Layout menuOptions={props.menuOptions}>
          <Component />
        </Layout>
      );
    }
  };
};
export default withLayout;
