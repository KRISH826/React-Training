/** @format */

import React, { useContext } from "react";
import UserContext from "../context/UseContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div>please log in</div>;
  return <div className='text-center'>Welcome {user.email}</div>;
};

export default Profile;
