import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './ResumeBuilder.css'; // Import the dark theme styles

// --- 📄 TEMPLATE 1: MODERN BLUE ---
const ModernTemplate = ({ data }) => (
  <div style={{ display: 'flex', height: '100%', minHeight:'297mm', fontFamily: 'sans-serif' }}>
    <div style={{ width: '35%', backgroundColor: '#1a2a6c', color: 'white', padding: '30px' }}>
      <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#fff', margin: '0 auto 20px', display:'flex', alignItems:'center', justifyContent:'center', color:'#1a2a6c', fontWeight:'bold', fontSize:'24px'}}>
         {data.name.charAt(0)}
      </div>
      <h2 style={{ fontSize: '22px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '10px' }}>Contact</h2>
      <p>📧 {data.email}</p>
      <p>📱 {data.phone}</p>
      <p>📍 {data.address}</p>
      
      <h2 style={{ fontSize: '22px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '10px', marginTop: '30px' }}>Skills</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
        {data.skills.split(',').map((skill, i) => (
          <span key={i} style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 10px', borderRadius: '4px', fontSize: '14px' }}>{skill.trim()}</span>
        ))}
      </div>
    </div>
    <div style={{ width: '65%', padding: '40px' }}>
      <h1 style={{ fontSize: '40px', color: '#1a2a6c', margin: 0 }}>{data.name}</h1>
      <p style={{ fontSize: '18px', color: '#666', letterSpacing: '2px' }}>{data.role}</p>
      <hr style={{ borderColor: '#1a2a6c', opacity: 0.5 }} />

      <h3 style={{ color: '#1a2a6c', marginTop: '30px' }}>🏢 Experience</h3>
      <p style={{ whiteSpace: 'pre-line' }}>{data.experience}</p>

      <h3 style={{ color: '#1a2a6c', marginTop: '20px' }}>🎓 Education</h3>
      <p style={{ whiteSpace: 'pre-line' }}>{data.education}</p>
    </div>
  </div>
);

// --- 📄 TEMPLATE 2: MINIMALIST ---
const MinimalTemplate = ({ data }) => (
  <div style={{ padding: '40px', fontFamily: 'Georgia, serif', color: '#333', minHeight:'297mm' }}>
    <div style={{ borderBottom: '3px solid #000', paddingBottom: '20px', marginBottom: '30px' }}>
      <h1 style={{ fontSize: '50px', margin: 0, textTransform: 'uppercase' }}>{data.name}</h1>
      <p style={{ fontSize: '16px', margin: '5px 0' }}>{data.role} | {data.email} | {data.phone}</p>
    </div>
    
    <h3>PROFESSIONAL PROFILE</h3>
    <p>{data.experience}</p>

    <h3 style={{ marginTop: '30px', borderBottom: '1px solid #ccc' }}>SKILLS</h3>
    <p>{data.skills}</p>

    <h3 style={{ marginTop: '30px', borderBottom: '1px solid #ccc' }}>EDUCATION</h3>
    <p>{data.education}</p>
  </div>
);

// --- 🏗️ MAIN COMPONENT ---
const ResumeBuilder = () => {
  // State for resume data
  const [data, setData] = useState({
    name: 'Alex Developer',
    role: 'Full Stack Engineer',
    email: 'alex@code.com',
    phone: '+91 98765 43210',
    address: 'Indore, India',
    skills: 'React, Node.js, Express, MongoDB, Bootstrap',
    experience: 'Developed a secure file encryption app.\nCreated a car rental system using MERN stack.',
    education: 'B.Tech in Computer Science (2025)'
  });

  const [template, setTemplate] = useState('modern');

  // Input Handler
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Print Handler
  const componentRef = useRef();
const handlePrint = useReactToPrint({
    contentRef: componentRef, // 👈 KEY FIX: Use 'contentRef' instead of 'content'
    documentTitle: `${data.name}_Resume`,
    onAfterPrint: () => console.log("Printed successfully!"),
  });


  // 2. The Button Function (Debug Version)
  const downloadPdf = () => {
      console.log("Button Clicked!"); 
      
      if (!componentRef.current) {
          alert("Error: The Resume component is not loaded yet.");
          return;
      }
      
      handlePrint(); // Trigger the print
  };

  return (
    <main className='heading'>
    <h2 className="editor-title">🚀 Build Your Resume</h2>
    <div className="builder-container">
     
      {/* 👈 Left Side: Dark Theme Editor */}
      <div className="editor-panel">
        
        <div className="input-group">
            <label>Choose Design</label>
            <select className="dark-select" value={template} onChange={(e) => setTemplate(e.target.value)}>
                <option value="modern">🔹 Modern Blue</option>
                <option value="minimal">📜 Classic Minimal</option>
            </select>
        </div>

        <div className="input-group">
            <label>Full Name</label>
            <input name="name" className="dark-input" value={data.name} onChange={handleChange} />
        </div>
        <div className="input-group">
            <label>Current Role</label>
            <input name="role" className="dark-input" value={data.role} onChange={handleChange} />
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div className="input-group">
                <label>Email</label>
                <input name="email" className="dark-input" value={data.email} onChange={handleChange} />
            </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div className="input-group">
                <label>Phone</label>
                <input name="phone" className="dark-input" value={data.phone} onChange={handleChange} />
            </div>
        </div>
        <div className="input-group">
            <label>Skills (comma separated)</label>
            <input name="skills" className="dark-input" value={data.skills} onChange={handleChange} />
        </div>

        <div className="input-group">
            <label>Experience</label>
            <textarea name="experience" className="dark-textarea" rows="5" value={data.experience} onChange={handleChange} />
        </div>

        <div className="input-group">
            <label>Education</label>
            <textarea name="education" className="dark-textarea" rows="3" value={data.education} onChange={handleChange} />
        </div>

        <button type="button" onClick={downloadPdf} className="btn-download">
      🖨️ Download PDF
  </button>
      </div>

      {/* 👉 Right Side: Live Preview on Paper */}
      <div className="previewDiv">
        <div className="preview-panel">
          {/* Ensure the 'ref={componentRef}' is EXACTLY here on the A4 div */}
<div ref={componentRef} className="a4-page">
    {template === 'modern' ? <ModernTemplate data={data} /> : <MinimalTemplate data={data} />}
</div>
        </div>
      </div>

    </div>
    </main>
  );
};

export default ResumeBuilder;