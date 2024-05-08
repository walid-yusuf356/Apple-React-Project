import React from "react";

function SectionThree() {
  return (
    <div>
      {/* <!-- Third section starts here --> */}
      <section className="third-hightlight-wrapper">
        <div className="container">
          <div className="title-wrapper bold">iPhone 11 Pro</div>

          <div className="description-wrapper">
            Pro cameras. Pro display. Pro performance.
          </div>

          <div className="price-wrapper">
            From $24.95/mo. or $599 with trade‑in.
          </div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="/">
                  Learn more 
                </a>
              </li>
              <li>
                <a href="/">
                  Buy 
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- Third section ends here --> */}
    </div>
  );
}

export default SectionThree;
