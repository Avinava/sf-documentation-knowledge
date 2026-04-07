---
title: "POST /platform/v1/ens-callbacks"
domain: mc-apis
topic: post-platformv1ens-callbacks
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:15.910Z
estimatedTokens: 640
keywords: [POST, platform, ens-callbacks, Registers, new, callback, receive, event, notifications, Verify, subscription, **Overview**, HTTP, Responses, Items]
---

> Registers a new callback to receive event notifications. Verify your callback before you can use it in a subscription.

# POST /platform/v1/ens-callbacks

## **Overview**

Registers a new callback to receive event notifications. Verify your callback before you can use it in a subscription.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| callbackName | string | Required | Name of the callback. |
| url | string | Required | HTTPS URL of the customer callback that receives event notifications in the format `https://host`[/path]. A URL port and query string are not supported. The URL must be syntactically correct and not already registered. If the URL is already registered as a callback, an error occurs. |
| maxBatchSize | integer |  | Maximum number of events that this callback can receive in a single call. Must be at least 100 and no more than 1,000. Default is 1,000. |

## Usage

> Your URL endpoint must be online and reachable before you create a callback. The Event Notification Service immediately attempts to post verification details to the endpoint.

If your callback doesn’t respond within 30 seconds or returns a non-200 HTTP status, the callback creation fails with a 400 HTTP status and the reason for the failure similar to the following.

```
"MCMS_UWH_Runtime_GeneralFailure_probeCallbackLiveness: CallbackId is 08b67f0e-5be8-4673-97e9-682c133f778c. Could not verify callback url `'https://example.com'`. Please test that the url is reachable with a https POST call and returns a 200 http status code. To retry please delete the callback and create it again. Status: NameResolutionFailure. The remote name could not be resolved: 'example.com'"
```

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /platform/v1/ens-callbacks
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

[{
  "callbackName": "cb1",
  "url": "https://example.com/",
  "maxBatchSize": 1000
}]
```

### Example Response

```js
HTTP/1.1 201 Created
[{
  "callbackName": "cb1",
  "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
  "url": "https://example.com/",
  "signatureKey":"V27FXfqI3DnhfQW1bhFDeJixpt8eDAY5R24UJI3cK6M=",
  "maxBatchSize": 1000
}]
```

### HTTP Responses

| Response | Reason |
| --- | --- |
| 201 Created | Callback created. Review example response. |
| 304 No Change | Callback already exists on the server. |
| 400 Bad Request | Unable to process the request. |
| 403 Forbidden | Failed to pass authorization. |
| 500 Server Error | Internal error |

## Related Items

-   [Verify Callback](atlas.en-us.noversion.mc-apis.meta/mc-apis/verifyCallback.htm)

Last Updated: Jun 8, 2021

## Related Topics

- Verify Callback (atlas.en-us.noversion.mc-apis.meta/mc-apis/verifyCallback.htm)
