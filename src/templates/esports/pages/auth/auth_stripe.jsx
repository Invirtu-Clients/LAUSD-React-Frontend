import { Component, Fragment } from "react";
import timeouts from "../../../../constants/timeouts";
import Alerts from "../../../../util/Alerts";
import Navigate from "../../../../util/Navigate";
import Requests from "../../../../util/Requests";
import Response from "../../../../util/Response";
import Session from "../../../../util/Session";
import Storage from "../../../../util/Storage";
import withRouter from "../../../../util/withRouter";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";

const title = "Connect With Stripe";

class AuthStripe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: {}
        };
    }

    componentDidMount() {

        /**
         * If a user uses this as OAuth where they previously where not logged in,
         * we are going to exchange the one time token for a JWT and then consider them
         * logged into the website.
         */
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });

        let token = params.loginToken;

        if (token) {

            Requests.authOneTimeLogin({ token: token }).then(response => {
                Storage.setAuthToken(response.data.token.access_token);
                Storage.set('user_id', response.data.id);

                this.props.router.navigate(Navigate.accountMainPage());
            }).catch(error => {
                console.log(error);
            });

        }
    }

    authenticate(event) {

        event.preventDefault();

        let redirect = process.env.REACT_APP_OAUTH_STRIPE_URL;

        if (Session.isLoggedIn()) {

            Requests.userOneTimeToken().then((response) => {

                if (response.data.one_time_login_token) {
                    redirect += '?token=' + response.data.one_time_login_token;
                }

                window.location = redirect;

            }).catch((error) => {

                let jsonErrors = Response.parseJSONFromError(error);

                if (jsonErrors) {
                    this.setState({ errors: jsonErrors });

                    setTimeout(() => {
                        this.setState({ errors: {} });
                    }, timeouts.error_message_timeout)
                }
            });
        } else {
            Alerts.display("Login Required", "You must be logged in to connect with Stripe.")
        }

    }

    render() {
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Connect With Stripe'} curPage={'Payments'} />
                <div className="login-section padding-top padding-bottom">
                    <div className=" container">
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            <form className="account-form">

                                <p>Connect with Stripe in order to receive payments and donations.</p>
                                <div className="form-group">
                                    <button className="d-block default-button" onClick={(e => { this.authenticate(e) })}><span>Authenticate</span></button>
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

export default withRouter(AuthStripe);