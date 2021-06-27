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
export default ProfileItem;
