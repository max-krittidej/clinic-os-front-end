import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

export default function Login(){


    const [cookies,setCookie,removeCookie] = useCookies(["login"]);
    var cookie = JSON.parse(cookies)
    if (cookie.expiry > moment() && cookie.is_logged == True){
        return True
    } else {
        login = {
            "is_logged": False,
            "expiry": None,
            "token": None,
            "role": None
        }

        jsonLogin = JSON.stringify(login)
        setCookie("login",jsonLogin,{path:"/"})
        const navigate = useNavigate()
        navigate("/login")
    }
}
