import {useUser} from "../../api/userContext";

export const UserMenu = () => {
    const {isLoggedIn, username, logIn, logOut} = useUser();

    return (
        <>
            {isLoggedIn && <p>{username}</p>}
            {isLoggedIn ? (<button onClick={logOut}>LogOut</button>) : (<button onClick={logIn}>LogIn</button>) }

        </>
    )
}

export default UserMenu;