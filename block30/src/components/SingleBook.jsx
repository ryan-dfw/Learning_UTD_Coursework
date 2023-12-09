import React, { useState, useEffect } from "react";

const SingleBook = ({ match }) => {
  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
      const bookId = match.params.id; // Extract the book ID from the route params
      try {
        // Replace `"/api/books/:id"` with the actual API endpoint for fetching individual book details
        const response = await fetch(`/api/books/${bookId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch book details");
        }
        const data = await response.json();
        setBookData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookData();
  }, [match.params.id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Book Details</h2>
      <p>Title: {bookData.title}</p>
      <p>Author: {bookData.author}</p>
      <p>Description: {bookData.description}</p>
      {/* Add more details as needed */}

      {/* Conditional rendering of Checkout button for logged-in users */}
      {isLoggedIn() && <button onClick={handleCheckout}>Checkout</button>}
    </div>
  );
};

// Placeholder functions for authentication
const isLoggedIn = () => {
  // Add your actual authentication logic here
  // For example, you might check if a user is logged in based on the state or context
  return true; // Placeholder, replace with your logic
};

const handleCheckout = () => {
  // Add your checkout logic here
  console.log("Checkout button clicked");
  // You can handle the checkout logic or make an API call here
};

export default SingleBook;
