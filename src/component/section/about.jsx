import { Component } from "react";


const subtitle = "Our Goal";
const title = "Esports The Way You Envision";
const desc = "Use an open-source gaming platform that you can customize, tweak and brand to create the esports you deserve.";


let AboutListContent = [
    {
        imgUrl: '/assets/images/about/icon-1.png',
        imgAlt: 'Restream To Twitch, Youtube, and Facebook',
        title: 'Restream To Twitch, Youtube, and Facebook',
        desc: 'Grow your audience by restreaming automatically on Glitch, Facebook, Youtube, and Twitch simultaneously.',
    },
    {
        imgUrl: '/assets/images/about/icon-2.png',
        imgAlt: 'No-Code Your Own Experience',
        title: 'No-Code Your Own Experience',
        desc: 'Use Invirtu\'s No-Code Tool to create fully custom experiences for yourself, your fans, and your sponsors.',
    },
    {
        imgUrl: '/assets/images/about/icon-3.png',
        imgAlt: 'About Icon',
        title: 'Make Own Your Rules and Control Monetization',
        desc: 'Decide on your own rules for yourself and users, and create monetization strategies best work with your approach to esports.',
    },
]



class AboutSection extends Component {
    render() { 
        const {imgUrl} = this.props;
        return (
            <section className="about-section">
                <div className="container">
                    <div className="section-wrapper padding-top">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-image">
                                    <img src={imgUrl} alt="about-image" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10">
                                <div className="about-wrapper">
                                    <div className="section-header">
                                        <p>{subtitle}</p>
                                        <h2>{title}</h2>
                                    </div>
                                    <div className="about-content">
                                        <p>{desc}</p>
                                        <ul className="about-list">
                                            {AboutListContent.map((val, i) => (
                                                <li className="about-item d-flex flex-wrap" key={i}>
                                                    <div className="about-item-thumb">
                                                        <img 
                                                            src={`${val.imgUrl}`} 
                                                            alt={`${val.imgAlt}`}
                                                        />
                                                    </div>
                                                    <div className="about-item-content">
                                                        <h5>{val.title}</h5>
                                                        <p>{val.desc}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
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
 
export default AboutSection;