import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Danger from "../../component/alerts/Danger";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import SocialMedia from "../../component/section/socialmedia";
import timeouts from "../../constants/timeouts";
import Navigate from "../../util/Navigate";
import Requests from "../../util/Requests";
import Response from "../../util/Response";
import Session from "../../util/Session";
import Storage from "../../util/Storage";
import withRouter from "../../util/withRouter";

const title = "Forgot Password";

class ForgotPassword extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            errors : {}
        };
        console.log("I am here");
    }

    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'FORGOT PASSWORD'} curPage={'Forgot Password'} />
                <div className="login-section padding-top padding-bottom">
                    <div className=" container">
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            <form className="account-form">
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
                                {this.state.errors &&  this.state.errors.map(function(name, index){
                                        return <Danger message={name} key={index} />;
                                })}
                                <div className="form-group">
                                    <button type="button" className="d-block default-button" onClick={(e => {this.login(e)})}><span>Login</span></button>
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password"
                                        name="conpassword"
                                        id="item03"
                                        value={this.state.confirm_password}
                                        onChange={(e)=>{this.setState({confirm_password: e.target.value});}}
                                        placeholder="Confirm Password *"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default withRouter(ForgotPassword);