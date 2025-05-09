import React, { use,  useState } from 'react';
import { Link, useNavigate } from 'react-router'; 
import { AuthContext } from '../../contexts/AuthC';

const Login = () => {
  const { loginUser, googleSignin, forgetpass } = use(AuthContext);
  const [emailForReset, setEmailForReset] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setEmailForReset(email);
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogle = () => {
    googleSignin()
      .then((result) => {
        console.log(result.user);
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleForgetPassword = () => {
    if (!emailForReset) {
      alert("Please enter your email first.");
      return;
    }
    forgetpass(emailForReset)
      .then(() => {
        alert("Password reset email sent. Check your inbox.");
      })
      .catch((error) => {
        console.log(error.message);
        alert("Error sending reset email.");
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
      <div className='flex items-center justify-center'>
        <h1 className="text-5xl font-bold">Login now!</h1>
      </div>
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            onChange={(e) => setEmailForReset(e.target.value)}
          />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div>
            <button type="button" onClick={handleForgetPassword} className="link link-hover">
              Forgot password?
            </button>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5] mt-3">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#fff" d="M0 0h512v512H0z" />
            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341z" />
            <path fill="#4285f4" d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57z" />
            <path fill="#fbbc02" d="M90 341a208 200 0 010-171l63 49q-12 37 0 73z" />
            <path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z" />
          </svg>
          <span className="ml-2">Login with Google</span>
        </button>
      </div>
      <div className='flex items-center justify-center pb-4'>
        <p>Don't have an account? <Link className='text-blue-600 underline' to='/register'>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
