---
title: "Managing Sessions in Hybrid Apps"
domain: mobile-sdk
topic: managing-sessions-in-hybrid-apps
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:30.776Z
estimatedTokens: 1050
keywords: [Managing, Sessions, Hybrid, Apps, help, resolve, common, issues, often, affect, mobile, SDK, wraps, native, containers]
---

# Managing Sessions in Hybrid Apps

> To help resolve common issues that often affect mobile apps, Mobile SDK wraps hybrid apps
			in native containers. These containers provide seamless authentication and session
			management by internally managing OAuth token exchanges. However, as popular mobile app
			architectures evolve, this “on

# Managing Sessions in Hybrid Apps

To help resolve common issues that often affect mobile apps, Mobile SDK wraps hybrid apps in native containers. These containers provide seamless authentication and session management by internally managing OAuth token exchanges. However, as popular mobile app architectures evolve, this “one size fits all” approach proves to be too limiting in some cases. For example, if a mobile app uses JavaScript remoting in Visualforce, Salesforce cookies can be lost if the user lets the session expire. These cookies can be retrieved only when the user manually logs back in.

Modern versions of Mobile SDK use reactive session management. “Reactive” means that apps can participate in session management, rather than letting the container do all the work. Apps created before Mobile SDK 1.4, however, used proactive, or container controlled, session management. In the proactive scenario, some types of apps would restart when the session expired, resulting in a less than satisfactory user experience. In the reactive scenario, your app can prevent such restarts by refreshing the session token without interrupting the runtime flow.

If you’re upgrading an app from version 1.3 to any later version, you’re required to switch to reactive management. To switch to reactive management, adjust your session management settings according to your app’s architecture. This table summarizes the behaviors and recommended approaches for common architectures.

| App Architecture | Reactive Behavior in Mobile SDK 5.0 and Later | Steps for Upgrading Code |
| --- | --- | --- |
| REST API | Refresh from JavaScript using the com.salesforce.plugin.network plug-in | No coding is required for apps that use force.js, which handles network calls natively through the com.salesforce.plugin.network plug-in. Apps that use other frameworks should also adopt the com.salesforce.plugin.network plug-in for network calls. |
| JavaScript Remoting in Visualforce | Refresh session and CSRF token from JavaScript | Catch the session timeout event, and then either reload the page or load a new iFrame. |

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

In Mobile SDK 5.0 and later, JQuery Mobile, which some hybrid apps use for networking, is no longer supported as a networking option.

The following sections provide code examples for supported architectures.

## REST APIs (Including Apex2REST)

Hybrid apps that use REST APIs are required to refresh expired access tokens before each REST call. You can meet this requirement simply by using force.js, which refreshes sessions implicitly through the com.salesforce.plugin.network plug-in. With force.js, your app doesn’t have to add refresh code.

To initiate a user session with force.js, you call force.login(). After the user logs in to an app running in the container, the network plug-in refreshes tokens as necessary when the app tries to access Salesforce resources. The following code, adapted from the ContactExplorer sample, demonstrates a typical force.login() implementation.

-   When the device notifies that it’s ready, call the force.login() method to post the login screen.

    ```

    ```


Get the complete ContactExplorer sample application here: [https://github.com/forcedotcom/SalesforceMobileSDK-Shared/tree/master/samples/contactexplorer](https://github.com/forcedotcom/SalesforceMobileSDK-Shared/tree/master/samples/contactexplorer "HTML (New Window)")

## JavaScript Remoting in Visualforce

For mobile apps that use JavaScript remoting to access Visualforce pages, incorporate the session refresh code into the method parameter list. In JavaScript, use the Visualforce remote call to check the session state and adjust accordingly.

```

```

This example defines hasSessionExpired() as:

```

```

*Advanced use case*: Reloading the entire page doesn’t always provide the best user experience. To avoid reloading the entire page, you’ll need to:

1.  Refresh the access token
2.  Refresh the Visualforce domain cookies
3.  Finally, refresh the CSRF token

Instead of fully reloading the page as follows:

```

```

Do something like this:

```

```

## Code Examples

```
/* Do login */
force.login(
    function() {
        console.log("Auth succeeded"); 
        // Call your app’s entry point
        // ...
    },
    function(error) {
        console.log("Auth failed: " + error); 
    }
);
```

```
<Controller>.<Method>(
    <params>,
    function(result, event) {
        if (hasSessionExpired(event)) {
            // Reload will try to redirect to login page
            // Container will intercept the redirect and 
            // refresh the session before reloading the 
            // origin page
            window.location.reload();
        } else {
            // Everything is OK. 
            // Go ahead and use the result.
            // ...
        },
    {escape: true}
);
```

```
function hasSessionExpired(event) {
    return (event.type == "exception" && 
        event.message.indexOf("Logged in?") != -1);
}
```

```
window.location.reload();
```

```
// Refresh oauth token
cordova.require("com.salesforce.plugin.oauth").authenticate(
    function(creds) {
        // Reload hidden iframe that points to a blank page to
        // to refresh Visualforce domain cookies
        var iframe = document.getElementById("blankIframeId");
        iframe.src = src;
  
        // Refresh CSRF cookie
        // Get the provider array
        var providers = Visualforce.remoting.Manager.providers;
        // Get the last provider in the arrays (usually only one)
        var provider = Visualforce.remoting.last;
        provider.refresh(function() {
            //Retry call for a seamless user experience
        });
	
    }, 
    function(error) {
        console.log("Refresh failed");
    }
);
```
