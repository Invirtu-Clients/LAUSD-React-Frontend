import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import ProfileUpdateHeader from "../../component/section/profileupdate";
import Rating from "../../component/section/rating";
import VideoSection from "../../component/section/video";
import Navigate from "../../util/Navigate";
import Requests from "../../util/Requests";
import withRouter from "../../util/withRouter";
import ImageUploading from 'react-images-uploading';

import Moment from 'react-moment';
import Data from "../../util/Data";



class AccountUpdatePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            me: null,
            profileHeader: '',
            followers: '<h3>No Followers</h3>',
            following: '<h3>No Followers</h3>',
            images: [],
            errors: {},

        };
    }

    componentDidMount() {


        Requests.userMe().then(response => {

            console.log(response.data);
            this.setState({
                me: response.data,
                profileHeader: <ProfileUpdateHeader user={response.data} />
            });

        }).catch(error => {
            console.log(error);
        })
    }

    imageOnChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        this.setState({ images: imageList });
        //setImages(imageList);
    };

    saveImage = (index) => {

        let image = this.state.images[index];

        console.log(image);

        const blob = Data.dataURItoBlob(image.data_url);

        const formData = new FormData();
        formData.append('image', image.file, 'screenshot.png');

        let file = image.file;
        file.name = 'image';
        Requests.userUploadAvatar(file).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error)
        })
        
    }


    render() {

        return (
            <Fragment>
                <Header />
                <PageHeader title={'Update Profile'} curPage={'Profile'} />

                <div className="shop-single">


                    <div className="container">
                        {this.state.profileHeader}

                        <h4>Upload Image</h4>
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
                                        style={isDragging ? { color: 'red' } : undefined}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    >
                                        Click or Drop here
                                    </button>
                                    &nbsp;
                                    
                                    {imageList.map((image, index) => (
                                        <div key={index} className="image-item">
                                            <img src={image['data_url']} alt="" width="100" />
                                            <div className="image-item__btn-wrapper">
                                                <button onClick={() => this.saveImage(index)}>Save A Profile Image</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </ImageUploading>
                    </div>
                </div>


                <div className="container">

                    <div className="row g-4 match-grid GameListStyleTwo">

                        {
                            this.state.me && this.state.me.events && this.state.me.events.map((elem) => {
                                const { id, imageone, imagetwo, title, alt1, alt2, matchdate, matchtime, groupcount, playercount, matchpname, matchpamount, btntext } = elem;
                                return (
                                    <div className="col-12" key={id}>
                                        <div className="match-item item-layer">
                                            <div className="match-inner">
                                                <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                    <p className="match-team-info">{groupcount} <span className="fw-bold">{playercount} <Moment>{elem.created_at}</Moment></span></p>
                                                    <p className="match-prize">{matchpname} <span className="fw-bold">{matchpamount}</span></p>
                                                </div>
                                                <div className="match-content">
                                                    <div className="row gy-4 align-items-center justify-content-center">
                                                        <div className="col-xl-4 col-md-6 order-md-2">
                                                            <div className="match-game-team">

                                                            </div>
                                                        </div>
                                                        <div className="col-xl-4 col-md-6 order-md-1">
                                                            <div className="match-game-info">
                                                                <h4><Link to={Navigate.streamsBroadcastPage(elem.id)}>{elem.title}</Link> </h4>
                                                                <p className="d-flex flex-wrap justify-content-center  justify-content-md-start">
                                                                    <span className="match-date">{matchdate} </span><span className="match-time">{matchtime}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-4 col-md-6 order-md-3">
                                                            <div className="match-game-social">
                                                                <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center justify-content-xl-start">

                                                                    <li><a href={Navigate.streamsBroadcastPage(elem.id)} className="default-button reverse-effect"><span>{btntext}<i className="icofont-play-alt-1"></i></span> </a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Fragment>
        );
    }

}

export default withRouter(AccountUpdatePage);