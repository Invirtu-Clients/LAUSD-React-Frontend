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
                                        <h3>Increase Revenue By Leveraging The Live Streams</h3>
                                        <br />
                                        <p>The built in-streams are entirely customizable to tie into your fan engagement and revenue model.</p>

                                        <ul className="indent small">
                                            <li><h5><small>On-Screen Donations</small></h5></li>
                                            <li><h5><small>In-App Purchases</small></h5></li>
                                            <li><h5><small>Banner Ads</small></h5></li>
                                            <li><h5><small>Video Pre-Roll, Mid-Roll, Post-Roll</small></h5></li>
                                            <li><h5><small>Live Shopping & Merchandising</small></h5></li>
                                            <li><h5><small>Interactive Ads</small></h5></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container padding-bottom" key={'key3'}>
                    <div className="section-wrapper">
                        <div className="row g-4 justify-content-center"></div>
                        <div className="col-12">
                            <div className="blog-item-1">
                                <div className="blog-inner d-flex flex-wrap align-items-center">
                                    
                                    <div className="blog-content p-4 w-xl-50 w-100">
                                        <h3>Drive User Acquistion With User-Generated Content</h3>
                                        <br />
                                        <p>Every stream can extend the reach of your community to non-gamers who like to watch. Engage with these viewers through several features such as:</p>

                                        <ul className="indent small">
                                            <li><h5><small>Ticketing For Single Events & Tournaments</small></h5></li>
                                            <li><h5><small>Multiple Payment Systems such as Stripe & FlutterWave</small></h5></li>
                                            <li><h5><small>Team Management</small></h5></li>
                                            <li><h5><small>Following Users</small></h5></li>
                                            <li><h5><small>Social Interactions On All Content</small></h5></li>
                                            <li><h5><small>Messenging Between Users</small></h5></li>
                                            <li><h5><small>Live Chat</small></h5></li>
                                        </ul>

                                    </div>
                                    <div className="blog-thumb w-xl-50 w-100">
                                        
                                            <img src={`assets/images/blog/glitch_growth.jpg`} alt={`Earn Donations`} className="w-100" />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                                <span className="right">{"Invite Co-hosts & Producers"}</span>
                            </li>

                        </ul>
                    </div>
                </div>




                <CtaSection imgUrl={'assets/images/cta/02.png'} />



              

                <Footer />
            </Fragment>
        );
    }
}

export default HomeTwo;