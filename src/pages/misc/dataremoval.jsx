import { Component, Fragment } from "react";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import GoogleMap from "../../component/section/googlemap";

const contacttitle = "If you wish to have your account closed and all your data removed, please use the form below.";


class DataRemovalPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            contactName: '',
            contactEmail: '',
            contactSubject: '',
            contactNumber: '',
            contactMassage: '',
        };
    }

    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Data Removal Form'} curPage={'CONTACT'} />
             
                <div className="contact-section">
                    <div className="contact-top padding-top padding-bottom bg-attachment" style={{backgroundImage: "url(/assets/images/video/bg.jpg)"}}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-9">
                                    <div className="contact-form-wrapper text-center">
                                        <h2 className="mb-5">{contacttitle}</h2>
                                        <form className="contact-form" action="contact.php" id="contact-form" method="POST">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="item01"
                                                    value={this.state.contactName}
                                                    onChange={(e)=>{this.setState({contactName: e.target.value});}}
                                                    placeholder="Your Name *"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id="item02"
                                                    value={this.state.contactEmail}
                                                    onChange={(e)=>{this.setState({contactEmail: e.target.value});}}
                                                    placeholder="Your Email *"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="number"
                                                    id="item04"
                                                    value={this.state.contactNumber}
                                                    onChange={(e)=>{this.setState({contactNumber: e.target.value});}}
                                                    placeholder="Mobile Number *"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    id="item03"
                                                    value={this.state.contactSubject}
                                                    onChange={(e)=>{this.setState({contactSubject: e.target.value});}}
                                                    placeholder="Your Subject *"
                                                />
                                            </div>
                                            <div className="form-group w-100">
                                                <textarea 
                                                        rows="8" 
                                                        type="text"
                                                        id="item05"
                                                        name="message"
                                                        value={this.state.respondMassage}
                                                        onChange={(e)=>{this.setState({respondMassage: e.target.value});}}
                                                        placeholder="Your Message"
                                                    ></textarea>
                                            </div>
                                            <div className="form-group w-100 text-center">
                                                <button className="default-button" type="submit"><span>Send our Message</span></button>
                                            </div>
                                        </form>
                                        <p className="form-message"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default DataRemovalPage;