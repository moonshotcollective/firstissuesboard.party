import { get, includes, isEmpty } from "lodash";
import Image from "next/image";
import React from "react";

function descriptionShorten(description) {
  if (!isEmpty(description)) {
    let front = description.slice(0, 20);
    if (description.length > 20) {
      front += "...";
    }
    return front;
  }
  return "n/a";
}

export default function Card({ data }) {
  return (
    // <div
    //   className="container mx-auto border-2 border-grey-900"
    //   key={`${get(data, "meta.name")}_${get(data, "meta.mimeType")}`}
    // >
    //   <div className="flex flex-wrap justify-center">
    //     <div className="w-full sm:w-6/7 md:w-6/7 xl:w-6/7">
    //       <a className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
    //         <div className="p-4">
    //           <p className="text-md font-bold">{get(data, "title")}</p>
    //           <p className="mt-3 flex items-center text-sm">{get(data, "repository_url")}</p>
    //           <div className="mt-1 flex items-center text-sm">{get(data, "project_name")}</div>
    //         </div>
    //         <div className="p-4 border-t border-b text-xs text-gray-700">
    //           <span className="flex justify-center">
    //             {get(data, "url") ? (
    //               <button
    //                 onClick={() => window.open(get(data, "url"), "_blank")}
    //                 type="button"
    //                 className="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-gray-800 text-gray-400 hover:text-yellow-500 text-white font-normal py-2 px-4 mr-1 rounded"
    //               >
    //                 Check It Out
    //               </button>
    //             ) : (
    //               <button>n/a</button>
    //             )}
    //           </span>
    //         </div>
    //       </a>
    //     </div>
    //   </div>
    // </div>

    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <div className="p-6">
        <button
          onClick={() => window.open(get(data, "project_url"), "_blank")}
          type="button"
          className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 underline hover:text-grey-900"
        >
          {get(data, "project_name")}
        </button>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
        <p className="leading-relaxed mb-3">
          Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
        </p>
        <div className="flex items-center flex-wrap ">
          <a href={get(data, "url")} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
            Check It Out
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>

          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            1.2K
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
            6
          </span>
        </div>
      </div>
    </div>
  );
}
