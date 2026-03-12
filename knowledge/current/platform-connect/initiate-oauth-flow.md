---
title: "Initiate OAuth Flow"
domain: platform-connect
topic: initiate-oauth-flow
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.260Z
estimatedTokens: 544
keywords: [Initiate, OAuth, Flow, Start, authorization, process, Canvas, app, 2.0, store, retrieve, data, authentication, token, app’s]
---

# Initiate OAuth Flow

> Start the authorization process in your Canvas app by using OAuth 2.0. If you store
        or retrieve data, such as an authentication token, from your Canvas app’s local storage in
        the callback, use window.opener.localStorage instead of
            window.localStorage.

# Initiate OAuth Flow

Start the authorization process in your Canvas app by using OAuth 2.0. If you store or retrieve data, such as an authentication token, from your Canvas app’s local storage in the callback, use window.opener.localStorage instead of window.localStorage.

This code example shows how you can initiate the OAuth 2.0 authorization process in your Canvas app.

```

```

When you implement an OAuth 2.0 web server flow, a window pops up so the user can authenticate. If your browser partitions storage, any data stored with storage APIs such as [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage "HTML (New Window)") and [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage "HTML (New Window)") is accessible only in contexts with the same top-level site. Because the callback is in a different window than the Canvas app, it has a different top-level site. Therefore, if you use window.localStorage in the callback to store and retrieve data, such as an authentication token, then an Unauthorized: client or client.oauthToken error occurs.

Instead, to store and retrieve data from your Canvas app’s local storage in the callback, use window.opener.localStorage. With the [opener](https://developer.mozilla.org/en-US/docs/Web/API/Window/opener "HTML (New Window)") property, you can interact with the window that opens another window if they both have the same origin. Because the callback has the same origin as the Canvas app, the local storage is accessible.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_connect)

#### Note

Google Chrome and other major browsers now enable storage partitioning by default. For information about their browser requirements, see [How Third-Party Cookie Restrictions Impact Salesforce Canvas Apps](https://help.salesforce.com/s/articleView?id=002192971&type=1&language=en_US "HTML (New Window)").

#### See Also

-   [OAuth 2.0 Authorization](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_oauth_authentication.htm "Canvas supports the OAuth 2.0 web server flow and the OAuth 2.0 user-agent flow.")

## Code Examples

```
<html>
<head>
    <script type="text/javascript" src="/sdk/js/canvas-all.js"></script>
</head>
<body>
    <script>

        function loginHandler(e) {
            var uri;
            if (! Sfdc.canvas.oauth.loggedin()) {
                uri = Sfdc.canvas.oauth.loginUrl();
                Sfdc.canvas.oauth.login(
                    {uri : uri,
                        params: {
                            response_type : "token",
                            client_id : "3MVG9lKcPoNINVBLigmW.8dAn4L5HwY VBzxbW5FFdzvU0re2
                                f7o9aHJNUpY9ACdh.3SUgw5rF2nSsC9_cRqzD",
                            redirect_uri : encodeURIComponent(
                                "https://demoapp1234.herokuapp.com/sdk/callback.html")
                        }});
            }
            else {
                Sfdc.canvas.oauth.logout();
                login.innerHTML = "Login";
                Sfdc.canvas.byId("oauth").innerHTML = "";
            }
            return false;
        }

        // Bootstrap the page after the DOM is ready.
        Sfdc.canvas(function() {
            // On Ready...
            var login    = Sfdc.canvas.byId("login"),
                loggedIn = Sfdc.canvas.oauth.loggedin(),
                token = Sfdc.canvas.oauth.token()
            login.innerHTML = (loggedIn) ? "Logout" : "Login";
            if (loggedIn) {
                 // Displaying only part of the OAuth token for better formatting.
                Sfdc.canvas.byId("oauth").innerHTML = Sfdc.canvas.oauth.token()
                    .substring(1,40) + "…";
            }
            login.onclick=loginHandler;
        });
    </script>
    <h1 id="header">Canvas OAuth App</h1>
    <div>
        access_token = <span id="oauth"></span>
    </div>
    <div>
        <a id="login" href="#">Login</a><br/>
    </div>
</body>
</html>
```

## Related Topics

- OAuth 2.0 Authorization (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_oauth_authentication.htm)
