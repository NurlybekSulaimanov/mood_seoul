// src/MyComponent.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setData } from "./actions";

const MyComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/bands"); // Replace with your actual backend endpoint
        dispatch(setData(response.data));
      } catch (error) {
        console.error("Error during API request:", error);
        // You can dispatch an error action if needed
      }
    };

    fetchData();
  }, [dispatch]);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const bands = data.bands || []; // Access the 'users' property from the data
  console.log(bands);

  return (
    <div>
      <h1>Data from Redux Store</h1>
      <ul>
        {bands.map((band) => (
          <li key={band._id}>
            <strong>Band Name:</strong> {band.bandName},{" "}
            <strong>Band Genre:</strong> {band.artistGenre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
