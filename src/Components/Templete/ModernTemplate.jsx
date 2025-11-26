import React from 'react';

const ModernTemplate = ({ data }) => {
  return (
    <div className='editing-it' style={{ display: 'flex', height: '100%', fontFamily: 'sans-serif' }}>
      {/* Sidebar */}
      <div style={{ width: '30%', backgroundColor: '#2c3e50', color: 'white', padding: '20px' }}>
        <h2 style={{fontSize: '24px'}}>{data.name}</h2>
        <p>{data.email}</p>
        <p>{data.phone}</p>
        <hr style={{borderColor: 'white'}}/>
        <h3>Skills</h3>
        <ul>
            {data.skills.split(',').map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </div>
      {/* Main Content */}
      <div style={{ width: '70%', padding: '20px', backgroundColor: 'white', color: 'black' }}>
        <h3 style={{color: '#2c3e50'}}>Professional Experience</h3>
        <p>{data.experience}</p>
        <h3 style={{color: '#2c3e50'}}>Education</h3>
        <p>{data.education}</p>
      </div>
    </div>
  );
};

export default ModernTemplate;