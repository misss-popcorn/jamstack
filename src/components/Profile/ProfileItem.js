import PropTypes from "prop-types";

import "./ProfileItem.scss";

const ProfileItem = ({ item }) => {
  return (
    <div className="profileItem">
      <div>
        <p className="heading">{item.heading}</p>
        <p className="content">{item.content}</p>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default ProfileItem;
