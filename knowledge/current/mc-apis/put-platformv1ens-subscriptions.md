---
title: "PUT /platform/v1/ens-subscriptions"
domain: mc-apis
topic: put-platformv1ens-subscriptions
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:25.679Z
estimatedTokens: 706
keywords: [PUT, platform, ens-subscriptions, Updates, subscription, pause, active, status, paused, unpause, Always, supply, reason, Changes, made]
---

# PUT /platform/v1/ens-subscriptions

> Updates a single subscription. To pause an active subscription, set the status request parameter to paused. To unpause a paused subscription, set the status request parameter to active. Always supply a status reason in the request when you update the subscription status. Changes made to a subscripti

# PUT /platform/v1/ens-subscriptions

## **Overview**

Updates a single subscription. To pause an active subscription, set the status request parameter to paused. To unpause a paused subscription, set the status request parameter to active. Always supply a status reason in the request when you update the subscription status. Changes made to a subscription can take up to two minutes to become active.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| subscriptionId | string | Required | Unique identifier for the subscription to update. |
| eventCategoryTypes | array | Required | Comma-separated list of fully qualified event types for which you’re requesting notifications. Expressed as NotificationEventCategory.NotificationEventType. Review Supported Notification Events for a list of supported event categories and types. |
| filters | array |  | Each string in the array is a key=value pair to filter on. Review Subscription Filters for a list of data items available for filtering. |
| subscriptionName | string |  | Name of the subscription. This name must be unique. |
| status | string |  | Indicates the status of the callback subscription. Can be set to either active or paused. You can only pause active callback subscriptions. You can only make paused callback subscriptions active. |
| statusReason | string |  | Describes why you changed the status. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /platform/v1/ens-subscriptions
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

[{
  "subscriptionName": "subscriptionName1",
  "eventCategoryTypes": ["TransactionalSendEvents.EmailNotSent",
  "TransactionalSendEvents.EmailSent"],
  "subscriptionId": "55afe59f-8d20-46fd-a2d1-ff01453abe90",
         "filters": ["definitionKey=12345"],
         "status": "paused",
         "statusReason": "max retries exhausted trying to post to callback url"
}]
```

### Example Response

```js
HTTP/1.1 200 OK
[{
  "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
  "callbackName": "cb1",
  "url": "https://example.com/",
  "maxBatchSize": 1000,
  "status": "paused",
  "statusReason": "max retries exhausted trying to post to callback url"
  "subscriptionName": "subscriptionName1",
  "eventCategoryTypes": ["TransactionalSendEvents.EmailNotSent",
  "TransactionalSendEvents.EmailSent"],
  "subscriptionId": "d89c87c4-70f8-43d6-be1e-f01dce97fe4c",
  "filters": ["definitionKey=12345"]
}]
```

### HTTP Responses

| Response | Reason |
| --- | --- |
| 200 OK | Callback description updated. Review example response. |
| 304 No Change | Update already exists on the server. |
| 400 Bad Request | Invalid request |
| 403 Forbidden | Failed to pass authorization. |
| 500 Server Error | Internal error |

Last Updated: Jun 8, 2021
