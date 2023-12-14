import React, { useState, useEffect } from "react";

const Account = ({ APIURL, token }) => {
  const [accountData, setAccountData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        const response = await fetch(`${APIURL}/api/users/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

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

    if (token) {
      fetchAccountData();
    }
  }, [APIURL, token]);

  if (!token) {
    return <p>Please log in to view this page.</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!accountData) {
    return <p>No account data available.</p>;
  }

  return (
    <div>
      <h2>Account Details</h2>
      <p>
        Name: {accountData.firstname} {accountData.lastname}
      </p>
      <p>Email: {accountData.email}</p>
    </div>
  );
};

export default Account;
