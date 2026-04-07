---
title: "POST /platform/v1/ens-subscriptions"
domain: mc-apis
topic: post-platformv1ens-subscriptions
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:20.907Z
estimatedTokens: 647
keywords: [POST, platform, ens-subscriptions, Creates, subscription, event, receive, notifications, callback, webhook, new, take, two, minutes, become]
---

# POST /platform/v1/ens-subscriptions

> Creates a single subscription. A subscription indicates which event types to receive notifications for and which callback, or webhook, to receive them on. A new subscription can take up to two minutes to become active. You can create a subscription only for a verified callback and up to 200 subscrip

# POST /platform/v1/ens-subscriptions

## **Overview**

Creates a single subscription. A subscription indicates which event types to receive notifications for and which callback, or webhook, to receive them on. A new subscription can take up to two minutes to become active. You can create a subscription only for a verified callback and up to 200 subscriptions per callback.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| subscriptionName | string | Required | Name of the subscription. This name must be unique. |
| callbackId | string | Required | Unique identifier of the callback that receives the notification events. This callback must already exist and must be verified. |
| eventCategoryTypes | array | Required | Comma-separated list of fully qualified event types for which you’re requesting notifications. Expressed as NotificationEventCategory.NotificationEventType. Review Supported Notification Events for a list of supported event categories and types. |
| filters | array |  | Each string in the array is a key:value pair to filter on. Review Subscription Filters for a list of data items available for filtering. |

## Usage

> The subscription you create is in active status, and event notifications are sent to the associated callback. Ensure that the callback you specify is ready to receive events before creating a subscription for it.

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /platform/v1/ens-subscriptions
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

[{
  "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
  "subscriptionName": "sub1",
  "eventCategoryTypes": ["TransactionalSendEvents.EmailNotSent",
  "TransactionalSendEvents.EmailSent"],
  "filters": ["definitionKey=12345"]
}]
```

### Example Response

```js
HTTP/1.1 201 Created
[{
  "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
  "callbackName": "cb1",
  "subscriptionName": "sub1",
  "eventCategoryTypes": ["TransactionalSendEvents.EmailNotSent",
  "TransactionalSendEvents.EmailSent"],
  "subscriptionId": "d89c87c4-70f8-43d6-be1e-f01dce97fe4c",
  "filters": ["definitionKey=12345"],
  "status": "active"
}]
```

### HTTP Responses

Last Updated: Jun 8, 2021

| Response | Reason |
| --- | --- |
| 201 Created | Subscription is created. Review example response. |
| 304 No Change | Subscription already exists on the server. |
| 400 Bad Request | Invalid request |
| 403 Forbidden | Failed to pass authorization. |
| 404 Not Found | Callback ID doesn't exist. |
| 500 Server Error | Internal error |
