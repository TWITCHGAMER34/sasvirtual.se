import "./profileStyles.scss";
import ChangeUsernameCard from "./ChangeUsernameCard";
import ChangePasswordCard from "./ChangePasswordCard";
import DeleteAccCard from "./deleteAccCard.tsx";

/**
 * Profile page component.
 * Contains the profile settings.
 * Contains the change username card, the change password card, and the delete account card.
 * The user can change their username, change their password, and delete their account.
 * The user is required to enter their password to delete their account.
 * @constructor
 */
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
