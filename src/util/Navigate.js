import app_routes from "../constants/app_routes";

/**
 * The url to various pages in the application
 * 
 * Some key notes:
 * 
 * 1. We only want to replace the variables if the variabes being passed in are present, otherwise
 * it should return the :id, which is used by React Router for path matching
 */
const Navigate = {

    //Misc Pages
    homePage : () => {
        return app_routes.home;
    },
    privacyPage : () => {
        return app_routes.privacy;
    },
    termsPage : () => {
        return app_routes.terms;
    },
    contactPage : () => {
        return app_routes.contact;
    },
    dataRemovalPage : () => {
        return app_routes.dataremoval;
    },
    gdprPage : () => {
        return app_routes.gdpr;
    },
    accessDeniedPage : () => {
        return app_routes.gdpr;
    },

    //Authentication
    authLogin : () => {
        return app_routes.auth_login;
    },
    authRegister : () => {
        return app_routes.auth_register;
    },
    authFacebook : () => {
        return app_routes.auth_facebook;
    },
    authTwitch : () => {
        return app_routes.auth_twitch;
    },
    authYoutube : () => {
        return app_routes.auth_youtube;
    },
    authForgotPassword : () => {
        return app_routes.auth_forgot_password;
    },
    authResetPassword : () => {
        return app_routes.auth_reset_password;
    },

    //Account Page
    accountMainPage : () => {
        return app_routes.account_update;
    },

    //Stream Pages
    streamsPage : () => {
        return app_routes.streams;
    },
    streamsCreatePage : () => {
        return app_routes.streams_create;
    },
    streamsUpdatePage : (event_id) => {

        let path = app_routes.streams_create;

        if(event_id){
            path = path.replace(':id', event_id)
        }

        return path;
    },
    streamsWatchPage : (event_id) => {

        let path = app_routes.streams_watch;

        if(event_id){
            path = path.replace(':id', event_id)
        }

        return path;
    },
    streamsBroadcastPage : (event_id) => {

        let path = app_routes.streams_broadcast;

        if(event_id){
            path = path.replace(':id', event_id)
        }

        return path;
    },
    streamsDeletePage : (event_id) => {

        let path = app_routes.streams_delete;

        if(event_id){
            path = path.replace(':id', event_id)
        }

        return path;
    },
    streamsCohostPassword : (event_id, passcode) => {

        let path = app_routes.streams_cohost_password;

        if(event_id){
            path = path.replace(':id', event_id)
        }

        if(passcode){
            path = path.replace(':passcode', passcode)
        }

        return path;
    },
    streamsCohostWatch : (event_id) => {

        let path = app_routes.streams_cohost_watch;

        if(event_id){
            path = path.replace(':id', event_id)
        }

        return path;
    },
    streamsWatchRecordingPage: (event_id, recording_id) => {

        let path = app_routes.streams_recording_watch;

        if(event_id){
            path = path.replace(':id', event_id)
        }

        if(recording_id){
            path = path.replace(':subid', recording_id)
        }

        return path;
    },
    streamsManageRecordingPage: (event_id, recording_id) => {

        let path = app_routes.streams_recording_update;

        if(event_id){
            path = path.replace(':id', event_id)
        }

        if(recording_id){
            path = path.replace(':subid', recording_id)
        }

        return path;
    },

    //Users
    usersList : () => {

        let path = app_routes.users_list;

        return path;
        
    },
    usersProfilePage : (user_id) => {

        let path = app_routes.users_profile;

        if(user_id){
            path = path.replace(':id', user_id)
        }

        return path;
        
    },
    usersFollowers : (user_id) => {

        let path = app_routes.users_followers;

        if(user_id){
            path = path.replace(':id', user_id)
        }

        return path;
        
    },
    usersFollowing : (user_id) => {

        let path = app_routes.users_following;

        if(user_id){
            path = path.replace(':id', user_id)
        }

        return path;
        
    },

}

export default Navigate;