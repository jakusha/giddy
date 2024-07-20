import { LoginInfo } from "@navigation/index";
import { useContext } from "react";

const useLogin = () => {

    const context = useContext(LoginInfo)

    if(context === null) {
        return;
    }
    return context;
}

export default useLogin;