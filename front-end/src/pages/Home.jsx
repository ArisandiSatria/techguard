import React from "react";

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <img src="images/techguard-logo.jpg" alt="logo" />
        <div className="hero-content">
          <h2>WELCOME TO OUR SITE!</h2>
          <p>
            Tech guard provides services in the fields of Fingerprint Absence
            Machinery,Face Recognition, Access Door Control, CCTV with best
            quality products and affordable prices.
          </p>
          <h3>CHECK OUR PRODUCT NOW!</h3>
        </div>
      </div>

      {/* Featurs Section */}
      <div className="features">
        <div>
          <img src="images/feature-1.jpg" alt="" />
          <div>
            <h3>BEST QUALITY</h3>
            <p>Providing high-quality products with the latest technology.</p>
          </div>
        </div>
        <div>
          <img src="images/feature-2.jpg" alt="" />
          <div>
            <h3>BEST PRICE</h3>
            <p>
              Offering products at competitive and affordable prices while
              keeping the highest quality at the forefront
            </p>
          </div>
        </div>
        <div>
          <img src="images/feature-3.jpg" alt="" />
          <div>
            <h3>WARRANTY</h3>
            <p>
              Providing product warranty and installation services to improve
              consumer satisfaction
            </p>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="product">
        <h3>OUR PRODUCT</h3>
        <div className="product-sample">
          <div>
            <h4>FINGERPRINT ATTENDANCE</h4>
            <img src="images/product-1.jpg" alt="" />
            <p>
              TECHGUARD provides services for Installation of Fingerprint
              Absence Machines. It serves to digitally record the absence of
              workers through fingerprint identification, making it easier and
              safer. Get the best product and fingerprint price here.
            </p>
          </div>
          <div>
            <h4>FACE RECOGNITION</h4>
            <img src="images/product-2.jpg" alt="" />
            <p>
              TECHGUARD provides services for the installation of a Face Absence
              Machine that functions to digitally record the absence of workers
              through facial identification so that it is easier and safer.
            </p>
          </div>
          <div>
            <h4>ACCESS DOOR CONTROL</h4>
            <img src="images/product-3.jpg" alt="" />
            <p>
              TECHGUARD provides services for Access Door Installation. Access
              Door function is to restrict access to a room that has privacy or
              requires sophisticated security so that not everyone can access
              the room. Get the best access door products and prices here
            </p>
          </div>
          <div>
            <h4>CCTV</h4>
            <img src="images/product-4.jpg" alt="" />
            <p>
              TECHGUARD offers CCTV installation services for enhanced security
              and remote monitoring in homes, offices, residences, and
              businesses. They provide competitively priced packages with
              high-quality solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
