import { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { Bounce, toast } from "react-toastify";

const Register = () => {
  const { signInWithGoogle, createAUser, user } = use(AuthContext);
  const [error, setError] = useState("");

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const photoURL = e.target.photo.value;
    // const password = e.target.password.value;
    // console.log(name, email, photoURL, password)
    signInWithGoogle()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photo.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error("Password must contain uppercase, lowercase, number and be 6+ characters", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    createAUser(email, password)
      .then((res) => {
        console.log(res);
        const createdUser = res.user;
        // profile update (name, photoURL)
        updateProfile(createdUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            console.log("updated profile");
          })
          .catch9((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-white max-w-xl mx-auto my-auto mt-20 shadow-2xl shadow-slate-800 rounded-2xl">
      <form onSubmit={handleCreateUser} className="p-8">
        <h1 className="text-center text-gray-700 text-4xl font-bold mb-3">
          Register
        </h1>
        <fieldset className="flex flex-col space-y-4">
          <div>
            <label className="label font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="name"
              required
            />
          </div>
          <div>
            <label className="label font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label className="label font-bold mb-2">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="https://image.com"
            />
          </div>
          <div>
            <label className="label font-bold mb-2">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="********"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <button className="btn btn-primary mt-4">Sign up</button>
            {/* Google */}
            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <div className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-bold">
                Login
              </Link>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
