import React, { useState, useEffect } from "react";

const Books = () => {
  const [responseText, setResponseText] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/books");

        if (!response.ok) {
          throw new Error(
            `Failed to fetch book data. Status: ${response.status}`
          );
        }

        const text = await response.text();
        setResponseText(text);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Raw Response</h2>
      <pre>{responseText}</pre>
    </div>
  );
};

export default Books;
