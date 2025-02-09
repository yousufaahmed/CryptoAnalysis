import React from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const { searchQuery, results } = location.state || {};

  return (
    <div className="container mt-5">
      <h2>Search Results for: {searchQuery}</h2>
      {/* Display your results here */}
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
};

export default Results;