import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { clearAuthData } from "@/Store/Redux/Slices/authSlice";

const TotkHeader = () => {
  const router = useRouter();

  const dispatch = useDispatch()

  const authorized = useSelector((state) => state.auth.isAuthenticated)
  const userToken = useSelector((state) => state.auth.token)
  console.log('user present for Header', authorized, userToken)

  const handleTotk = () => {
    router.push("/totk");
  };

  const handleHelm = () => {
    router.push("/totk/helmArmor");
  };

  const handleChest = () => {
    router.push("/totk/chestArmor");
  };

  const handleLeg = () => {
    router.push("/totk/legArmor");
  };

  const handleLogin = () => {
    router.push("/totk/totkLogin");
  };

  const handleHome = () => {
    router.push('/')
  }

  const handleRegister = () => {
    router.push('/totk/totkRegister')
  }

  const handleCreate = () => {
    router.push('/totk/user/armorCreator')
  }

  const handleLogout = () => {
    dispatch(clearAuthData())
    router.push('/totk')
  }

  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      {!authorized ? (
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a onClick={handleHome} > - Trinity Home</a>
          </li>
          <li>
            <a onClick={handleTotk} > - Home</a>
          </li>
          <li>
            <a onClick={handleHelm} > - Helms</a>
          </li>
          <li>
            <a onClick={handleChest}> - Chest Plates</a>
          </li>
          <li>
            <a onClick={handleLeg}> - Leg Armor</a>
          </li>
          <li>
            <a onClick={handleRegister}> - Register</a>
          </li>
          <li>
            <a onClick={handleLogin}> - Login</a>
          </li>
        </ul>
      </div>
      ) : (
        <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a onClick={handleHome} > - Trinity Home</a>
          </li>
          <li>
            <a onClick={handleTotk} > - Home</a>
          </li>
          <li>
            <a onClick={handleHelm} > - Helms</a>
          </li>
          <li>
            <a onClick={handleChest}> - Chest Plates</a>
          </li>
          <li>
            <a onClick={handleLeg}> - Leg Armor</a>
          </li>
          <li>
            <a onClick={handleCreate}> - Armor Creator</a>
          </li>
          <li>
            <a onClick={handleLogout}> - Logout</a>
          </li>
        </ul>
      </div>
      )}
    </div>
    <div className="navbar-center">
      <a className="btn btn-ghost normal-case text-xl" onClick={handleTotk} >Tears of The Kingdom: Armor Creator</a>
    </div>
    <div className="navbar-end">
    </div>
  </div>
  );
};

export default TotkHeader;
