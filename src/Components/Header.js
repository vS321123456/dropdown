  import React from "react";


  function Header({name}) {
    return (
        <div style={{background: "#ADD8E6",padding: 20}}>
            <h1 className="text-center my-2">{name}</h1>
            <p>This is header</p>
        </div>
    );
  }
  export default Header;