import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import Axios from "axios";
import { useNavigate } from "react-router-dom/dist";

const Admin = () => {
  const [users, setUsers] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("jwt");
    const userData = jwtDecode(token);
    console.log(userData);
    if (userData["user_id"] != 4) {
      cookies.remove("jwt");
    } else {
      Axios.post("http://localhost:8000/api/user/list/").then((res) => {
        setUsers(res.data);
        console.log(res.data);
      });
    }
  }, []);
  return (
    <div>
      <div className="flex flex-row text-white justify-center items-center">
        <p className="p-2">Support</p>
      </div>
      <div className="text-white text-center">Users</div>
      <div className="text-white flex flex-col text-center">
        {users &&
          users.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                navigate("/chat/", { state: { user_id: item.id } })
              }
            >
              <p className="p-3 border rounded-lg mt-2">{item.username}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Admin;
