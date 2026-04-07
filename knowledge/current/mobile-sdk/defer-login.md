---
title: "Defer Login"
domain: mobile-sdk
topic: defer-login
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:30.718Z
estimatedTokens: 333
keywords: [Defer, Login, Mobile, SDK, hybrid, apps, always, present, Salesforce, screen, startup, Sometimes, however, benefit, deferring, Apps, built, early, versions, React]
---

# Defer Login

> Apps built with early versions of React Native for Mobile SDK always
        present a Salesforce login screen at startup. Sometimes, however, these apps can benefit
        from deferring authentication until some later point. Beginning with React Native for Mobile SDK 4.2, you can defer login to any logical place in your
        app.

# Defer Login

Apps built with early versions of React Native for Mobile SDK always present a Salesforce login screen at startup. Sometimes, however, these apps can benefit from deferring authentication until some later point. Beginning with React Native for Mobile SDK 4.2, you can defer login to any logical place in your app.

Deferred login implementation is a two-step process:

1.  In your iOS or Android native container app, you call Mobile SDK native methods to disable authentication at startup.
2.  In your React code, you call a Mobile SDK JavaScript function at the point where you plan to initiate authentication.

Mobile SDK provides a React Native template app specifically to demonstrate deferred login: [ReactNativeDeferredTemplate](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/tree/dev/ReactNativeDeferredTemplate). To create an app based on this template, use the forcereact createwithtemplate command, as follows:

```

```

Read on for the implementation details.

## Step1: Disable Login at Startup

**iOS (Objective-C):**

To disable the Salesforce login screen from appearing at startup:

1.  In your project’s bootconfig.plist file, set shouldAuthenticate to false.

    ```

    ```


**Android (Java):**

By default, the Salesforce login screen appears at startup. To disable this behavior, override the shouldAuthenticate() method in your MainActivity class (or whichever class subclasses SalesforceReactActivity), as follows:

```

```

## Step 2: Initiate Authentication in React (JavaScript)

To initiate the authentication process, call the following oauth function:

```

```

This function takes two arguments: a success callback function and a failure callback function. If authentication fails, your failure callback is invoked. If authentication succeeds, your success callback is invoked with a dictionary containing the following keys:

-   accessToken
-   refreshToken
-   clientId
-   userId
-   orgId
-   loginUrl
-   instanceUrl
-   userAgent
-   communityId
-   communityUrl

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
$ forcereact createwithtemplate
Enter the target platform(s) separated by commas (ios, android): ios,android
Enter URI of repo containing template application or a Mobile SDK template name: ReactNativeDeferredTemplate
Enter your application name: MyDeferred
...
```

```
<dict>
    <key>remoteAccessConsumerKey</key>
    <string>3REW9Iu66....</string>
    <key>oauthRedirectURI</key>
    <string>testsfdc:///mobilesdk/detect/oauth/done</string>
    <key>oauthScopes</key>
    <array>
        <string>web</string>
        <string>api</string>
    </array>
    <key>shouldAuthenticate</key>
    <false/>
</dict>
```

```apex
@Override 
public boolean shouldAuthenticate() {    
    return false; 
}
```

```
function authenticate(success, fail)
```
