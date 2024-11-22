import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosCommon = useAxiosCommon();

  const { data: userData = [], refetch } = useQuery({
    queryKey: ["manageUsers"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/users");
      return data;
    },
  });

  const approveSeller = async (id) => {
    await axiosCommon.patch(`/approveSeller/${id}`).then((res) => {
      if (res.data.modifiedCount) {
        console.log(res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Promoted succesfully",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  const deleteUser = async (id) => {
    await axiosCommon.delete(`/user/${id}`).then((res) => {
      if (res.data.deletedCount) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User deleted succesfully",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Promote</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item, idx) => (
            <tr key={item._id}>
              <td>{idx + 1}</td>
              <td>{item.email}</td>
              <td>
                <span
                  className={`border ${
                    item.role === "admin" && "bg-green-300"
                  } ${item.role === "seller" && "bg-orange-300"} ${
                    item.role === "buyer" && "bg-indigo-400"
                  } px-4 py-2 rounded-xl`}
                >
                  {item.role}
                </span>
              </td>
              <td>
                <span
                  className={`border px-4 py-2 rounded-xl ${
                    item.status === "pending" ? "bg-red-300" : "bg-green-400"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td>
                <button
                  onClick={() => approveSeller(item._id)}
                  className="btn btn-outline bg-green-600 text-white"
                >
                  <FaPen size={24} />
                </button>
              </td>
              <td>
                <button
                  onClick={() => deleteUser(item._id)}
                  className="btn btn-outline bg-red-600 text-white"
                >
                  <MdDelete size={24} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
