import SectionTitle from "../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosCommon = useAxiosCommon();
  // const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { brand, category, title, stock, price, photo, description } = data;
    const sellerEmail = user?.email;
    const stockInt = parseFloat(stock);
    const priceInt = parseFloat(price);
    const productInfo = {
      sellerEmail,
      brand,
      category,
      title,
      stockInt,
      priceInt,
      photo,
      description,
    };
    await axiosCommon.post("/add-product", productInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your product has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        // navigate("/dashboard");
      }
    });
  };

  return (
    <div>
      <SectionTitle
        title="Add Products Here"
        description="Add your products for getting more clients "
      />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6   lg:grid-cols-2 px-4 lg:px-12">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Title</span>
              </div>
              <input
                type="text"
                placeholder="Title here"
                className="input input-bordered w-full "
                {...register("title", { required: true })}
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <input
                type="text"
                placeholder="Category here"
                className="input input-bordered w-full "
                {...register("category", { required: true })}
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                type="number"
                placeholder="Price here"
                className="input input-bordered w-full "
                {...register("price", { required: true })}
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Stock</span>
              </div>
              <input
                type="number"
                placeholder="Stock Number here"
                className="input input-bordered w-full "
                {...register("stock", { required: true })}
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Photo</span>
              </div>
              <input
                type="text"
                placeholder="Photo URl here"
                className="input input-bordered w-full "
                {...register("photo", { required: true })}
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Brand</span>
              </div>
              <input
                type="text"
                placeholder="Brand name"
                className="input input-bordered w-full "
                {...register("brand", { required: true })}
              />
            </label>
            <label className="form-control col-span-1 lg:col-span-2 w-full ">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <input
                type="text"
                placeholder="Description"
                className="input input-bordered w-full "
                {...register("description", { required: true })}
              />
            </label>
            <button className="btn btn-block col-span-1 md:col-span-2  btn-neutral">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
