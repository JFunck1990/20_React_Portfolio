import React from "react";
import Footer from "./Footer"

function Resume() {
  return (
   <div>
    <main class="container">
      <h1>Resume:</h1>

      <section>
        <iframe
          title="Resume"
          src="https://docs.google.com/document/d/1PQSAt-2Cw50LBInbR3KgKoi_GNcnTCX4qb_qsD-BwUU/preview"
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
