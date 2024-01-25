import { Params } from "../../constants";

const UserProfile = ({ params: { id } }: Params) => {
  return <>User {id}</>;
};

export default UserProfile;
