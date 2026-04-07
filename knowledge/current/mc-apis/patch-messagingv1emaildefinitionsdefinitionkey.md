---
title: "PATCH /messaging/v1/email/definitions/{definitionKey}"
domain: mc-apis
topic: patch-messagingv1emaildefinitionsdefinitionkey
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:20.895Z
estimatedTokens: 1071
keywords: [PATCH, messaging, email, definitions, definitionKey, Updates, specific, message, definition, **Overview**, HTTP, Responses]
---

> Updates a specific message definition.

# PATCH /messaging/v1/email/definitions/{definitionKey}

## **Overview**

Updates a specific message definition.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| definitionKey | string | Required | Unique identifier of the definition. |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| name | string | Required | Name of the definition. Must be unique. |
| content.customerKey | string | Required | Unique identifier of the content asset. |
| status | string |  | Operational state of the definition: active, inactive, or deleted. A message sent to an active definition is processed and delivered. A message sent to an inactive definition isn’t processed or delivered. Instead, the message is queued for later processing for up to three days. |
| description | string |  | User-provided description of the send definition. |
| classification | string |  | Marketing Cloud external key of a sending classification defined in Email Studio Administration. Only transactional classifications are permitted. Default is default transactional. |
| subscriptions.list | string | Required | Marketing Cloud external key of the list or all subscribers. Contains the subscriber keys and profile attributes. |
| subscriptions.dataExtension | string |  | Marketing Cloud external key of the triggered send data extension. Each request inserts as a new row in the data extension. |
| subscriptions.autoAddSubscriber | boolean |  | Adds the recipient’s email address and contact key as a subscriber key to subscriptions.list. Default is true. |
| subscriptions.updateSubscriber | boolean |  | Updates the recipient’s contact key as a subscriber key with the provided email address and profile attributes to subscriptions.list. Default is true. |
| options.trackLinks | boolean |  | Wraps links for tracking and reporting. Default is true. |
| options.cc | array |  | Include CC email addresses with every send. To CC dynamically at send time, create a profile attribute and use the %%attribute%% syntax. |
| options.bcc | array |  | Include BCC email addresses with every send. To BCC dynamically at send time, create a profile attribute and use the %%attribute%% syntax. |
| options.createJourney | boolean |  | A value of true makes the send definition available in Journey Builder as a Transactional Send Journey. After the definition is tied to a Transactional Send Journey, the definition remains part of Journey Builder. You can’t unlink a journey from a definition without recreating the transactional send definition. |

## Usage

Use this call to update a specific message definition.

If you want your existing definition to appear as a Transactional Send Journey, update the definition using the “createJourney”:true option.

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PATCH /messaging/v1/email/definitions/2FA_order_accounts
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "status": "Inactive",
  "description": "description updated",
  "options": {
    "cc": [],
    "bcc": ["bcc_address@example.com"]
    "createJourney": true
  }
}
```

### Example Response

```js
HTTP/1.1 200 OK
{
  "requestId": "1f1e8755-819b-424d-a914-e066b5ba20f8",
  "name": "My Unique Definition Name",
  "definitionKey": "2FA_order_accounts",
  "definitionId": "c13a2f02-2e02-e911-80e9-1402ec6b9711",
  "description": "description updated",
  "classification": "Default Transactional",
  "status": "Active",
  "createdDate": "2018-12-17T13:00:00",
  "modifiedDate": "2018-12-31T09:52:00",
  "content": {
    "customerKey": "bebf8650-137a-494c-8727-cdeb32534961"
  },
  "subscriptions": {
    "dataExtension": "test-de",
    "list": "test-list"
    "autoAddSubscriber": true,
    "updateSubscriber": true
  },
 "options": {
    "trackLinks": true,
    "bcc": [
      "bcc_address@example.com"
    ],
    "cc": [
      "cc_address@example.com"
    ]
  },
  "journey": {
     "interactionKey": "81bcd4b9-10b0-47c2-be8e-fce576c8110c"
  }
}
```

### HTTP Responses

| Response | Reason |
| --- | --- |
| 200 OK | Send definition is updated. Review example response. |
| 400 Bad Request | Invalid request |
| 403 Forbidden | Failed to pass authorization. |
| 500 Server Error | Internal error |

Last Updated: Jun 8, 2021
