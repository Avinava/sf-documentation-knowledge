---
title: "Signed Request Authentication"
domain: platform-connect
topic: signed-request-authentication
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.286Z
estimatedTokens: 1229
keywords: [Signed, Authentication, authorization, Canvas, apps, flow, varies, depending, whether, administrator, gives, users, access, app, self-authorize]
---

# Signed Request Authentication

> Signed request is the default authorization method for Canvas apps. The signed request
  authorization flow varies depending on whether the administrator gives users access to the Canvas
  app or if users can self-authorize. You can verify signed request information with a client
  secret, then use signed requests to customize the app and make subsequent calls to
  Salesforce.

# Signed Request Authentication

Signed request is the default authorization method for Canvas apps. The signed request authorization flow varies depending on whether the administrator gives users access to the Canvas app or if users can self-authorize. You can verify signed request information with a client secret, then use signed requests to customize the app and make subsequent calls to Salesforce.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=platform_connect)

#### Important

If your Canvas app URL contains a URL fragment identifier (#), then the hash mark (#) and all characters that follow are stripped from the URL during the authentication flow. To prevent unexpected behavior, avoid using hash marks (#) in a Canvas app URL.

| Permitted Users Value | Canvas App Accessibility | When the User Must Approve the Canvas App | POST or GET Behavior |
| --- | --- | --- | --- |
| Admin-approved users are pre-authorized | The app is accessible to users as soon as the administrator installs it in the organization and configures which users can see it. Users don’t approve or deny access. | Never | Salesforce performs a POST to the Canvas app with all the authorization information contained in the body of the signed request, including the refresh token. |
| All users can self-authorize | The app is accessible to all users, but the user is prompted to approve or deny access to the app. | The first time that the user opens the appThe administrator revokes the access tokenThe administrator sets a time limit on the token and that time limit is exceeded | If the user previously approved the app and access hasn’t expired or been revoked, Salesforce performs a POST to the Canvas app with a signed request payload.If the user hasn’t approved the app, or if access has expired or been revoked, Salesforce performs a GET to the Canvas app URL. The Canvas app must handle the GET by accepting the call and looking for the URL parameter _sfdc_canvas_authvalue. If the Canvas app receives this parameter value, the Canvas app initiates the approve or deny OAuth flow._sfdc_canvas_authvalue = user_approval_requiredAfter the OAuth flow is initiated and the user approves the app, the Canvas app calls the repost() method with a parameter of true to retrieve the signed request. |

The signed request is a string of these elements concatenated.

-   The Canvas app consumer secret encrypted with the HMAC SHA–256 algorithm
-   A period (.)
-   The context and authorization token JSON encoded in Base64

The signed request looks similar to this string, although it can be longer: 9Rpl6rE7R2bSNjoSfYdERk8nffmgtKQNhr5U/5eSJPI=.eyJjb250ZXh0Ijp7InVzZXIiOnsibGFuZ3V...

Signed request considerations:

-   Salesforce performs an HTTP POST or GET when invoking the Canvas app URL, depending on the Permitted Users value and whether the refresh token is returned.
-   Server-side code verifies and decodes the request.
-   After the app is invoked, you can request a signed request on demand by using the SDK.

-   **[Canvas App User Flow—Signed Request](atlas.en-us.platform_connect.meta/platform_connect/user_flow_signed_request.htm)**

-   **[Verifying and Decoding a Signed Request](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_unsigning_code_example.htm)**

-   **[Requesting a Signed Request](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_refresh_signed_request.htm)**
    If your canvas app is set to use signed request for authentication, you can request a signed request on demand by using the SDK. Your app can ask Salesforce to resend the signed request that was used when your app was loaded or to send a new signed request. Requesting a signed request is useful when you are refreshing an expired session or getting authentication information after your app has been redirected.

#### See Also

-   [Authentication](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_authentication.htm "When you create a Canvas app, you can use the signed request authentication method or the OAuth 2.0 authentication method.")

-   [Verifying and Decoding a Signed Request](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_unsigning_code_example.htm)

-   [Canvas App User Flow—Signed Request](atlas.en-us.platform_connect.meta/platform_connect/user_flow_signed_request.htm)

-   [Requesting a Signed Request](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_refresh_signed_request.htm "If your canvas app is set to use signed request for authentication, you can request a signed request on demand by using the SDK. Your app can ask Salesforce to resend the signed request that was used when your app was loaded or to send a new signed request. Requesting a signed request is useful when you are refreshing an expired session or getting authentication information after your app has been redirected.")

## Related Topics

- Canvas App User Flow—Signed Request (atlas.en-us.platform_connect.meta/platform_connect/user_flow_signed_request.htm)
- Verifying and Decoding a Signed Request (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_unsigning_code_example.htm)
- Requesting a Signed Request (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_refresh_signed_request.htm)
- Authentication (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_authentication.htm)
