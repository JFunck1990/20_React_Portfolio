import React from "react";
import Footer from "./Footer"
import "../styles/Resume.css"

function Resume() {
  return (
   <div className="back">
    <main className="container" >
      <h1>Resume:</h1>

      <section>
        <iframe
          title="Resume"
          src="https://docs.google.com/document/d/1JqB0NXbOrrVYbs7IU_hScyhhU8HGOIUDhtAbGMJDVgE/preview"
          type="application/pdf"
          width="100%"
          height="600px"
        ></iframe>
      </section>
    </main>
    <Footer></Footer>
   </div>
  );
}

export default Resume;
