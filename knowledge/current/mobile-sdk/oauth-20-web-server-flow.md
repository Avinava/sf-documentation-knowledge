---
title: "OAuth 2.0 Web Server Flow"
domain: mobile-sdk
topic: oauth-20-web-server-flow
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:31.544Z
estimatedTokens: 405
keywords: [OAuth, 2.0, Web, Server, Flow, Beginning, Mobile, SDK, 11.0, authentication, Upon, upgrading, any, changes, client]
---

# OAuth 2.0 Web Server Flow

> Beginning in Mobile SDK 11.0, OAuth 2.0 Web Server Flow is the default authentication
    flow. Upon upgrading to Mobile SDK 11.0, you do not need to make any changes in your client
    application. However, make sure the “Require Secret for Web Server Flow” checkbox is deselected
    in your connected app.

# OAuth 2.0 Web Server Flow

Beginning in Mobile SDK 11.0, OAuth 2.0 Web Server Flow is the default authentication flow. Upon upgrading to Mobile SDK 11.0, you do not need to make any changes in your client application. However, make sure the “Require Secret for Web Server Flow” checkbox is deselected in your connected app.

Prior to Mobile SDK 11.0, an intermediary authorization screen prompts the user to approve or deny the authorization request on each login attempt. With the upgrade to Web Server Flow in 11.0, this screen is shown only the first time a user authorizes the connected app (assuming the app is configured to allow the user to self-authorize). This behavior change is unlikely to impact day-to-day use, but it could impact areas such as automated tests, should they be written to anticipate this intermediary screen in the login flow.

For more information on using Web Server Flow, visit [OAuth 2.0 Web Server Flow for Web App Integration](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_oauth_web_server_flow.htm&type=5&language=en_US).

## Opting Out for User-Agent Flow

To opt out of your Web Server Flow in Mobile SDK 11.0 and on, you can revert to [User-Agent Flow](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/oauth_useragent_flow.htm "With the OAuth 2.0 user-agent flow, users authorize a desktop or mobile app to access data by using an external or embedded browser. Client apps running in a browser using a scripting language such as JavaScript can also use this flow.") in the SalesforceSDKManager.

Android

```

```

iOS

Swift

```

```

Objective-C

```

```

## Code Examples

```
SalesforceSDKManager.getInstance().setUseWebServerAuthentication(false)
```

```
SalesforceManager.shared.useWebServerAuthentication = false
```

```
[SalesforceSDKManager sharedManager].useWebServerAuthentication = NO;
```

## Related Topics

- User-Agent Flow (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/oauth_useragent_flow.htm)
