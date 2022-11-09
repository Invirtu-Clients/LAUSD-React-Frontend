
/**
 * The routes to the endpoints.
 */

const api_routes = {
    //Authentication Routes
    auth_login : {
        route : '/auth/login',
        method : 'POST',
    },
    auth_register : { 
        route :'/auth/register',
        method : 'POST'
    },
    auth_one_time_login : { 
        route :'/auth/oneTimeLoginWithToken',
        method : 'POST'
    },

    //Events
    events_list : {
        route: '/events',
        method : 'GET'
    },
    events_create : {
        route : '/events',
        method : 'POST'
    },
    events_view : {
        route : '/events/{event_id}',
        method : 'GET'
    },
    events_update : {
        route : '/events/{event_id}',
        method : 'PUT'
    },
    events_delete : {
        route : '/events/{event_id}',
        method : 'DELETE'
    },
    events_add_rtmp_source : {
        route : '/events/{event_id}/addRTMPSource',
        method : 'POST'
    },

    //Messages
    messages_list : {
        route: '/messages',
        method : 'GET'
    },
    messages_all_conversations : {
        route: '/messages/threads',
        method : 'GET'
    },
    messages_create_thread : {
        route: '/messages/threads',
        method : 'GET'
    },
    messages_send : {
        route: '/messages',
        method : 'POST'
    },
    messages_update : {
        route: '/messages/{message_id}',
        method : 'PUT'
    },
    messages_delete : {
        route: '/messages/{message_id}',
        method : 'DELETE'
    },

    //Users
    users_list : {
        route: '/users',
        method : 'GET'
    },
    users_update : {
        route: '/users',
        method : 'PUT'
    },
    users_profile : {
        route: '/users/{user_id}/profile',
        method : 'GET'
    },
    users_me : {
        route: '/users/me',
        method : 'GET'
    },
    users_one_time_token : {
        route: '/users/oneTimeToken',
        method : 'GET'
    },
    users_profile : {
        route: '/users/{user_id}/profile',
        method : 'GET'
    },
    users_followers : {
        route: '/users/{user_id}/followers',
        method : 'GET'
    },
    users_following : {
        route: '/users/{user_id}/following',
        method : 'GET'
    },
    users_toggle_follow : {
        route: '/users/{user_id}/follow',
        method : 'POST'
    },


}

export default api_routes;