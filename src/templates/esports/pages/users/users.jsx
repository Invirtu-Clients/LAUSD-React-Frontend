import { Component, Fragment } from "react";
import Requests from "../../../../util/Requests";
import withRouter from "../../../../util/withRouter";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import UserListItem from "../../component/section/userlistitem";

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
                <Footer />
            </Fragment>
        );
    }

}

export default withRouter(UsersPage);