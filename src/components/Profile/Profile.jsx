import React, { use, useState } from 'react';

import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../contexts/AuthC';

const MyProfile = () => {
  const { user } = use(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photo, setPhoto] = useState(user?.photoURL || '');
  const [success, setSuccess] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, { displayName: name, photoURL: photo });
      setSuccess('Profile updated successfully!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <Helmet><title>My Profile</title></Helmet>
      <h2 className="text-xl font-semibold mb-4">My Profile</h2>
      <img src={user?.photoURL} alt="User" className="w-24 h-24 rounded-full mb-4" />
      <p>Email: {user?.email}</p>
      <form onSubmit={handleUpdate} className="mt-4 space-y-3">
        <input type="text" className="input input-bordered w-full" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="text" className="input input-bordered w-full" value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="Photo URL" />
        <button type="submit" className="btn btn-primary w-full">Save Changes</button>
        {success && <p className="text-green-500 text-sm">{success}</p>}
      </form>
    </div>
  );
};

export default MyProfile;
