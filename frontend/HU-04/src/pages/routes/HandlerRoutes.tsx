import { Login } from "../Login/Login";
import { AuthRoutes } from "./AuthRoutes";


export function HandlerRoutes() {
    const username= null;
    
    if (!username) return <Login />;

    return <AuthRoutes />;
}
