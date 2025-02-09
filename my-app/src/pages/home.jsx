// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const HomePage = () => {
// //   const [searchInput, setSearchInput] = useState('');
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (searchInput.trim()) {
// //       try {
// //         // Send the search query to the backend
// //         const response = await axios.post('http://localhost:8080/api/search', { query: searchInput });

// //         console.log("Sending request with query: ", searchInput);

// //         // Navigate to results page with search query and backend result
// //         navigate(`/results?query=${searchInput}`, {
// //           state: { searchQuery: searchInput, results: response.data }
// //         });

// //         setError(''); // Clear any previous errors
// //       } catch (err) {
// //         // Handle error
// //         setError('Error occurred while fetching results.');
// //       }
// //     } else {
// //       setError('Please enter a search query');
// //     }
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <h2>Search for Crypto</h2>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           value={searchInput}
// //           onChange={(e) => setSearchInput(e.target.value)}
// //           placeholder="Enter a search query"
// //           required
// //         />
// //         <button type="submit">Search</button>
// //       </form>
// //       {error && <p>{error}</p>}
// //     </div>
// //   );
// // };

// // export default HomePage;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Search from '../components/Search'; // Import the search bar
// import Intro from '../components/Intro';

// const HomePage = () => {
//   const [searchInput, setSearchInput] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (searchInput.trim()) {
//       try {
//         // Send the search query to the backend
//         const response = await axios.post('http://localhost:8080/api/search', { query: searchInput });

//         console.log("Sending request with query: ", searchInput);

//         // Navigate to results page with search query and backend result
//         navigate(`/results?query=${searchInput}`, {
//           state: { searchQuery: searchInput, results: response.data }
//         });

//         setError(''); // Clear any previous errors
//       } catch (err) {
//         // Handle error
//         setError('Error occurred while fetching results.');
//       }
//     } else {
//       setError('Please enter a search query');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <Intro></Intro>
//       <Search
//         searchInput={searchInput}
//         setSearchInput={setSearchInput}
//         handleSubmit={handleSubmit}
//       />
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default HomePage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (searchInput.trim()) {
      try {
        // Send the search query to the backend
        const response = await axios.post('http://localhost:8080/api/search', { query: searchInput });

        console.log("Sending request with query: ", searchInput);

        // Navigate to results page with search query and backend result
        navigate(`/results?query=${searchInput}`, {
          state: { searchQuery: searchInput, results: response.data }
        });

        setError(''); // Clear any previous errors
      } catch (err) {
        // Handle error
        setError('Error occurred while fetching results.');
      }
    } else {
      setError('Please enter a search query');
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <div className="container flex-grow-1 d-flex flex-column justify-content-center" style={{ marginTop: "-10vh" }}>
        <div className="row justify-content-center mb-5">
          <div className="col-md-10 col-lg-8 text-center">
            <h1 className="display-3 fw-bold mb-4" style={{ color: "#2c3e50" }}>
              Check Before You Invest!
            </h1>
            <p className="fs-5 text-muted px-3" style={{ lineHeight: "1.6" }}>
              Use our Crypto Rug Pull Checker to assess the risk of a cryptocurrency 
              investment. Analyze historical data, social media sentiment, and other 
              indicators to avoid potential scams and make informed decisions.
            </p>
          </div>
        </div>

        {/* Search Section */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <form onSubmit={handleSubmit}>
              <div className="input-group shadow-lg" style={{ borderRadius: "50px" }}>
                <input
                  type="text"
                  className="form-control fs-4 border-0"
                  placeholder="Search for something..."
                  style={{
                    height: "70px",
                    borderTopLeftRadius: "50px",
                    borderBottomLeftRadius: "50px",
                    boxShadow: "none",
                  }}
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <button
                  className="btn btn-primary fs-4 px-5"
                  type="submit"
                  style={{
                    height: "70px",
                    borderTopRightRadius: "50px",
                    borderBottomRightRadius: "50px",
                    boxShadow: "none",
                    backgroundColor: "#4466ee",
                    borderColor: "#4466ee",
                  }}
                >
                  🔍 SEARCH
                </button>
              </div>
            </form>
            {error && <p>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
