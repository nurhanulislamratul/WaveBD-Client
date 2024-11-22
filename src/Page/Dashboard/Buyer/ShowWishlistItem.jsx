import { useQuery } from "@tanstack/react-query";
import useUser from "../../../Hooks/useUser";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";

const ShowWishlistItem = () => {
  const { userData } = useUser();
  const axiosCommon = useAxiosCommon();

  const { data: wishlistData = [] } = useQuery({
    queryKey: ["ShowWishlistItem"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/wishlist-items/${userData._id}`);
      return data;
    },
  });

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {wishlistData.map((item, idx) => (
            <tr key={item._id}>
              <td>{idx + 1}</td>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>$ {item.priceInt}</td>
              <td>{item.brand}</td>
              <td>{item.stockInt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowWishlistItem;
