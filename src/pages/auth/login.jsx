import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import SocialMedia from "../../component/section/socialmedia";
import timeouts from "../../constants/timeouts";
import Navigate from "../../util/Navigate";
import Requests from "../../util/Requests";
import Response from "../../util/Response";
import Storage from "../../util/Storage";
import withRouter from "../../util/withRouter";

const title = "Login";

class LogIn extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    login(event) {


        event.preventDefault();

        let data = {
            email : this.state.email,
            password : this.state.password,
        };

        Requests.authLogin(data).then((response) => {
            Storage.setAuthToken(response.data.token.access_token);
            Storage.set('user_id', response.data.id);

            this.props.router.navigate(Navigate.streamsPage());
        }).catch((error) => {

            let jsonErrors = Response.parseJSONFromError(error);

            if(jsonErrors) {
                this.setState({errors : jsonErrors});

                setTimeout(() =>{
                    this.setState({errors : {}});
                }, timeouts.error_message_timeout)
            }
        });

    }
    
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'LOGIN FOR GAMING'} curPage={'Login'} />
                <div className="login-section padding-top padding-bottom">
                    <div className=" container">
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            <div className="account-form">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="item01"
                                        value={this.state.email}
                                        onChange={(e)=>{this.setState({email: e.target.value});}}
                                        placeholder="User Name *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        id="item02"
                                        value={this.state.password}
                                        onChange={(e)=>{this.setState({password: e.target.value});}}
                                        placeholder="Password *"
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                        <div className="checkgroup">
                                            <input type="checkbox" name="remember" id="remember" />
                                            <label htmlFor="remember">Remember Me</label>
                                        </div>
                                        <a href="#">Forget Password?</a>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <a href="#" style={{color: "#ff0052"}} className="d-block default-button" onClick={(e => {this.login(e)})}><span>Login</span></a>
                                </div>
                            </div>
                            <div className="account-bottom">
                                <span className="d-block cate pt-10">Don’t Have any Account? <Link to={Navigate.authRegister()}> Sign Up</Link></span>
                                <span className="or"><span>or</span></span>
                                <h5 className="subtitle">Login With Social Media</h5>
                                <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center mt-4">
                                    <SocialMedia />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default withRouter(LogIn);