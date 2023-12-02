import React from "react";
import "./footer.css";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
// import { TbLocationShare } from "react-icons/tb"; // Correct import path
function Footer() {
    return (
        <>
            <div className="container1">
                <div className="container_context">
                    <h1 className="container_context_heading">
                        You're Still here!
                    </h1>
                    <p className="container_context_para">
                        Don't let your app idea go the way of the
                        <br />
                        dinosaurs.Get Started now.
                    </p>
                </div>
                <div className="container_text">
                    <div>See Pricing</div>
                </div>
            </div>
            <div>
                <div className="container_heading">
                    <h5>NO CREDIT CARD REQUIRED</h5>
                    <h1>Start using Learning Today</h1>
                    <div className="container_heading_input">
                        <input type="email" placeholder="Your Email" />
                        {/* <TbLocationShare /> */}
                    </div>
                </div>
                <div className="container_heading_footer">
                    <div>
                        <h>FUTURE-X</h>
                        <p>
                            Make the right data driven decisions that move your
                            <br /> bussiness.
                        </p>
                    </div>
                    <div>
                        <div>About</div>
                        <div>Jobs</div>
                        <div>Docs</div>
                    </div>
                    <div>
                        <div>Terms and Conditions</div>
                        <div>Privacy Policy</div>
                        <div>Cookie Policy</div>
                    </div>
                    <div>
                        <div>Lets Chat!</div>
                        <div>hi@gmail.com</div>
                        <div className="icon">
                            <div>
                                <CiFacebook />
                            </div>
                            <div>
                                <CiLinkedin />
                            </div>
                            <div>
                                <AiOutlineInstagram />
                            </div>
                            <div>
                                <CiTwitter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;