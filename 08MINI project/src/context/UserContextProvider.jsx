import React, { Children } from "react";
import UseContext from "./UseContext";

const UserContextProvider = ({children}) =>{
    const [user,setUser] = React.useState(null)
    return(
        <UseContext.Provider value = {{user,setUser}}>
            {children}
        </UseContext.Provider>
    )
}

export default UserContextProvider