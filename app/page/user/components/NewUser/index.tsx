"use client";

import { post } from "../../../../api/handlers";

import { getUsers } from "../../handlers";

const NewUser = () => {
  const makeNewUser = async () => {
    const randNum = Math.random() * 100000;

    await post("user", {
      email: `myemail${randNum}@mom.com`,
    });

    getUsers();
  };

  return (
    <button className='btn' onClick={makeNewUser}>
      NewUser
    </button>
  );
};

export default NewUser;
