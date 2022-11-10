import { Component } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper } from "swiper/react";
import Requests from "../../util/Requests";
import Danger from "../alerts/Danger";

const Name = "Rajib Ahmed";
const desc = "Competently conceptualize alternative synergy and technically and niche markets. Efficiently impact technically sound outsourcing rath tnclicks-and-mortar best practices.";



class ProfileUpdateHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            username : '',
            errors : {}
        };

    }

    componentDidMount() {
       
        this.setState({
            first_name: this.props.user.first_name,
            last_name: this.props.user.last_name,
            email: this.props.user.email,
            username: this.props.user.username,
           
        });
    }

    updateAccount(event) {
        event.preventDefault();

        let data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            username: this.state.username,
        };

        Requests.updateAccount(data).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }

    render() {

        let user = this.props.user;

        return (
            <div className="product-details">
                <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                        <div className="product-thumb">
                            <div className="swiper-container pro-single-top">
                                <div className="single-thumb">
                                    <img src={"https://picsum.photos/200"} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="post-content">
                            <h4>{user.first_name} {user.last_name}</h4>

                            <div className="no-wrapper">
                                <h3 className="title">Update Your Account</h3>
                                <form className="account-form">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={this.state.first_name}
                                            onChange={(e) => { this.setState({ first_name: e.target.value }); }}
                                            placeholder="First Name *"
                                        />
                                        {this.state.errors && this.state.errors.first_name && this.state.errors.first_name.map(function (name, index) {
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item02"
                                            value={this.state.last_name}
                                            onChange={(e) => { this.setState({ last_name: e.target.value }); }}
                                            placeholder="Last Name *"
                                        />
                                        {this.state.errors && this.state.errors.last_name && this.state.errors.last_name.map(function (name, index) {
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item02"
                                            value={this.state.username}
                                            onChange={(e) => { this.setState({ username: e.target.value }); }}
                                            placeholder="Username *"
                                        />
                                        {this.state.errors && this.state.errors.username && this.state.errors.username.map(function (name, index) {
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item03"
                                            value={this.state.email}
                                            onChange={(e) => { this.setState({ email: e.target.value }); }}
                                            placeholder="Your email *"
                                        />
                                        {this.state.errors && this.state.errors.email && this.state.errors.email.map(function (name, index) {
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>

                                    <div className="form-group">
                                        <button className="d-block default-button" onClick={(e => { this.updateAccount(e) })}><span>Update Account</span></button>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileUpdateHeader;