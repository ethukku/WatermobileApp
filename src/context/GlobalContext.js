import React, { useState } from "react";
import firebase from "../firebase";
const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);
    const changeAuthUser=(user)=>{
      // firebase.firestore()
      // .collection('users')
      // .doc(user.uid)
      setAuthUser(user)
    }
    
  return (
    <GlobalContext.Provider
      value={{
        changeAuthUser,
        authUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );

}
export { GlobalProvider,GlobalContext };