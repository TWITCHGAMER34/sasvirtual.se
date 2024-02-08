import "./profileStyles.scss";
import ChangeUsernameCard from "./ChangeUsernameCard";
import ChangePasswordCard from "./ChangePasswordCard";
import DeleteAccCard from "./deleteAccCard.tsx";

export default function ProfilePage() {
  return (
    <>
      <h1 className={"profileh1"}>Profile Settings</h1>
      <div className="profile-page">
        <ChangeUsernameCard />
        <ChangePasswordCard />
        <DeleteAccCard />
      </div>
    </>
  );
}
