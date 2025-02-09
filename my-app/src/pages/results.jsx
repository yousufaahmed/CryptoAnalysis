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
import PieChart from '../components/Piechart';
import { ClipLoader } from 'react-spinners';
import { Card } from 'react-bootstrap';

const ResultsPage = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [chartData, setChartData] = useState({ labels: [], values: [] });

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

  useEffect(() => {
    // Only transform chart data if result is populated
    if (result && result[0]) {
      const preChartdata = result[0];
      var labels = preChartdata.map(item => item[0]);
      labels.push("Everyone Else")
      var values = preChartdata.map(item => item[1]);
      const totalValue = values.reduce((acc, value) => acc + value, 0);
      values.push(100 - totalValue)
      setChartData({ labels, values });  // Set chartData state
    }
  }, [result]);  // Re-run this effect when `result` changes

  // console.log(result[1]); // Check how many items are received



// ###############################################################################################
// YOUSUF ADD PIE CHART, TOP 3 INVESTOR PERCENTAGE, TOP 10 INVESTOR PERCENTAGE
// ###############################################################################################
return (
  <div className="container mt-5">
    <br></br>
    {result !== null ? (
      <div>
        <h2>Result for: {result[2].name}</h2>
        <h7>({query})</h7>
        {/* Display Cryptocurrency Information (result[2]) */}
        <br></br><br></br><br></br>
        <h2>Cryptocurrency Information:</h2>
        {/* list-style-type: none" */}

        <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Text>
                  <strong>Owner Portfolio:</strong> {result[2].owner_portfolio}
                  <br></br><br></br>
                  <strong>Legitimacy:</strong> {result[2].coin_legitimacy}
                  </Card.Text>
                </Card.Body>
              </Card>
        {/* Display Addresses and Percentages */}
        <br></br>

        {/* Display Web Scrape Details */}
        <h2>Web Scrape Details:</h2>
        
        <ul>
          {result[1].map((item, index) => (
            <li key={index} style={{ listStyleType: 'none', marginBottom: '10px' }}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Text>
                    {item}{' '}
                    {item.includes('Enabled') ? (
                      <span style={{ color: 'red' }}>❌</span>
                    ) : item.includes('Disabled') ? (
                      <span style={{ color: 'green' }}>✅</span>
                    ) : item.includes('Mutable') ? (
                      <span style={{ color: 'red' }}>❌</span>
                    ) : item.includes('not Modifiable') ? (
                      <span style={{ color: 'green' }}>✅</span>
                    ) : item.includes('Modifiable') ? (
                      <span style={{ color: 'red' }}>❌</span>
                    ) : item.includes('Immutable') ? (
                      <span style={{ color: 'green' }}>✅</span>
                    ) : (
                      <span>🔍</span>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>

        <br></br><br></br>

        <PieChart data={chartData}></PieChart>
        <br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
      //<ClipLoader size={50} color="#3498db" />
    ) : (
      <p>{error || "Loading..."}</p>
    )}
    
  </div>
);

  
};

export default ResultsPage;
