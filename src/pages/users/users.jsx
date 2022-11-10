import { Component, Fragment } from "react";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import ProfileHeader from "../../component/section/profile";
import UserListItem from "../../component/section/userlistitem";
import VideoSection from "../../component/section/video";
import Requests from "../../util/Requests";
import withRouter from "../../util/withRouter";

class UsersPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: '',
            users : [],
            errors: {},

        };
    }

    componentDidMount() {

        Requests.userList().then(response => {
            console.log(response);
            this.setState({users : response.data});
        }).catch(error => {
            console.log(error);
        })
    }

    render() {

        return (
            <Fragment>
                <Header />
                <PageHeader title={'Users'} curPage={'Users'} />

                <div className="shop-single">


                    <div className="container">

                    {this.state.users.map(function(data, index){
                        return <UserListItem user={data} />;
                    })}
                        
                    </div>
                </div>

                {this.state.events}
            </Fragment>
        );
    }

}

export default withRouter(UsersPage);