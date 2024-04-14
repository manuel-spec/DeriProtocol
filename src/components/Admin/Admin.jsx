import { useEffect } from "react";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";

const Admin = () => {
  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("jwt");
    const userData = jwtDecode(token);
    console.log(userData);
    if (userData["user_id"] != 4) {
      cookies.remove("jwt");
    }
  }, []);
  return (
    <div>
      <div className="flex flex-row text-white justify-center items-center">
        <p className="p-2">Support</p>
      </div>
      <div className="text-white text-center">Users</div>
    </div>
  );
};

export default Admin;
