import { Component, Fragment } from "react";

class ProfilePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            events : '',
            errors : {},
            
        };
    }

    componentDidMount() {

        let id = this.props.router.params.id;

        Requests.userProfile(id).then(response => {
           
        }).catch(error => {
            console.log(error);
        })
    }

    render() { 

        return(
            <Fragment>
                <Header />
                {this.state.events}
            </Fragment>
        );
    }

}

export default withRouter(ProfilePage);