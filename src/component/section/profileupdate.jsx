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