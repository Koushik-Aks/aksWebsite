import React from 'react';
import SubBreadcrumb1 from './data/breadcumb';

const MobileApplicationSecurityTesting = () => {
  return (
    <>
      <SubBreadcrumb1 />
      <div style={{
        position: 'relative',
        textAlign: 'left',
        padding: '20px 20px 20px 250px',
        maxWidth: '1200px',
        margin: '0',
      }}>
         <p>
         In Application Security Audit, we provide security assessment for your <strong>mobile application</strong> where we analyze your application for any weaknesses, technical flaws, or vulnerabilities, evaluate the security of your application by simulating various application attacks and provide audit report which includes key findings, related issues and suggest a recommendation checklist to maximize security of your application.
        </p>
        <h2>How it works?</h2>
        <p>
          Internet access over mobile phones is increasing at a rapid pace. In May 2012, Indian users accessing the internet over mobile devices surpassed those accessing the internet over desktops and laptops (Source: Global StatsCounter). As a result, most companies are developing mobile-based applications as an avenue of interaction with their new-age consumers.
        </p>
        <p>
          Mobile App Security Testing service provides a detailed security analysis of your phone or tablet-based app. A key feature of this service is manual testing by experienced security professionals, which typically uncovers many more issues than automated tests alone. This includes Static Application Security Testing (SAST) & Dynamic Application Security Testing (DAST).
        </p>

        <h2>What is SAST?</h2>
        <p>
          Static analysis checks the source code of the mobile app to ensure security protections are implemented properly. A combination of automatic/manual techniques is typically utilized. Automatic scans identify the easy targets, allowing the human tester to explore the codebase while keeping in mind certain use circumstances.
        </p>

        <h2>What is DAST?</h2>
        <p>
          DAST is focused on testing and assessing apps while they are being used in real-time. Finding vulnerabilities or weak points in a program while it is operating is the major goal of dynamic analysis. The request and response patterns of the mobile app may be examined via dynamic analysis, which is done against the backend services and APIs as well as the mobile platform layer. In order to determine if security measures offer enough defense against the most common forms of attack, including data leakage while in transit, authentication and authorization problems, and server configuration faults, dynamic analysis is typically performed.
        </p>

        <h2>Android Application Testing Guide</h2>
        <ul style={{ paddingLeft: '0', textAlign: 'left' }}>
          <li>• Data Storage on Android</li>
          <li>• Android Cryptographic APIs</li>
          <li>• Client Code Quality and Build Settings for Android Apps</li>
          <li>• Tampering and Reverse Engineering on Android</li>
          <li>• Android Anti-Reversing Defenses</li>
        </ul>

        <h2>iOS Application Testing Guide</h2>
        <ul style={{ paddingLeft: '0', textAlign: 'left' }}>
          <li>• Data Storage on iOS</li>
          <li>• iOS Cryptographic APIs</li>
          <li>• Local Authentication on iOS</li>
          <li>• iOS Network APIs</li>
          <li>• Code Quality and Build Settings for iOS Apps</li>
          <li>• Tampering and Reverse Engineering on iOS</li>
          <li>• iOS Anti-Reversing Defenses</li>
        </ul>

        <p>
          A final written report provides an analysis of any security or service problems discovered together with proposed solutions, links to detailed advisories, and recommendations for improving the security of both the app and the web services it uses.
        </p>
      </div>
    </>
  );
};

export default MobileApplicationSecurityTesting;
