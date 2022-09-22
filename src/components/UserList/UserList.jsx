import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../actions/auth";
import { getUserList, setReceiver } from "../../actions/user";
import "./UserList.css";

function UserList(props) {
  const [active, setActive] = useState(false);
  const receiver = useSelector((state) => state.user.receiver);
  const userList = useSelector((state) => state.user.userList);
  const history = useHistory();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
    history.push("/");
  };
  const setReceverUser = (recId) => {
    dispatch(setReceiver(recId));
  };

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  return (
    <div className="col-4 px-0">
      <div className="bg-white">
        <div className="bg-gray px-4 py-2 bg-light recent">
          <button className="btn" onClick={() => logOut()}>
            Log out
          </button>
        </div>

        <div className="messages-box">
          <div className="list-group rounded-0">
            {userList ? (
              userList.map((u) => (
                <a
                  className={`list-group-item list-group-item-action list-group-item-light rounded-0 ${
                    u.id === receiver && "tuc"
                  }`}
                  key={u.id}
                  onClick={() => {
                    setReceverUser(u.id);
                    setActive(true);
                  }}
                >
                  <div className="media">
                    <img
                      src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
                      alt="user"
                      width="50"
 UserList;