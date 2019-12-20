import React from "react";

const Loader = () => {
  return (
    <div>
      <svg id="logo" xmlns="http://www.w3.org/2000/svg">
        <g id="load" fill="#6050DC" fillRule="evenodd" transform="scale(3)">
          <g transform="translate(0 .339)">
            <ellipse cx="62.881" cy="5.081" rx="5.098" ry="5.081"></ellipse>
            <path d="M44.866 20.323h8.837a.68.68 0 0 0 .68-.678V.677a.68.68 0 0 0-.68-.677h-8.837a.68.68 0 0 0-.68.677v18.968a.68.68 0 0 0 .68.678zM20.394 10.161c-5.439 0-9.857-4.2-10.197-9.517C10.163.27 9.89 0 9.517 0H.68A.68.68 0 0 0 0 .677c.374 10.907 9.347 19.646 20.394 19.646 11.046 0 20.02-8.74 20.393-19.646a.68.68 0 0 0-.68-.677h-8.87c-.375 0-.646.271-.68.644-.306 5.283-4.725 9.517-10.163 9.517z"></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Loader;
