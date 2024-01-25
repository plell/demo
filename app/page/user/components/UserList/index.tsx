"use client";

import useData from "@/app/store/useData";
import { useEffect } from "react";
import { getUsers } from "../../handlers";

const UserList = () => {
  const users = useData((s) => s.users);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users.map((u, i) => {
        return <div key={i}>{u.email}</div>;
      })}
    </div>
  );
};

export default UserList;
