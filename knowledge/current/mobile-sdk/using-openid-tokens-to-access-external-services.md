---
title: "Using OpenID Tokens to Access External Services"
domain: mobile-sdk
topic: using-openid-tokens-to-access-external-services
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.216Z
estimatedTokens: 930
keywords: [OpenID, Tokens, External, Services, Mobile, SDK, app, requires, approved, Salesforce, perform, necessary, authentication, handshake, Configure, Server-Side, Settings, Configuration]
---

> If your Mobile SDK app requires approved services external to Salesforce, you can use OpenID tokens
  to perform the necessary authentication handshake.

# Using OpenID Tokens to Access External Services

If your Mobile SDK app requires approved services external to Salesforce, you can use OpenID tokens to perform the necessary authentication handshake.

Most Mobile SDK apps authenticate with Salesforce and use Mobile SDK REST API wrappers to access Salesforce resources. In this scenario, Mobile SDK handles authentication token exchanges behind the scenes without the app’s explicit involvement.

Some apps, however, also require data from an authenticated service that doesn’t accept Salesforce tokens. These services can come from products owned by Salesforce, such as Quip or Heroku, or sanctioned third parties. To make these external API calls from the Salesforce environment, you can use OpenID tokens.

## OpenID Tokens

An OpenID token allows the app that generates the token to share information with an external web service. For Mobile SDK purposes, the OpenID token shares the user’s and app’s identities. The external service that receives this token can then give the app a full set of external credentials for the user. Typically, OpenID tokens provided by Salesforce have short lifespans to limit opportunities for security breaches.

OpenID support requires configuration on the Salesforce server and in the Mobile SDK app. On the Salesforce side, org administrators configure connected apps to support OpenID tokens. In the Mobile SDK app, the developer configures the app’s OAuth scopes and calls a Mobile SDK method that provides an OpenID token. The app can then exchange this token for a full set of credentials from the external service. **The app is responsible for managing any external credentials it uses.**

For more information on OpenID, see [openid.net/what-is-openid](https://openid.net/what-is-openid/ "HTML (New Window)").

## Configure Server-Side Settings

Connected app settings under API (Enable OAuth Settings) when you edit a new or existing connected app.

1.  Select **Enable OAuth Settings**.

    ![Enable OAuth Settings checkbox](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2Fopenid-enable-oauth-settings.png&folder=mobile_sdk)

2.  Under Selected OAuth Scopes, select **Allow access to your unique identifier (openid)** and click **Add**.

    !["openid" OAuth scope as listed in selection box](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2Fopenid-allow-access.png&folder=mobile_sdk)

3.  Select **Configure ID Token** and configure its subsettings as described in [Create a Connected App](https://help.salesforce.com/articleView?id=connected_app_create.htm&language=en_US) in *Salesforce Help*.

    ![Configure ID Token section](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2Fopenid-configure-id-token.png&folder=mobile_sdk)


## App Configuration

1.  In the bootconfig.xml file (Android) or the bootconfig.plist file (iOS), add openid to the oauthScopes list.

    iOS:

    ![iOS openid setting in bootconfig.plist](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2Fopenid-scope-ios.png&folder=mobile_sdk)

    Android:

    ![Android openid setting in bootconfig.xml](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2Fopenid-scope-android.png&folder=mobile_sdk)

2.  To obtain an OpenID token string, call the platform-specific API.

    iOS (Objective-C)

    Call the following method on the SFSDKOAuth2 class.

    ```

    ```

    Android

    Call the following method on the OAuth2 class.

    ```

    ```


## See Also

-   [Create a Connected App](https://help.salesforce.com/articleView?id=connected_app_create.htm&language=en_US) in *Salesforce Help*.

## Code Examples

```
- (void)openIDTokenForRefresh:(SFSDKOAuthTokenEndpointRequest *)endpointReq 
                   completion:(void (^)(NSString *))completionBlock;
```

```apex
public static String getOpenIDToken(String loginServer, String clientId, 
    String refreshToken);
```
