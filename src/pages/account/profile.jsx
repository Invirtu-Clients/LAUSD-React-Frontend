import { Component, Fragment } from "react";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import ProfileUpdateHeader from "../../component/section/profileupdate";
import Rating from "../../component/section/rating";
import VideoSection from "../../component/section/video";
import Requests from "../../util/Requests";
import withRouter from "../../util/withRouter";


class AccountUpdatePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: '',
            profileHeader : '',
            followers : '<h3>No Followers</h3>',
            following : '<h3>No Followers</h3>',
            errors: {},

        };
    }

    componentDidMount() {


        Requests.userMe().then(response => {

            this.setState({profileHeader : <ProfileUpdateHeader user={response.data} />});

        }).catch(error => {
            console.log(error);
        })
    }


    streamsShow() {
        document.querySelector('.review-content').classList.add('review-content-show')
        document.querySelector('.review-content').classList.remove('description-show')
        document.querySelector('.review-nav').classList.add('RevActive')
        document.querySelector('.review-nav').classList.remove('DescActive')
    }

    reviewShow() {
        document.querySelector('.review-content').classList.add('review-content-show')
        document.querySelector('.review-nav').classList.add('RevActive')

        document.querySelector('.review-content').classList.remove('description-show')
        document.querySelector('.review-nav').classList.remove('DescActive')
    }

    descriptionShow() {
        document.querySelector('.review-content').classList.add('description-show')
        document.querySelector('.review-nav').classList.add('DescActive')

        document.querySelector('.review-content').classList.remove('review-content-show')
        document.querySelector('.review-nav').classList.remove('RevActive')
    }



    render() {

        return (
            <Fragment>
                <Header />
                <PageHeader title={'Update Profile'} curPage={'Profile'} />

                <div className="shop-single  aside-bg">

                
                    <div className="container">
                        {this.state.profileHeader}
                    </div>
                </div>


                {this.state.events}
            </Fragment>
        );
    }

}

export default withRouter(AccountUpdatePage);