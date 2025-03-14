import { createContext, useState } from "react";



export let AuthContext = createContext()

export default function AuthContextProvider(props) {

    const [checkMail, setcheckMail] = useState(null)

    return <AuthContext.Provider value={{ checkMail, setcheckMail }} >
        {props.children}
    </AuthContext.Provider>
}