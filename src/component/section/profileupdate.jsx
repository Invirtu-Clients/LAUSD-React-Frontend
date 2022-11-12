import { Component } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper } from "swiper/react";
import timeouts from "../../constants/timeouts";
import Requests from "../../util/Requests";
import Response from "../../util/Response";
import Danger from "../alerts/Danger";
import ImageUploading from 'react-images-uploading';
import Data from "../../util/Data";

const Name = "Rajib Ahmed";
const desc = "Competently conceptualize alternative synergy and technically and niche markets. Efficiently impact technically sound outsourcing rath tnclicks-and-mortar best practices.";



class ProfileUpdateHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            username: '',
            user : {},
            facebook_handle: '',
            instagram_handle: '',
            paetron_handle: '',
            snapchat_handle: '',
            tiktok_handle: '',
            twitch_handle: '',
            twitter_handle: '',
            youtube_handle: '',
            errors: {},
            images: [],
        };

    }

    componentDidMount() {

        this.setState({
            user : this.props.user
        });
    }

    updateAccount(event) {
        event.preventDefault();

        let data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            username: this.state.username,
            facebook_handle: this.props.user.facebook_handle,
            instagram_handle: this.props.user.instagram_handle,
            paetron_handle: this.props.user.paetron_handle,
            snapchat_handle: this.props.user.snapchat_handle,
            tiktok_handle: this.props.user.tiktok_handle,
            twitch_handle: this.props.user.twitch_handle,
            twitter_handle: this.props.user.twitter_handle,
            youtube_handle: this.props.user.youtube_handle

        };

        Requests.updateAccount(data).then(response => {
            console.log(response);
        }).catch(error => {

            let jsonErrors = Response.parseJSONFromError(error);

            if (jsonErrors) {
                this.setState({ errors: jsonErrors });

                setTimeout(() => {
                    this.setState({ errors: {} });
                }, timeouts.error_message_timeout)
            }
        })
    }

    imageOnChange = (imageList, addUpdateIndex) => {

        this.setState({ images: imageList });
       
    };

    saveImage = (index) => {

        let image = this.state.images[index];

        const blob = Data.dataURItoBlob(image.data_url);

        const formData = new FormData();

        formData.append('image', blob, 'screenshot.png');

        Requests.userUploadAvatar(formData).then(response => {
            this.setState({ user: response.data, images : [] });
        }).catch(error => {
            console.log(error)
        });

    }

    render() {

        return (
            <div className="product-details">
                <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                        <div className="product-thumb">
                            <div className="swiper-container pro-single-top">
                                <div className="single-thumb">
                                    <img src={(this.state.user.avatar) ? this.state.user.avatar : "https://picsum.photos/200"} />
                                </div>

                            </div>
                        </div>

                        <ImageUploading
                            multiple
                            value={this.state.images}
                            onChange={this.imageOnChange}
                            maxNumber={1}
                            dataURLKey="data_url"
                        >
                            {({
                                imageList,
                                onImageUpload,
                                onImageRemoveAll,
                                onImageUpdate,
                                onImageRemove,
                                isDragging,
                                dragProps,
                            }) => (
                                // write your building UI
                                <div className="upload__image-wrapper">
                                    <button
                                        className="btn btn-warning"
                                        style={isDragging ? { color: 'red' } : undefined}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    >
                                        Upload New Image
                                    </button>
                                    &nbsp;

                                    {imageList.map((image, index) => (
                                        <div key={index} className="image-item">
                                            <img src={image['data_url']} alt="" width="400" />
                                            <div className="image-item__btn-wrapper">
                                                <button className="btn btn-success" onClick={() => this.saveImage(index)}>Save Image</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </ImageUploading>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="post-content">
                            <h4>{this.state.user.first_name} {this.state.user.last_name}</h4>

                            <div className="no-wrapper">
                                <h3 className="title">Update Your Account</h3>
                                <form className="account-form">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={this.state.user.first_name}
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
                                            value={this.state.user.last_name}
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
                                            value={this.state.user.username}
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
                                            value={this.state.user.email}
                                            onChange={(e) => { this.setState({ email: e.target.value }); }}
                                            placeholder="Your email *"
                                        />
                                        {this.state.errors && this.state.errors.email && this.state.errors.email.map(function (name, index) {
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="facebook_handle"
                                            id="item04"
                                            value={this.state.facebook_handle}
                                            onChange={(e) => { this.setState({ facebook_handle: e.target.value }); }}
                                            placeholder="Your Facebook handle *"
                                        />
                                        {this.state.errors && this.state.errors.facebook_handle && this.state.errors.facebook_handle.map(function (name, index) {
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="instagram_handle"
                                            id="item05"
                                            value={this.state.instagram_handle}
                                            onChange={(e) => { this.setState({ instagram_handle: e.target.value }); }}
                                            placeholder="Your Instagram handle *"
                                        />
                                        {this.state.errors && this.state.errors.instagram_handle && this.state.errors.instagram_handle.map(function (name, index) {
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="paetron_handle"
                                            id="item06"
                                            value={this.state.paetron_handle}
                                            onChange={(e) => { this.setState({ paetron_handle: e.target.value }); }}
                                            placeholder="Your Paetron handle *"
                                        />
                                        {this.state.errors && this.state.errors.paetron_handle && this.state.errors.paetron_handle.map(function (name, index) {
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="snapchat_handle"
                                            id="item07"
                                            value={this.state.snapchat_handle}
                                            onChange={(e) => { this.setState({ snapchat_handle: e.target.value }); }}
                                            placeholder="Your Snapchat handle *"
                                        />
                                        {this.state.errors && this.state.errors.snapchat_handle && this.state.errors.snapchat_handle.map(function (name, index) {
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="tiktok_handle"
                                            id="item08"
                                            value={this.state.tiktok_handle}
                                            onChange={(e) => { this.setState({ tiktok_handle: e.target.value }); }}
                                            placeholder="Your Tik Tok handle *"
                                        />
                                        {this.state.errors && this.state.errors.tiktok_handle && this.state.errors.tiktok_handle.map(function (name, index) {
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="twitch_handle"
                                            id="item09"
                                            value={this.state.twitch_handle}
                                            onChange={(e) => { this.setState({ twitch_handle: e.target.value }); }}
                                            placeholder="Your Twitch handle *"
                                        />
                                        {this.state.errors && this.state.errors.twitch_handle && this.state.errors.twitch_handle.map(function (name, index) {
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="twitter_handle"
                                            id="item10"
                                            value={this.state.twitter_handle}
                                            onChange={(e) => { this.setState({ twitter_handle: e.target.value }); }}
                                            placeholder="Your Twitter handle *"
                                        />
                                        {this.state.errors && this.state.errors.twitter_handle && this.state.errors.twitter_handle.map(function (name, index) {
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="youtube_handle"
                                            id="item12"
                                            value={this.state.youtube_handle}
                                            onChange={(e) => { this.setState({ youtube_handle: e.target.value }); }}
                                            placeholder="Your Youtube handle *"
                                        />
                                        {this.state.errors && this.state.errors.youtube_handle && this.state.errors.youtube_handle.map(function (name, index) {
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