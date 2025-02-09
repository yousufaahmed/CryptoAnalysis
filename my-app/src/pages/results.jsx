// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// const ResultsPage = () => {
//   const { search } = useLocation();
//   const query = new URLSearchParams(search).get('query');
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true); // Added loading state

//   // Function to fetch the result from the backend
//   async function fetchResult(query) {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/search?query=${query}`);
//       console.log(response);
//       return response.data.result;
//     } catch (error) {
//       console.error('Error fetching result:', error);
//       return null;
//     }
//   }

//   // Fetch result when query changes
//   useEffect(() => {
//     if (!query) {
//       setError('No query parameter found.');
//       setLoading(false);
//       return;
//     }

//     async function fetchData() {
//       setLoading(true);  // Start loading
//       const data = await fetchResult(query);  // Fetch result from backend
//       if (data) {
//         setResult(data);  // Set result if data is available
//         setError('');
//       } else {
//         setError('No result found.');
//       }
//       setLoading(false);  // Stop loading once data is fetched
//     }

//     fetchData(); // Call the async function
//   }, [query]);

//   return (
//     <div className="container mt-5">
//       <h2>Result for: {query}</h2>
//       {loading ? (
//         <p>Loading...</p>  // Show loading text until data is fetched
//       ) : (
//         result !== null ? (
//           <p>Result: {result}</p>  // Display the result when available
//         ) : (
//           <p>{error}</p>  // Show error if no result
//         )
//       )}
//     </div>
//   );
// };

// export default ResultsPage;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const ResultsPage = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResult = async () => {
      try {
        // Send GET request to the backend with the query parameter
        const response = await axios.get(`http://localhost:8080/api/search?query=${query}`);

        // Set the result from the backend
        setResult(response.data.result);
        setError('');
      } catch (err) {
        setError('Error occurred while fetching the result.');
        setResult(null);
      }
    };

    if (query) {
      fetchResult();
    }
  }, [query]);

  return (
    <div className="container mt-5">
      <h2>Result for: {query}</h2>
      {result !== null ? (
        <p>Result: {result}</p>
      ) : (
        <p>{error || 'Loading...'}</p>
      )}
    </div>
  );
};

export default ResultsPage;
