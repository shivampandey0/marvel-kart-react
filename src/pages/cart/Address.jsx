import React from "react";

export const Address = () => {
  return (
    <div className="card w-100">
      <div className="card-body">
        <p className="card-title h4">
          Deliver to: <span className="fw-bold">Shivam Pandey</span>
        </p>
      </div>
      <div className="card-content">
        <p className="content txt-sm">
          Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
        </p>
      </div>
      <div className="card-icons top-right">
        <button>
          <i className="fas fa-gear icon"></i>
        </button>
      </div>
    </div>
  );
};
