import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Volver() {
    const history=useHistory()

    const goToPreviousPage = () => {
        history.push("/home");
      };

    const currentPage= window.location.pathname


  return (
    <div className="flex justify-center mb-4">
        {currentPage !== "home" && (
          <button
            className="flex items-center text-white text-2xl p-4"
            onClick={goToPreviousPage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            VOLVER
          </button>
        )}
      </div>
  )
}
