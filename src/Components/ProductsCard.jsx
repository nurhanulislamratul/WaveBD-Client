import { TbBrand4Chan } from "react-icons/tb";
import { MdCategory } from "react-icons/md";
import { IoIosPricetags } from "react-icons/io";
import { AiOutlineStock } from "react-icons/ai";
import useAxiosCommon from "../Hooks/useAxiosCommon";
import useUser from "../Hooks/useUser";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const ProductsCard = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, brand, category, photo, priceInt, stockInt, title } = product;
  const { userData } = useUser();
  const axiosCommon = useAxiosCommon();

  const addToWishlist = async () => {
    if (userData?.email && _id) {
      await axiosCommon
        .patch("/wishlist/add", {
          email: userData?.email,
          productId: _id,
        })
        .then((res) => {
          if (res.data.modifiedCount) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "added to wishlist",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  const addToCart = async () => {
    if (userData?.email && _id) {
      await axiosCommon
        .patch("/cart/add", {
          email: userData?.email,
          productId: _id,
        })
        .then((res) => {
          if (res.data.modifiedCount) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "added to cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="card bg-base-100 mb-6 shadow-xl">
      <figure>
        <img src={photo} alt={title} className="h-52 object-cover w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title uppercase">{title}</h2>
        <div className="flex justify-between my-2">
          <p className="flex items-center gap-2">
            <TbBrand4Chan size={20} />
            {brand}
          </p>
          <p className="flex items-center gap-2">
            <MdCategory size={20} />
            {category}
          </p>
        </div>
        <div className="flex justify-between my-2">
          <p className="flex items-center gap-2">
            <IoIosPricetags size={20} />
            {priceInt}
          </p>
          <p className="flex items-center gap-2">
            <AiOutlineStock size={20} />
            {stockInt}
          </p>
        </div>
        <div
          className={`card-actions ${
            userData?.role === "buyer" ? "flex" : "hidden"
          } justify-between`}
        >
          <button
            onClick={addToWishlist}
            className="btn btn-neutral btn-sm px-6"
          >
            Wishlist
          </button>
          <button onClick={addToCart} className="btn btn-neutral btn-sm px-6">
            Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
