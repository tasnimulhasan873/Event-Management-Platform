import React, { useState, use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthC';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const { createUser, googleSignin, updateUserProfile } = use(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const validatePassword = (password) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!pattern.test(password)) {
      toast.error("Password must contain an uppercase letter, a lowercase letter, and be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    if (!validatePassword(password)) return;

    setLoading(true);
    createUser(email, password)
      .then(() => {
        return updateUserProfile(name, photoURL);
      })
      .then(() => {
        toast.success("Account created successfully!");
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
        if (error.code === 'auth/email-already-in-use') {
          toast.error("Email already in use.");
        } else {
          toast.error("Registration failed.");
        }
      })
      .finally(() => setLoading(false));
  };

  const handleGoogle = () => {
    setLoading(true);
    googleSignin()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
        toast.error("Google login failed.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
      <div className='flex items-center justify-center'>
        <h1 className="text-5xl font-bold">Register now!</h1>
      </div>
      <div className="card-body">
        <form onSubmit={handleRegister}>
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" required />

          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" required />

          <label className="label">Photo URL</label>
          <input type="text" name='photoURL' className="input" placeholder="Photo URL" required />

          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" required />
          <button className="btn btn-neutral mt-4" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5] mt-4" disabled={loading}>
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
              <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
            </g>
          </svg>
          Register with Google
        </button>
      </div>
      <div className='flex items-center justify-center pb-6'>
        <p >Already have an account? <Link className='text-blue-600 underline' to='/login'>Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
