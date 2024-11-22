import { useQuery } from "@tanstack/react-query";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ViewProduct = () => {
  const { user } = useAuth();
  const axiosCommon = useAxiosCommon();

  const { data: productData = [], refetch } = useQuery({
    queryKey: ["productFromSeller"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/products/${user.email}`);
      return data;
    },
  });

  const deleteItem = async (id) => {
    await axiosCommon.delete(`/product/${id}`).then((response) => {
      if (response.data.deletedCount) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your product has been deleted",
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
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((item, idx) => (
            <tr key={item._id}>
              <td>{idx + 1}</td>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>$ {item.priceInt}</td>
              <td>{item.stockInt}</td>
              <td>
                <Link
                  to={`/dashboard/update-product/${item._id}`}
                  className="btn btn-outline btn-neutral"
                >
                  <MdOutlineTipsAndUpdates size={24} />
                </Link>
              </td>
              <td>
                <button
                  onClick={() => deleteItem(item._id)}
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

export default ViewProduct;
