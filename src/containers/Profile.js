import ProfileItem from "../components/Profile/ProfileItem";

import withLayout from "./hoc/withLayout";

import "./Profile.scss";

import ProfilePicture from "../images/dp@2x.jpg";

import { menuOptions } from "../constants/menu";

const profileLineItems = [
  { heading: "Full Name", content: "Urvashi Soni" },
  { heading: "Email Address", content: "urvashi.soni05@gmail.com" },
  { heading: "Gender", content: "Female" },
  { heading: "Age", content: "30" },
];
const Profile = () => {
  return (
    <div className="sectionWrap">
      <div className="profile">
        {profileLineItems.map((lineItem) => (
          <ProfileItem item={lineItem} key={lineItem.heading} />
        ))}
      </div>
      <img className="profilePicture" src={ProfilePicture} alt="dp" />
    </div>
  );
};
export default withLayout(Profile, { menuOptions });
