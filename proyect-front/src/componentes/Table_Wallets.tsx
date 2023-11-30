import React from "react";

const Table_Wallets = () => {
  return (
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-black dark:bg-slate-300">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-900 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2">
              <a
                href="#"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-black-300"
              >
                Profile
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:hover:text-black-300"
                aria-current="page"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Table_Wallets;
