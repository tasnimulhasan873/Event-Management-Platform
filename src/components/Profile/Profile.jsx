import React, { use, useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../contexts/AuthC';

const MyProfile = () => {
  const { user } = use(AuthContext); 
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [success, setSuccess] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, { displayName: name, photoURL: photo });
      setSuccess('Profile updated successfully!');
      setName('');
      setPhoto('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <Helmet><title>My Profile</title></Helmet>
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <img
        src={user?.photoURL}
        alt="User"
        className="w-24 h-24 rounded-full mx-auto mb-2"
      />
      <p className="text-lg font-medium mb-6">{user?.displayName}</p>
      <p className="mb-6 text-sm ">Email: {user?.email}</p>

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          className="input input-bordered w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New name"
        />
        <input
          type="text"
          className="input input-bordered w-full"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="New photo URL"
        />
        <button type="submit" className="btn btn-primary w-full">Save Changes</button>
        {success && <p className="text-green-500 text-sm">{success}</p>}
      </form>
    </div>
  );
};

export default MyProfile;

