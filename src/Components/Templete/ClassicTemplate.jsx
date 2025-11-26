import React from 'react';

const ClassicTemplate = ({ data }) => {
  return (
    <div style={{ padding: '40px', fontFamily: 'serif', backgroundColor: 'white', color: 'black' }}>
      <div style={{ textAlign: 'center', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
        <h1>{data.name}</h1>
        <p>{data.email} | {data.phone}</p>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <h3>EXPERIENCE</h3>
        <p>{data.experience}</p>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <h3>EDUCATION</h3>
        <p>{data.education}</p>
      </div>
    </div>
  );
};

export default ClassicTemplate;