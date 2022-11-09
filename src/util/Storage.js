
//A persistent data kept in the browser
//will not persist if user refreshes or window.location is used for navigation
//Only good for "single page apps"
let data = {};

const Storage = {

    set: function (key, value) {
        try {
            window.localStorage.setItem(key, value);
        } catch (e) {

            try {
                window.sessionStorage.setItem(key, value);
             } catch (e) {
               
                this.setCookie(key, value, 31);

                //fallback if set cookie fails
                data[key] = value;
               
            }
        }
    },
    get: function (key) {
       
        try {
            return window.localStorage.getItem(key);
        } catch (e) {

            try {
                return window.sessionStorage.getItem(key);
            } catch (e) {
              
                let value = this.getCookie(key);

                if(!value) {
                    value = data[key];
                }

                return value;
            }
        }
    },
    setAuthToken(token) {
        this.set('glitch_auth_token', token)
    },
    getAuthToken() {
        return this.get('glitch_auth_token');
    },
    setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }

        //IFrames require HttpyOnly to be false, Chrome require SameSite to be none, and must be secure
        document.cookie = name + "=" + (value || "") + expires + "; path=/; HttpOnly=false; SameSite=none; Secure";
    },
    getCookie(name) {

        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    eraseCookie(name) {
        document.cookie = name + '=; Secure; HttpOnly=false; SameSite=none; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

}

export default Storage;