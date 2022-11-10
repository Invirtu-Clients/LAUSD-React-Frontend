/**
 * The routes to various pages in the React application
 */

 const app_routes = {
   
    //misc
    home : '/home',
    privacy : '/privacy',
    terms : '/terms',
    contact : '/contact',
    dataremoval : '/dataremoval',

    //authentication
    auth_login : '/login',
    auth_register : '/register',
    auth_facebook : '/auth/facebook',
    auth_youtube : '/auth/youtube',
    auth_twitch : '/auth/twitch',

    //accounts route
    account_update : '/accounts/update',

    //streams route
    streams : '/streams',
    streams_create : '/streams/create',
    streams_update : '/streams/:id/update',
    streams_watch : '/streams/:id/watch',
    streams_broadcast : '/streams/:id/broadcast',
    streams_delete : '/streams/:id/delete',
    streams_recording_watch : '/streams/:id/watchrecording/:subid',
    streams_recording_update : '/streams/:id/updaterecording/:subid',

    //messages route
    messages : '/messages',
    message_thread : '/messages/thread',

    //users routes
    users_list : '/users',
    users_profile : '/users/:id/profile',
    users_followers: '/users/followers',
    users_following : '/users/following'
}

export default app_routes;