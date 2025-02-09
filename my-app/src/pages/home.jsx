// // import '../css/index.css';
// // import '../css/home.css';
// // import Search from '../components/Search';
// // import Intro from '../components/Intro';

// // function Home() {
// //   return (
// //     <div className="Home">
// //       <Intro />
// //       <Search />
// //     </div>
// //   );
// // }



// // export default Home;


// import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";

// const Home = () => {
//   return (
//     <div className="min-vh-100 d-flex flex-column">
//       {/* Main content container with reduced height to bring content up */}
//       <div className="container flex-grow-1 d-flex flex-column justify-content-center" style={{ marginTop: "-10vh" }}>
//         {/* Intro Section */}
//         <div className="row justify-content-center mb-5">
//           <div className="col-md-10 col-lg-8 text-center">
//             <h1 className="display-3 fw-bold mb-4" style={{ color: "#2c3e50" }}>
//               Check Before You Invest!
//             </h1>
//             <p className="fs-5 text-muted px-3" style={{ lineHeight: "1.6" }}>
//               Use our Crypto Rug Pull Checker to assess the risk of a cryptocurrency 
//               investment. Analyze historical data, social media sentiment, and other 
//               indicators to avoid potential scams and make informed decisions.
//             </p>
//           </div>
//         </div>

//         {/* Search Section */}
//         <div className="row justify-content-center">
//           <div className="col-md-10 col-lg-8">
//             <form>
//               <div className="input-group shadow-lg" style={{ borderRadius: "50px" }}>
//                 <input
//                   type="text"
//                   className="form-control fs-4 border-0"
//                   placeholder="Search for something..."
//                   style={{
//                     height: "70px",
//                     borderTopLeftRadius: "50px",
//                     borderBottomLeftRadius: "50px",
//                     boxShadow: "none",
//                   }}
//                 />
//                 <button
//                   className="btn btn-primary fs-4 px-5"
//                   type="submit"
//                   style={{
//                     height: "70px",
//                     borderTopRightRadius: "50px",
//                     borderBottomRightRadius: "50px",
//                     boxShadow: "none",
//                     backgroundColor: "#4466ee",
//                     borderColor: "#4466ee",
//                   }}
//                 >
//                   🔍 SEARCH
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      // Navigate to results page with search query as URL parameter
      navigate(`/results?search=${encodeURIComponent(searchInput)}`);
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <div className="container flex-grow-1 d-flex flex-column justify-content-center" style={{ marginTop: "-10vh" }}>
        {/* Intro Section */}
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
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  style={{
                    height: "70px",
                    borderTopLeftRadius: "50px",
                    borderBottomLeftRadius: "50px",
                    boxShadow: "none",
                  }}
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
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-3 text-center text-muted">
        <p className="mb-0">© 2025 Copyright: good hackers m.A.A.d Exeter</p>
      </footer>
    </div>
  );
};

export default Home;