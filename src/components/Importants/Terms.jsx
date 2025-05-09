import React from 'react';

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <p className="mb-4">
        Welcome to Event Explorer. By using our platform, you agree to comply with and be bound by the following terms and conditions of use.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>You must be at least 18 years old to use this platform.</li>
        <li>Do not use the platform for any illegal or unauthorized purpose.</li>
        <li>All content and data belong to YourAppName unless otherwise specified.</li>
        <li>We reserve the right to modify or terminate the service for any reason without notice.</li>
        <li>Violations of any of the terms may result in termination of your account.</li>
      </ul>
    </div>
  );
};

export default Terms;

