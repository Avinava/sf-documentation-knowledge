---
title: "OAuth 2.0 User-Agent Flow"
domain: mobile-sdk
topic: oauth-20-user-agent-flow
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.778Z
estimatedTokens: 965
keywords: [OAuth, 2.0, User-Agent, Flow, users, authorize, desktop, mobile, app, external, embedded, browser, Client, apps, running, scripting, language, JavaScript, SDK, 11.0]
---

> With the OAuth 2.0 user-agent flow, users authorize a desktop or mobile app to access
    data by using an external or embedded browser. Client apps running in a browser using a
    scripting language such as JavaScript can also use this flow.

# OAuth 2.0 User-Agent Flow

With the OAuth 2.0 user-agent flow, users authorize a desktop or mobile app to access data by using an external or embedded browser. Client apps running in a browser using a scripting language such as JavaScript can also use this flow.

This flow uses the [OAuth 2.0 implicit grant type](https://tools.ietf.org/html/rfc6749#section-4.2 "HTML (New Window)").

In the user-agent flow, the connected app, which integrates the client app with the Salesforce API, receives the access token as an HTTP redirection. The connected app requests that the authorization server redirects the user-agent to a web server or to an accessible local resource. The web server can extract the access token from the response and pass it to the connected app. For security, the token response is provided as a hash tag (#) fragment on the URL. This format prevents the token from being passed to the server or to any other servers in referral headers.

![Warning](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_warning.png&folder=mobile_sdk)

#### Warning

Because the access token is encoded into the redirection URL, it can be exposed to the user and other apps on the device.

If you’re using JavaScript to authenticate, call window.location.replace(); to remove the callback from the browser’s history.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Connected apps for these types of clients can protect per-user secrets. But the client secret is accessible and exploitable because client executables reside on the user’s device. For this reason, the user-agent flow doesn’t use the client secret. Authorization is based on the user-agent’s same-origin policy. Also, the user-agent flow doesn’t support out-of-band posts.

![User agent flow](/docs/resources/img/en-us/noversion?doc_id=help%2Fimages%2Fremoteaccess_oauth_user_agent_flow.png&folder=mobile_sdk)

For example, you use Salesforce Mobile SDK to build a mobile app that looks up customer contact information from your Salesforce org. Mobile SDK implements the OAuth 2.0 user-agent flow for your connected app, integrating the mobile app with your Salesforce API and giving it authorized access to the defined data. The flow follows these steps.

1.  The user opens the mobile app.
2.  The connected app directs the user to Salesforce to authenticate and authorize the mobile app.
3.  The user approves access for this authorization flow.
4.  The connected app receives the callback from Salesforce to the redirect URL, which extracts the access and refresh tokens.
5.  The connected app uses the access token to access data on the user’s behalf.

## User-Agent Flow in Mobile SDK 11.0 and On

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Up until Mobile SDK 10.2, OAuth 2.0 User-Agent Flow is used for web view authentication on both iOS and Android and for advanced authentication on Android. Starting in Mobile SDK 11.0, the default authentication on both platforms uses the [OAuth 2.0 Web Server Flow](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/oauth_web_server_flow.htm "Beginning in Mobile SDK 11.0, OAuth 2.0 Web Server Flow is the default authentication flow. Upon upgrading to Mobile SDK 11.0, you do not need to make any changes in your client application. However, make sure the “Require Secret for Web Server Flow” checkbox is deselected in your connected app.") with Proof Key for Code Exchange (PKCE) for increased security.

If you want to continue using User-Agent Flow for your app in Mobile SDK 11.0 and on, the option can be enabled in the SalesforceSDKManager. Before initiating a login, call one of the following methods in your application class’s init method.

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

- OAuth 2.0 Web Server Flow (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/oauth_web_server_flow.htm)
