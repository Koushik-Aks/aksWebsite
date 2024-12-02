import React from 'react';

import SubBreadcrumb from './data/breadcumb';

const WebApplicationSecurityTesting = () => {
  return (
    <>
      <SubBreadcrumb />
      <div style={{
        position: 'relative',  // Make the container relative to position the image
        textAlign: 'left',     // Align text to the left
        padding: '20px 20px 20px 250px',  // Remove left padding to shift content to the left
        maxWidth: '1200px',    // Limit the width
        margin: '0',           // Remove auto margin for full left alignment
      }}>
        <p>
        In Application Security Audit, we provide security assessment for your website where we analyze your website/application for any weaknesses, technical flaws, or vulnerabilities, evaluate the security of your application by simulating various application attacks and provide audit report which includes key findings, related issues and suggest a recommendation checklist to maximize security of your application.
        </p>
        <h1>How it works?</h1>
        <p>
          An application security assessment looks at your application and reports on weaknesses found. Contrary to penetration tests,
          here the ultimate goal is not to penetrate the application, but to report on vulnerabilities found. Our approach is:
        </p>
        <ul>
          <li><strong>Business Driven:</strong> vulnerabilities are investigated, documented and reported according to the potential damage that may arise if they are exploited.</li>
          <li><strong>Manual Driven:</strong> a skilled and experienced consultant will assess the security of your critical application.</li>
        </ul>
        <p>
          Our methodology is based on the Open Web Application Security Project (OWASP) testing guide for tests on the (web) application level.
          We use a mixture of automated scans using open source as well as commercial tools, followed by a verification and deeper probing
          of the application by a highly skilled consultant.
        </p>
        <h2>Web Application Security Testing includes:</h2>
        <ul style={{ paddingLeft: '0', textAlign: 'left' }}>
          <li>• Information Gathering</li>
          <li>• Configuration and Deployment Management Testing</li>
          <li>• Identity Management Testing</li>
          <li>• Authentication Testing</li>
          <li>• Authorization Testing</li>
          <li>• Session Management Testing</li>
          <li>• Input Validation Testing</li>
          <li>• Testing for Error Handling</li>
          <li>• Testing of Weak Cryptography</li>
          <li>• Business Logic Testing</li>
          <li>• Client-side Testing</li>
          <li>• API Testing</li>
        </ul>
        {/* <img src="your-image-url.jpg" alt="Security Testing" style={{
          position: 'absolute', // Position the image absolutely within the container
          right: '0',           // Align the image to the extreme right
          top: '50%',           // Vertically center the image
          transform: 'translateY(-50%)', // Center the image by adjusting it upwards
          maxWidth: '300px',    // Limit the image width if necessary
          height: 'auto',   
        }} /> */}
      </div>
    </>
  );
};

export default WebApplicationSecurityTesting;
