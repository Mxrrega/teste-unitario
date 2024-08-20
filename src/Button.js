import React from 'react';

export default function Button({usuario}, onClick) {
  return(
    <button 
        className={usuario ? "red" : "blue"}
        onClick={onClick}
    >
      {usuario ? "Logout" : "Login"}
      </button>
  )
}

 