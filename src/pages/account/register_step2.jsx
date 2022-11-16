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

const title = "Login";

class RegisterStep2 extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            errors : []
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

            Session.processAuthentication(response.data);

            this.props.router.navigate(Navigate.streamsPage());
        }).catch((error) => {

            this.setState({errors : ['Invalid username and password']});

            setTimeout(() =>{
                this.setState({errors : []});
            }, timeouts.error_message_timeout)
        });

    }
    
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Update Profile'} curPage={'Profile'} />
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
                                
                                
                                {this.state.errors &&  this.state.errors.map(function(name, index){
                                        return <Danger message={name} key={index} />;
                                })}
                                <div className="form-group">
                                    <button type="button" className="d-block default-button" onClick={(e => {this.login(e)})}><span>Login</span></button>
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
 
export default withRouter(RegisterStep2);