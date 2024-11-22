import { Link, useNavigate } from "react-router-dom";
import img from "/Water.png";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosCommon from "../Hooks/useAxiosCommon";

const Login = () => {
  const { loginUser, googleLogin } = useAuth();
  const navigate = useNavigate();
  const axiosCommon = useAxiosCommon();

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    await loginUser(email, password).then((res) => {
      if (res.user.uid) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged in succesfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    });
  };

  const googleSignIn = async () => {
    await googleLogin()
      .then(async (response) => {
        if (response.user) {
          console.log(response.user);
          const email = response.user.email;
          const role = "buyer";
          const status = "approved";
          const wishList = [];
          const cart = [];
          const userData = { email, role, status, wishList, cart };
          await axiosCommon.post("/users", userData).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Account created succesfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="bg-base-200">
      <div className="hero  container mx-auto min-h-screen">
        <div className="hero-content w-full max-w-md">
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <div className="flex justify-center items-center gap-4 mt-6">
              <img src={img} className="size-16" alt="" />
              <h2 className="lg:text-4xl text-2xl font-bold ">Login Now</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-sm text-red-950 font-semibold mt-2">
                    Email Field is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-sm text-red-950 font-semibold mt-2">
                    Password Field is required
                  </p>
                )}
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="divider">Login With social media</div>
            <div className="mx-6">
              <button
                onClick={googleSignIn}
                className="btn btn-block btn-neutral  my-6  "
              >
                <FcGoogle size={30} />
              </button>
              <p className="text-center mb-4 ">
                Don&apos;t have an account?{" "}
                <Link to="/register" className="btn-link">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
