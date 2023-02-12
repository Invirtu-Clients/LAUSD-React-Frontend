import { Component, Fragment } from "react";

import Header from '../../component/layout/header'
import PageHeader from '../../component/layout/pageheader'
import AboutSection from '../../component/section/about'
import VideoTestimonial from "../../component/section/videotestimonial";
import SponsorSection from "../../component/section/sponsor";
import ProductSection from "../../component/section/product";
import CtaSection from "../../component/section/cta";
import HrShape from "../../component/layout/hrshape";
import Footer from "../../component/layout/footer";


class TermsPage extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Terms Of Service'} curPage={'About Us'} />
                <div className="row-fluid">
                    <div className="well content-well">
                        <h1>TERMS OF SERVICE</h1>

                        <p>
                            This Terms of Use Agreement (“Agreement”) explains your rights and obligations in using the Adbience website (such website, and all activities thereon, constituting “the Services”).  Please read this Agreement carefully.  By clicking “Accept,” and submitting any information about you or your company, or continuing to use the service, or requesting more information  you are telling us you read and understand everything in this document.

                            AS-IS.  You agree to use the Services as-is.  UNLESS THE DISCLAIMER OF SUCH WARRANTIES IS PROHIBITED BY APPLICABLE LAW, YOU EXPRESSLY AGREE THAT ACCESS TO THE SERVICE BY ANY MEANS IS AT YOUR SOLE RISK, AND THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE,” AND WE DO NOT MAKE ANY WARRANTIES WHATSOEVER WITH RESPECT TO THE SERVICE, INCLUDING WITHOUT LIMITATION, WARRANTIES, EITHER EXPRESS OR IMPLIED, SUCH AS THE WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, OR THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR FREE OR PROVIDE ADEQUATE, COMPLETE OR TIMELY INFORMATION OR DATA.

                            SUBJECT TO CHANGE.  You agree that we may change or discontinue the Services in our sole discretion and with no prior notice to you.

                            SOLE CONSIDERATION.  You agree that our sole offer to you in connection with the Services is to provide them as-is, or as modified by us in our sole discretion, until such time as we should choose to discontinue the Services or any component of the Services.

                            DISPUTE RESOLUTION — VENUE.  You agree to be subject to the jurisdiction of the State of Connecticut unless otherwise stipulated by ProdigyView, LLCor its operating partner.  You agree that any dispute between you and us will be resolved in  in the state of Connecticut or New Jersey ProdigyView, LLCor its operating partner to the exclusion of any other potential venue unless agreed to in writing between you and ProdigyView, LLC and any of its operating partners..

                            DISPUTE RESOLUTION – ARBITRATION, NO CLASS ACTIONS.  You agree that you will only sue us as an individual.  You agree that you will not file a class action, or participate in a class action.  You and we agree that any dispute between us can only be brought in binding individual (non-class) arbitration to be administered by the American Arbitration Association (“AAA”).  If, for any reason, AAA is not available, you or we may file our case with any national arbitration company.

                            YOUR LIABILITY.  You are fully responsible for how you use our Services.  You agree to indemnify and hold harmless us and our directors, officers, employees, service providers, vendors, our operating partners and agents from and against any and all losses, liabilities, claims, damages or expenses (including attorneys’ fees and court costs and expenses) arising from or related to any use of the Services by you or that occurs because of you.

                            STANDARD OF CARE.  You agree that our sole obligation to you is to provide the Services as-is.  You agree that unless we do something that is grossly negligent or an act of willful misconduct in connection with the Services, we will not be liable to you or to any third party.

                            LIMITATIONS ON LIABILITY.  If, for any reason, we are judged liable to you, you agree that your recovery will be limited to your actual damages, measured by actual out-of-pocket economic loss.  You agree that you will not ask for any consequential, special, punitive or exemplary damages, or indirect or lost profits.  You agree that even if you request these types of damages, a court or arbitrator cannot award them to you.  You agree that any recovery will be limited to recovery from ProdigyView, LLC, and not any operating partner or director or officer thereof in his or her personal capacity.  You understand and agree that the price of these Services would be significantly higher but for these limitations on liability.

                            WE’RE NOT RESPONSIBLE FOR ALL CIRCUMSTANCES.  You also agree that we are not responsible for anything beyond our control.  For example, we are not liable:  for Service interruptions caused by problems with the communications network; for problems caused by any Internet service provider; for your computer or its programs failing; for the acts of criminal attackers, whether in real-time or automated (e.g., viruses); or for errors in information provided to us upon which we reasonably rely.  These are only examples.

                            TERMINATION  BY US. We reserve the right to terminate this Agreement, in our sole

                            discretion.  We may terminate this Agreement prior to sending you written notification.

                            AMENDMENTS. We may change the Services and this Agreement at any time, in our sole discretion.  We will provide you with advance notice of any such material change to the e-mail you provide to us except in circumstances where advanced written notice would not be practical.  You agree to accept service of any legal notice in connection with the Services by e-mail to the address you provide.  If you use the Services more than one week after we send written notice of a material change, that will mean you accept the changes.  If you do not accept the changes, your sole right is to stop using the Services.
                        </p>


                        <strong>PRIVACY STATEMENT.</strong>

                        <p>By agreeing to these Terms of Use, you also accept the following Privacy Statement. You agree that the terms of the Privacy Statement are incorporated into these Terms of Use as though set forth in full herein.

                            INFORMATION COLLECTED.   It is our policy that all information provided remain confidential and not be disclosed to any party other than ProdigyView, LLCand its operating partners.  We have implemented security measures designed to keep All information you provide to us via electronic or paper form strictly confidential.  We will NOT share personal information that can be used to identify you which includes your first name, last name, email address, and password. We will share information with verified third party vendors abouta user's actions.  We respect your privacy and only intend to use the information you send to us in a responsible and secure manner. This pertains to information collected via application or throughout our due diligence processes.

                            HOW THE INFORMATION IS USED.

                            We use the information we receive about you in order to help third party vendors better understand the relationship between their content and the people that choose to read it.  We may elect to keep the information in order to contact you about new developments at our company whether or not we enter into a factoring relationship.

                            UPDATING OR DELETING INFORMATION

                            The information you provide can be changed or deleted at any time by contacting us.</p>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default TermsPage;