---
title: "Requesting a Signed Request"
domain: platform-connect
topic: requesting-a-signed-request
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.271Z
estimatedTokens: 1049
keywords: [Requesting, Signed, canvas, app, authentication, demand, SDK, ask, Salesforce, resend, loaded, send, new, useful, refreshing]
---

# Requesting a Signed Request

> If your canvas
app is set to use signed request for authentication, you can request
a signed request on demand by using the SDK. Your app can ask Salesforce to
resend the signed request that was used when your app was loaded or
to send a new signed request. Requesting a signed request is useful
when you are refreshing an expired session or getting authentication
information after your app has been redirected.

# Requesting a Signed Request

If your canvas app is set to use signed request for authentication, you can request a signed request on demand by using the SDK. Your app can ask Salesforce to resend the signed request that was used when your app was loaded or to send a new signed request. Requesting a signed request is useful when you are refreshing an expired session or getting authentication information after your app has been redirected.

You can request a signed request on demand by using the refreshSignedRequest() or repost() JavaScript methods in the SDK. refreshSignedRequest() returns a new signed request via a callback, while repost() asks the parent window to initiate a new POST to your canvas app and reloads the app page with a refreshed signed request.

Use these methods whenever you need to refresh the signed request for your app. Here are some example scenarios where you might need to refresh the signed request information.

-   The OAuth token within a signed request typically expires after two hours. If the OAuth token has expired, and you need to make additional API requests, you can call refreshSignedRequest() to get a new OAuth token without interrupting the user.
-   Canvas apps might need to use redirects, particularly when trying to provide single sign-on functionality across multiple systems. If your canvas app uses redirects, the redirect URL will not receive the original request body that contains the initial signed request information. You can use the new methods to request the signed request again.
-   In Summer ’14 and later, canvas apps can be user-approved apps. If your user-approved app has not been approved by the user, your app will not get an initial signed request POST. Instead, your app will need to be approved through OAuth, and then you can call repost() to get the signed request.

Your canvas app must be configured to use signed request for authentication to use these methods. You’ll also need to reference canvas-all.js in your JavaScript code, as described in [Referencing the Canvas SDK](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_referencing_sdk.htm).

After a request succeeds, your canvas app must verify the returned [SignedRequest](atlas.en-us.platform_connect.meta/platform_connect/signed_request_object.htm) information. For more information on verifying signed request information that is received from Salesforce, see [Verifying and Decoding a Signed Request](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_unsigning_code_example.htm).

## Using refreshSignedRequest() to Obtain a Signed Request

Use refreshSignedRequest() to request a new signed request via a callback that you provide. In this example, refreshSignedRequest() is called with a callback that checks the response code and then parses the signed request into the hashed Based64 context that is signed with the consumer secret and the Base64 encoded context itself.

```

```

## Using repost() to Obtain a Signed Request

Use repost() to instruct the parent window to send a new POST to your canvas app URL. The POSTcontains the signed request that was used when your app was loaded or a new signed request. Unlike refreshSignedRequest(), using repost() reloads the canvas app page. The following example calls repost(), asking for the original signed request.

```

```

The following example calls repost(), asking for a new signed request.

```

```

#### See Also

-   [Signed Request Authentication](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_signed_req_authentication.htm "Signed request is the default authorization method for Canvas apps. The signed request authorization flow varies depending on whether the administrator gives users access to the Canvas app or if users can self-authorize. You can verify signed request information with a client secret, then use signed requests to customize the app and make subsequent calls to Salesforce.")

-   [SignedRequest](atlas.en-us.platform_connect.meta/platform_connect/signed_request_object.htm)

-   [Verifying and Decoding a Signed Request](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_unsigning_code_example.htm)

## Code Examples

```
// Gets a signed request on demand.
    Sfdc.canvas.client.refreshSignedRequest(function(data) {
        if (data.status === 200) {
            var signedRequest =  data.payload.response;
            var part = signedRequest.split('.')[1];
            var obj = JSON.parse(Sfdc.canvas.decode(part));
        }
    }
```

```
// Gets a signed request on demand, without refreshing the signed request.
    Sfdc.canvas.client.repost();
```

```
// Gets a signed request on demand, first by refreshing the signed request.
    Sfdc.canvas.client.repost({refresh : true});
```

## Related Topics

- Referencing the Canvas SDK (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_referencing_sdk.htm)
- SignedRequest (atlas.en-us.platform_connect.meta/platform_connect/signed_request_object.htm)
- Verifying and Decoding a Signed Request (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_unsigning_code_example.htm)
- Signed Request Authentication (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_signed_req_authentication.htm)
