import { Component } from "react";
import { Link } from "react-router-dom";


const title = <h2 className="mb-3"><span className="theme-color text-uppercase">CODERS AND DEVELOPERS</span> CONTRIBUTE TO THE PLATFORM TODAY!</h2>;

const subtitle = "Let's Buid together";

const desc = 'The platform has a lot of potential to be a game-changer for esports influencers, fans, and organizations. Be part of the movement by helping us code on Github.';

const btnText = 'View On Github';



class CtaSection extends Component {
    render() { 
        const {imgUrl} = this.props;
        return (
            <section className="cta-section padding-bottom">
                <div className="container">
                    <div className="cta-wrapper item-layer">
                        <div className="cta-item px-4 px-sm-5 pt-4 pt-sm-5 pt-lg-0" style={{backgroundImage: "url(/assets/images/cta/bg.jpg)"}}>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta-content">
                                        <p className="theme-color text-uppercase ls-2">{subtitle}</p>
                                        {title}
                                        <p className="mb-4">{desc}</p>
                                        <a target="_blank" href="https://github.com/orgs/Glitch-Gaming-Platform" className="default-button"><span>{btnText} <i className="icofont-circled-right"></i></span></a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cta-thumb text-end">
                                        <img src={imgUrl} alt="gamer-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default CtaSection;