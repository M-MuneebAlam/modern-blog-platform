import React from 'react';

function Logo({ width = "120px" }) {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    width,
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: '600',
    fontSize: '1.2rem',
    color: '#111',
  };

  const accentStyle = {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#ff5a5f',
    marginRight: '8px',
  };

  return (
    <div style={containerStyle}>
      <div style={accentStyle}></div>
      <span>MyBlog</span>
    </div>
  );
}

export default Logo;




// import React from 'react'

// function Logo({ width = "100px" }) {
//   return (
//     <div style={{ width }}>
//       Logo
//     </div>
//   )
// }


// export default Logo


