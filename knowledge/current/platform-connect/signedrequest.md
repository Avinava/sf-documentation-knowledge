---
title: "SignedRequest"
domain: platform-connect
topic: signedrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.634Z
estimatedTokens: 347
keywords: [SignedRequest, Canvas, work, signed, requests]
---

# SignedRequest

> Canvas provides a SignedRequest object that has methods you can use to work with signed
    requests.

# SignedRequest

Canvas provides a SignedRequest object that has methods you can use to work with signed requests.

| Method | Signature | Description |
| --- | --- | --- |
| verifyAndDecode | public static CanvasRequest verifyAndDecode(String input, String secret) throws SecurityException | Used to verify and decode a signed request; returns a CanvasRequest Java object. |
| verifyAndDecodeAsJson | public static String verifyAndDecodeAsJson(String input, String secret) throws SecurityException | Used to verify and decode a signed request; returns the CanvasRequest data in a JSON string. |

#### See Also

-   [CanvasRequest](atlas.en-us.platform_connect.meta/platform_connect/canvas_request_object.htm)

-   [Verifying and Decoding a Signed Request](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_unsigning_code_example.htm)

-   [Requesting a Signed Request](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_refresh_signed_request.htm "If your canvas app is set to use signed request for authentication, you can request a signed request on demand by using the SDK. Your app can ask Salesforce to resend the signed request that was used when your app was loaded or to send a new signed request. Requesting a signed request is useful when you are refreshing an expired session or getting authentication information after your app has been redirected.")

## Related Topics

- CanvasRequest (atlas.en-us.platform_connect.meta/platform_connect/canvas_request_object.htm)
- Verifying and Decoding a Signed Request (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_unsigning_code_example.htm)
- Requesting a Signed Request (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_refresh_signed_request.htm)
