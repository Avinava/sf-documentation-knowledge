---
title: "POST /platform/v1/ens-verify"
domain: mc-apis
topic: post-platformv1ens-verify
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.098Z
estimatedTokens: 757
keywords: [POST, platform, ens-verify, Verifies, callback, receive, notifications, **Overview**, HTTP, Responses]
---

> Verifies a callback so that it can receive notifications.

# POST /platform/v1/ens-verify

## **Overview**

Verifies a callback so that it can receive notifications.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| callbackId | string | Required | Unique identifier of the callback. |
| verificationKey | string | Required | Unique, single-use verification code for the callback. Supplied during callback creation via an HTTPS POST. |

## Usage

The Event Notification Service requires a two-step verification process for registering a callback. Two-step verification ensures that the stream of event notifications can’t be used to attack an external URL endpoint. To achieve this security, the URL endpoint must have a critical role in the verification process. Therefore, it’s the only receiver of the single-use verification key needed to complete callback verification.

In callback verification, a unique, single-use verification key is generated when you create a callback and is sent to the callback URL that you registered using the create callback route. The payload that is posted to the callback URL is the same payload used to call the verify callback route.

```
{
     "callbackId": "<callbackIDString>",
     "verificationKey": “<verificationKeyString>"
}
```

The URL endpoint must do one of the following.

-   Capture verification details, including the verification key, and immediately return them by calling the verify callback route.
-   Capture verification details, including the verification key, in a way that allows a developer to manually call the verify callback route.

If you choose to allow manual verification, use the following code in your callback implementation to log the verification details.

```apex
JSONObject req = new JSONObject(<httprequest>);

if (req.getString("verificationKey") != null) {
   System.out.println("Verification details: " + <httprequest>);
   // return HTTP 200 code
} else {
   // Do notification processing
}
```

To manually verify the callback, use the logged verification details to invoke the verify callback route.

```
curl -X POST \
 https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com/platform/v1/ens-verify \
 -H 'Authorization: Bearer BEARER_TOKEN' \
 -H 'Content-Type: application/json' \
 -d '{
   "callbackId": "<callbackIDString>",
   "verificationKey": "<verificationKeyString>"
}'
```

Ensure that your callback completes verification within four hours.

### Example Request

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /platform/v1/ens-verify
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
  "verificationKey": "CZwJw4XATH6LK1fPWFeMDkIyVbro6T3ijXK8CrzQe2s="
}
```

### HTTP Responses

| Response | Reason |
| --- | --- |
| 200 OK | Callback successfully verified |
| 400 Bad Request | Invalid request |
| 403 Forbidden | Failed to pass authorization. |
| 404 Not Found | Incorrect callback ID, verification key, or both. |
| 500 Server Error | Internal error |

Last Updated: Jun 8, 2021
