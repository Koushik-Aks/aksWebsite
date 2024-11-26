export default function ContactInfo1() {
  return (
    <>
      <section className="pt-0">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-6">
              <div className="position-relative mt40">
                <div className="main-title">
                  <h4 className="form-title mb25">Keep In Touch With Us.</h4>
                  <p className="text">
                    We'd love to hear from you.
                  </p>
                </div>
                {/* Registered Office and Head Office side by side */}
                <div className="row mb30">
                  <div className="col-md-6">
                    <div className="iconbox-style1 contact-style d-flex align-items-start">
                      <div className="icon flex-shrink-0">
                        <span className="flaticon-tracking" />
                      </div>
                      <div className="details">
                        <h5 className="title">Registered Office</h5>
                        <p className="mb-0 text">
                          22-A, Asaf Ali Road, <br /> Delhi - 110032
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox-style1 contact-style d-flex align-items-start">
                      <div className="icon flex-shrink-0">
                        <span className="flaticon-tracking" />
                      </div>
                      <div className="details">
                        <h5 className="title">Head Office</h5>
                        <p className="mb-0 text">
                          B-21, Sector - 59, NOIDA, <br /> Uttar Pradesh, India - 201309
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb30">
                  <h4 className="title">Our Branches</h4>
                </div>
                {/* Our Branches in two rows */}
                <div className="iconbox-style1 contact-style d-flex flex-wrap mb30">
                  <div className="col-md-6 mb20">
                    <div className="iconbox-style1 contact-style d-flex align-items-start">
                      <div className="icon flex-shrink-0">
                        <span className="flaticon-tracking" />
                      </div>
                      <div className="details">
                        <h5 className="title">Mumbai</h5>
                        <p className="mb-0 text">
                          Arihant Aura, 6th Floor, Tower B, Thane Belapur Road, Navi Mumbai, Maharashtra - 400705
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb20">
                    <div className="iconbox-style1 contact-style d-flex align-items-start">
                      <div className="icon flex-shrink-0">
                        <span className="flaticon-tracking" />
                      </div>
                      <div className="details">
                        <h5 className="title">Hyderabad</h5>
                        <p className="mb-0 text">
                          6A, Venkata Sai Nagar, Boduppal Municipality, Hyderabad, Telangana - 500072
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb20">
                    <div className="iconbox-style1 contact-style d-flex align-items-start">
                      <div className="icon flex-shrink-0">
                        <span className="flaticon-tracking" />
                      </div>
                      <div className="details">
                        <h5 className="title">Chennai</h5>
                        <p className="mb-0 text">
                          Mena Kampala Arcade Sir Thyagaraya Road, Parthasarathi Puram, T Nagar, Chennai, Tamil Nadu - 600017
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb20">
                    <div className="iconbox-style1 contact-style d-flex align-items-start">
                      <div className="icon flex-shrink-0">
                        <span className="flaticon-tracking" />
                      </div>
                      <div className="details">
                        <h5 className="title">Bangalore</h5>
                        <p className="mb-0 text">
                          A2, No 9. 12th Cross, 10th Main Nisarga Colony, Horamavu, Bangalore - 560049
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Contact Information side by side */}
                <div className="row">
                  <div className="col-md-6">
                  <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                      <div className="icon flex-shrink-0">
                        <span className="flaticon-call" />
                      </div>
                      <div className="details">
                        <h5 className="title">Phone</h5>
                        <p className="mb-0 text">+91 120 4545 911</p>
                      </div>
                    </div>
                    <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                      <div className="icon flex-shrink-0">
                        <span className="flaticon-mail" />
                      </div>
                      <div className="details">
                        <h5 className="title">Email</h5>
                        <p className="mb-0 text">info[at]aksitservices[dot]co[dot]in</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                      <div className="icon flex-shrink-0">
                        <span className="flaticon-call" />
                      </div>
                      <div className="details">
                        <h5 className="title">Fax</h5>
                        <p className="mb-0 text">+91 120 1234 5678</p>
                      </div>
                    </div>
                    <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                      <div className="icon flex-shrink-0">
                        <span className="flaticon-call" />
                      </div>
                      <div className="details">
                        <h5 className="title">Toll-free</h5>
                        <p className="mb-0 text">1800-120-2394</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-page-form default-box-shadow1 bdrs8 bdr1 p50 mb30-md bgc-white" style={{ minHeight: "600px" }}>
                <h4 className="form-title mb25">Tell us about yourself</h4>
                <p className="text mb30">
                  Whether you have questions or you would just like to say hello, contact us.
                </p>
                <form className="form-style1">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb20">
                        <label className="heading-color ff-heading fw500 mb10">Name</label>
                        <input type="text" className="form-control" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb20">
                        <label className="heading-color ff-heading fw500 mb10">Email</label>
                        <input type="email" className="form-control" placeholder="Enter Email" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb20">
                        <label className="heading-color ff-heading fw500 mb10">Messages</label>
                        <textarea cols={30} rows={6} placeholder="Description" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div>
                        <button type="button" className="ud-btn btn-thm">
                          Send Messages
                          <i className="fal fa-arrow-right-long" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}