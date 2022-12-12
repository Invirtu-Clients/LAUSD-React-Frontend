import React from "react";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Textarea from "../../form/textarea";

export default function CompetitionFormSocial({ facebookValue, facebookOnChange, twitterValue, twitterOnChange, instagramValue, instagramOnChange, snapchatValue, snapchatOnChange, tiktokValue, tiktokOnChange, paetronValue, paetronOnChange, twitchValue, twitchOnChange, youtubeValue, youtubeOnChange, errors }) {

    return (
        <>
            <h3 className="title">Social Pages</h3>

            <div className="row">

                <div className="col-6">

                    <div className="form-group">
                        <input
                            type="text"
                            name="facebook_page"
                            id="item04"
                            value={facebookValue}
                            onChange={facebookOnChange}
                            placeholder="Your Facebook handle *"
                        />
                        {errors && errors.facebook_page && errors.facebook_page.map(function (name, index) {
                            return <Danger message={name} key={index} />;
                        })}
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="instagram_page"
                            id="item05"
                            value={instagramValue}
                            onChange={instagramOnChange}
                            placeholder="Your Instagram handle *"
                        />
                        {errors && errors.instagram_page && errors.instagram_page.map(function (name, index) {
                            return <Danger message={name} key={index} />;
                        })}
                    </div>

                </div>
                <div className="col-6">
                    <div className="form-group">
                        <input
                            type="text"
                            name="paetron_page"
                            id="item06"
                            value={paetronValue}
                            onChange={paetronOnChange}
                            placeholder="Your Paetron handle *"
                        />
                        {errors && errors.paetron_page && errors.paetron_page.map(function (name, index) {
                            return <Danger message={name} key={index} />;
                        })}
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="snapchat_page"
                            id="item07"
                            value={snapchatValue}
                            onChange={snapchatOnChange}
                            placeholder="Your Snapchat handle *"
                        />
                        {errors && errors.snapchat_page && errors.snapchat_page.map(function (name, index) {
                            return <Danger message={name} key={index} />;
                        })}
                    </div>
                </div>


            </div>

            <div className="row">

                <div className="col-6">
                    <div className="form-group">
                        <input
                            type="text"
                            name="tiktok_page"
                            id="item08"
                            value={tiktokValue}
                            onChange={tiktokOnChange}
                            placeholder="Your Tik Tok handle *"
                        />
                        {errors && errors.tiktok_page && errors.tiktok_page.map(function (name, index) {
                            return <Danger message={name} key={index} />;
                        })}
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="twitch_page"
                            id="item09"
                            value={twitchValue}
                            onChange={twitchOnChange}
                            placeholder="Your Twitch handle *"
                        />
                        {errors && errors.twitch_page && errors.twitch_page.map(function (name, index) {
                            return <Danger message={name} key={index} />;
                        })}
                    </div>
                </div>
                <div className="col-6">

                    <div className="form-group">
                        <input
                            type="text"
                            name="twitter_page"
                            id="item10"
                            value={twitterValue}
                            onChange={twitterOnChange}
                            placeholder="Your Twitter handle *"
                        />
                        {errors && errors.twitter_page && errors.twitter_page.map(function (name, index) {
                            return <Danger message={name} key={index} />;
                        })}
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="youtube_page"
                            id="item12"
                            value={youtubeValue}
                            onChange={youtubeOnChange}
                            placeholder="Your Youtube handle *"
                        />
                        {errors && errors.youtube_page && errors.youtube_page.map(function (name, index) {
                            return <Danger message={name} key={index} />;
                        })}
                    </div>
                </div>

            </div>

        </>
    );
}