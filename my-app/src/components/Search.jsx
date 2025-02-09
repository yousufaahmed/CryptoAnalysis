// // import React from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";

// // const CenteredSearchBar = () => {
// //   return (
// //     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
// //       <form className="w-75">
// //         <div className="input-group shadow-lg" style={{ borderRadius: "50px" }}>
// //           <input
// //             type="text"
// //             className="form-control fs-4 border-0"
// //             placeholder="Search for something..."
// //             style={{
// //               height: "70px", // Ensures consistent height
// //               borderTopLeftRadius: "50px",
// //               borderBottomLeftRadius: "50px",
// //               boxShadow: "none",
// //             }}
// //           />
// //           <button
// //             className="btn btn-primary fs-4 px-5"
// //             type="submit"
// //             style={{
// //               height: "70px",
// //               borderTopRightRadius: "50px",
// //               borderBottomRightRadius: "50px",
// //               boxShadow: "none",
// //             }}
// //           >
// //             🔍 Search
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default CenteredSearchBar;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Search = ({ searchInput, setSearchInput, handleSubmit }) => {
//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <form className="w-75" onSubmit={handleSubmit}>
//         <div className="input-group shadow-lg" style={{ borderRadius: "50px" }}>
//           <input
//             type="text"
//             className="form-control fs-4 border-0"
//             placeholder="Enter token ID..."
//             style={{
//               height: "70px", // Ensures consistent height
//               borderTopLeftRadius: "50px",
//               borderBottomLeftRadius: "50px",
//               boxShadow: "none",
//             }}
//             value={searchInput} // Controlled input
//             onChange={(e) => setSearchInput(e.target.value)} // Update state on change
//           />
//           <button
//             className="btn btn-primary fs-4 px-5"
//             type="submit"
//             style={{
//               height: "70px",
//               borderTopRightRadius: "50px",
//               borderBottomRightRadius: "50px",
//               boxShadow: "none",
//             }}
//           >
//             🔍 Search
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Search;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Search = ({ searchInput, setSearchInput, handleSubmit }) => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form className="w-75" onSubmit={handleSubmit}>
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
    </div>
  );
};

export default Search;
