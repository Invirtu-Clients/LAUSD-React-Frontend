import { Component } from "react";
import { NavLink, Link } from 'react-router-dom';
import Navigate from "../../util/Navigate";
import Session from "../../util/Session";
import Storage from "../../util/Storage";


let SocialMideaList = []

if(process.env.REACT_APP_SOCIAL_FACEBOOK_PAGE) {
    SocialMideaList.push({
        IconName: 'icofont-facebook',
        IconLink: process.env.REACT_APP_SOCIAL_FACEBOOK_PAGE,
    });
}

if(process.env.REACT_APP_SOCIAL_INSTAGRAM_PAGE) {
    SocialMideaList.push({
        IconName: 'icofont-instagram',
        IconLink: process.env.REACT_APP_SOCIAL_INSTAGRAM_PAGE,
    });
}

if(process.env.REACT_APP_SOCIAL_GITHUB_PAGE) {
    SocialMideaList.push({
        IconName: 'icofont-github',
        IconLink: process.env.REACT_APP_SOCIAL_GITHUB_PAGE,
    });
}

if(process.env.REACT_APP_SOCIAL_TWITTER_PAGE) {
    SocialMideaList.push({
        IconName: 'icofont-twitter',
        IconLink: process.env.REACT_APP_SOCIAL_TWITTER_PAGE,
    });
}

if(process.env.REACT_APP_SOCIAL_YOUTUBE_PAGE) {
    SocialMideaList.push({
        IconName: 'icofont-youtube',
        IconLink: process.env.REACT_APP_SOCIAL_YOUTUBE_PAGE,
    });
}

class HeaderTwo extends Component {
    
    render() { 

        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 200) {
                document.querySelector('.header-section').classList.add(['header-fixed'], ['fadeInUp'])
            }else{
                document.querySelector('.header-section').classList.remove(['header-fixed'], ['fadeInUp'])
            }
        });

        let loginOrAccount = '';

        if(Session.isLoggedIn()) {
            loginOrAccount = (<>
                <Link to="/login" className="login"><i className="icofont-user"></i> <span>Account</span> </Link>
                <Link to="/signup" className="signup"><i className="icofont-users"></i> <span>Logout</span></Link>

            </>);
        } else {
            loginOrAccount = (<>
                <Link to={Navigate.authLogin()} className="login"><i className="icofont-user"></i> <span>LOG IN</span> </Link>
                <Link to={Navigate.authRegister()} className="signup"><i className="icofont-users"></i> <span>SIGN UP</span></Link>
            </>);
        }

        return (
            <header className="header-section style2">
                <div className="container">
                    <div className="header-holder">
                        <div className="header-menu-part">
                            <div className="header-top">
                                <div className="header-top-area">
                                    
                                    <ul className="social-icons d-flex align-items-center">
                                        {SocialMideaList.map((val, i) => (
                                            <li key={i}>
                                                <a href={`${val.IconLink}`} className="fb"><i className={`${val.IconName}`}></i></a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="header-bottom d-flex flex-wrap justify-content-between align-items-center">
                                <div className="brand-logo d-none d-lg-inline-block">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src="/assets/images/logo/glitch_3.png" width="150x" alt="logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="header-wrapper justify-content-lg-end">
                                    <div className="mobile-logo d-lg-none">
                                        <Link to="/"><img src="/assets/images/logo/glitch_3.png" alt="logo" /></Link>
                                    </div>
                                    <div className="menu-area">
                                        <ul className="menu">
                                            <li >
                                                <a href={Navigate.homePage()} >Home</a>
                                            </li>

                                            <li >
                                                <a href={Navigate.streamsPage()} >Streams</a>
                                            </li>

                                            <li >
                                                <a href={Navigate.usersList()} >Users</a>
                                            </li>

                                            <li className="menu-item-has-children">
                                                <a href={Navigate.streamsCreatePage()} aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Start Streaming</a>
                                            </li>
                                        </ul>

                                        {loginOrAccount}

                                        <div className="header-bar d-lg-none" onClick={this.menuTrigger}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div className="ellepsis-bar d-lg-none" onClick={this.menuTriggerTwo}>
                                            <i className="icofont-info-square"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
 
export default HeaderTwo;