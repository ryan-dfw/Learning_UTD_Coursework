import React, { useState, useEffect } from "react";

const Account = () => {
  const [accountData, setAccountData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        const response = await fetch("/api/account");
        if (!response.ok) {
          throw new Error("Failed to fetch account data");
        }
        const data = await response.json();
        setAccountData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAccountData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!accountData) {
    return <p>Please log in or create an account to view this page.</p>;
  }

  return (
    <div>
      <h2>Account Details</h2>
      <p>Name: {accountData.name}</p>
      <p>Email: {accountData.email}</p>
    </div>
  );
};

export default Account;
