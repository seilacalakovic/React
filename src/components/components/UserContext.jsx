import { createContext, useState } from "react";

export const Context = createContext(null);
const UserContext = (props) => {
  const [user, setUser] = useState(0);

  const value = { user, setUser };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default UserContext;