import React from "react";

const IconBoxes = () => {
  return (
    <div className="icon_boxes" style={{marginTop:"80px",marginBottom:"80px",padding:"80px 80px 80px 80px",backgroundColor:"cream",borderTop: "1px solid #ccc", borderBottom: "1px solid #ccc"}}>
      <div className="container">
        <div className="row icon_box_row justify-content-center">
          <div className="col-lg-4 icon_box_col d-flex justify-content-center">
            <div className="icon_box text-center">
              <div className="icon_box_image d-flex justify-content-center">
                <img
                  src="https://preview.colorlib.com/theme/sublime/images/icon_1.svg"
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <div className="icon_box_title"><p style={{fontWeight:"600",marginTop:"8px"}}>Free Shipping Worldwide</p></div>
              <div className="icon_box_text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam a ultricies metus. Sed nec molestie.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 icon_box_col d-flex justify-content-center">
            <div className="icon_box text-center">
              <div className="icon_box_image d-flex justify-content-center">
                <img
                  src="https://preview.colorlib.com/theme/sublime/images/icon_2.svg"
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <div className="icon_box_title"><p style={{fontWeight:"600",marginTop:"8px"}}>Free Returns</p></div>
              <div className="icon_box_text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam a ultricies metus. Sed nec molestie.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 icon_box_col d-flex justify-content-center">
            <div className="icon_box text-center">
              <div className="icon_box_image d-flex justify-content-center">
                <img
                  src="https://preview.colorlib.com/theme/sublime/images/icon_3.svg"
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <div className="icon_box_title"><p style={{fontWeight:"600",marginTop:"8px"}}>24h Fast Support</p></div>
              <div className="icon_box_text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam a ultricies metus. Sed nec molestie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconBoxes;
