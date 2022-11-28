import { Component, Fragment } from "react";



import Footer from "../../component/layout/footer";
import HeaderTwo from "../../component/layout/headertwo";
import BannerTwo from '../../component/section/bannertwo';
import CollectionSectionTwo from '../../component/section/collectiontwo';
import AboutSection from "../../component/section/about";
import MatchSectionTwo from '../../component/section/matchtwo';
import PlayerSectionTwo from '../../component/section/playertwo';
import CtaSection from '../../component/section/cta';
import VideoSectionTwo from '../../component/section/videotwo';
import ProductSection from '../../component/section/product';
import HrShape from '../../component/layout/hrshape';
import SponsorSection from '../../component/section/sponsor';
import BlogSection from '../../component/section/blog';
import TestimonialSection from '../../component/section/testimonial';
import { Link } from "react-router-dom";

class HomeTwo extends Component {
    render() {
        return (
            <Fragment>
                <HeaderTwo />
                <BannerTwo />

                <AboutSection imgUrl={'assets/images/about/02.png'} />


                <CtaSection imgUrl={'assets/images/cta/02.png'} />


                <div className="about-team  padding-bottom padding-top-2" key={'key1'}>
                    <div className="container">
                        <div className="section-header">
                            <p>High Quality Streaming With</p>
                            <h2 className="mb-3">Up To 120 FPS Recording and Broadcasting!</h2>
                            <p className="desc">Stream and record your games from your desktop with up to 120 FPS to capture every moment in vivid detail. Also, use our other online streaming features.</p>
                        </div>
                        <ul className="d-flex flex-wrap justify-content-center player-meta mb-0">

                            <li className="d-flex align-items-center" key={1}>
                                <span className="left me-3"><i className={"icofont-medal"}></i></span>
                                <span className="right">{"Custom Overlays"}</span>
                            </li>

                            <li className="d-flex align-items-center" key={2}>
                                <span className="left me-3"><i className={"icofont-signal"}></i></span>
                                <span className="right">{"On-Screen Messenging"}</span>
                            </li>

                            <li className="d-flex align-items-center" key={3}>
                                <span className="left me-3"><i className={"icofont-workers-group"}></i></span>
                                <span className="right">{"Add Your Own Branding"}</span>
                            </li>

                        </ul>
                    </div>
                </div>


                <div className="container padding-bottom" key={'key2'}>
                    <div className="section-wrapper">
                        <div className="row g-4 justify-content-center"></div>
                        <div className="col-12">
                            <div className="blog-item">
                                <div className="blog-inner d-flex flex-wrap align-items-center">
                                    <div className="blog-thumb w-xl-50 w-100">
                                        
                                            <img src={`assets/images/blog/03.jpg`} alt={`Earn Donations`} className="w-100" />
                                        
                                    </div>
                                    <div className="blog-content p-4 w-xl-50 w-100">
                                        <h3>On-Screen Donations</h3>

                                        <p>Get paid by asking your fans for on-screen donations that can be deposited directly into your bank account.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </Fragment>
        );
    }
}

export default HomeTwo;