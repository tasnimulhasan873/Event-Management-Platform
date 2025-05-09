import React, { useState,  use } from 'react';
import { Link, useNavigate } from 'react-router'; // ✅ FIXED
import { AuthContext } from '../../contexts/AuthC';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const { createUser, googleSignin, updateUserProfile } = use(AuthContext); // ✅ useContext instead of use()
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photoURL: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePassword = (password) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!pattern.test(password)) {
      toast.error("Password must contain uppercase, lowercase, and at least 6 characters.");
      return false;
    }
    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, email, photoURL, password } = formData;

    if (!validatePassword(password)) return;

    setLoading(true);
    createUser(email, password)
      .then(() => updateUserProfile(name, photoURL))
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
    <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shadow-2xl">
      <div className='flex items-center justify-center'>
        <h1 className="text-4xl font-bold mt-4">Register now!</h1>
      </div>
      <div className="card-body">
        <form onSubmit={handleRegister}>
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input w-full py-2"
            placeholder="Your name"
            required
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input w-full py-2"
            placeholder="Your email"
            required
          />

          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photoURL"
            value={formData.photoURL}
            onChange={handleChange}
            className="input w-full py-2"
            placeholder="Photo URL"
            required
          />

          <label className="label">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input w-full py-2 pr-10"
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button className="btn btn-neutral mt-4 w-full py-2" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <button onClick={handleGoogle} className="btn mt-4 bg-white text-black border border-gray-300 w-full py-2" disabled={loading}>
          Register with Google
        </button>
      </div>

      <div className="text-center pb-6">
        <p>
          Already have an account? <Link className="text-blue-600 underline" to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
