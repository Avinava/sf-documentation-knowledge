---
title: "POST /messaging/v1/email/definitions"
domain: mc-apis
topic: post-messagingv1emaildefinitions
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:20.899Z
estimatedTokens: 1445
keywords: [POST, messaging, email, definitions, **Overview**, Usage, HTTP, Responses]
---

# POST /messaging/v1/email/definitions

# POST /messaging/v1/email/definitions

## **Overview**

Creates a long-living send definition object that references the email template, subscriber list, sending options, journey, and metadata. A send definition is referenced in the transactional messaging API when triggering a send to recipients. We recommend that you create one definition for each type of email or use-case. In other words, create a definition for a group of email requests, because there is a limit on the number of definitions you can create.

The transactional send definition will remain synchronized to the transactional send journey (when journey.interactionKey is provided) whether you manage the send definition through this API or the Journey Builder canvas.

NOTE: You cannot create and manage transactional send journeys using the Journey Builder API (interactions/v1/interaction/{journeyId}).

You can create only up to 500 total email transactional send definitions plus email triggered send definitions in a seven-day period for one business unit. So don't create a definition for each send request that you trigger. This limit applies to send definitions created in the Marketing Cloud application and via API. It doesn’t apply to the Journey Builder email activity triggered send definition.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| definitionKey | string | Required | Unique, user-generated key to access the definition object. |
| name | string | Required | Name of the definition. Must be unique. |
| content.customerKey | string | Required | Unique identifier of the content asset. |
| status | string |  | Operational state of the definition: active, inactive, or deleted. A message sent to an active definition is processed and delivered. A message sent to an inactive definition isn’t processed or delivered. Instead, the message is queued for later processing for up to three days. |
| description | string |  | User-provided description of the send definition. |
| classification | string |  | Marketing Cloud external key of a sending classification defined in Email Studio Administration. Only transactional classifications are permitted. Default is default transactional. |
| subscriptions.list | string | Required | Marketing Cloud external key of the list or all subscribers. Contains the subscriber keys and profile attributes. |
| subscriptions.dataExtension | string |  | Marketing Cloud external key of the triggered send data extension. Each request inserts as a new row in the data extension. To deduplicate at send time, use messageKey. Don’t use a primary key on the triggered send data extension. |
| subscriptions.autoAddSubscriber | boolean |  | Adds the recipient’s email address and contact key as a subscriber key to subscriptions.list. Default is true. |
| subscriptions.updateSubscriber | boolean |  | Updates the recipient’s contact key as a subscriber key with the provided email address and profile attributes to subscriptions.list. Default is true. |
| options.trackLinks | boolean |  | Wraps links for tracking and reporting. Default is true. |
| options.cc | array |  | Include CC email addresses with every send. To CC dynamically at send time, create a profile attribute and use the %%attribute%% syntax. |
| options.bcc | array |  | Include BCC email addresses with every send. To BCC dynamically at send time, create a profile attribute and use the %%attribute%% syntax. |
| options.createJourney | boolean |  | A value of true updates the send definition to make it available in Journey Builder as a Transactional Send Journey. After the definition is tied to a Transactional Send Journey, the definition remains part of Journey Builder. You can’t unlink a journey from a definition without recreating the transactional send definition. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/email/definitions/
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "definitionKey": "2FA_order_accounts",
  "status": "Active",
  "name": "My Unique Definition Name",
  "description": "Created via REST",
  "classification": "Default Transactional",
  "content": {
    "customerKey": "bebf8650-137a-494c-8727-cdeb32534961"
  },
  "subscriptions": {
    "list": "test-list",
    "dataExtension": "test-de",
    "autoAddSubscriber": true,
    "updateSubscriber": true
  },
  "options": {
    "trackLinks": true,
    "cc": ["cc_address@example.com"],
    "bcc": ["bcc_address@example.com"]
    "createJourney": true
  }
}
```

### Example Response

```js
HTTP/1.1 201 Created
{
  "requestId": "1f1e8755-819b-424d-a914-e066b5ba20f8",
  "name": "My Unique Definition Name",
  "definitionKey": "2FA_order_accounts",
  "definitionId": "c13a2f02-2e02-e911-80e9-1402ec6b9711",
  "description": "Created via REST",
  "classification": "Default Transactional",
  "status": "Active",
  "createdDate": "2018-12-17T13:00:00",
  "modifiedDate": "2018-12-31T09:52:00",
  "content": {
    "customerKey": "bebf8650-137a-494c-8727-cdeb32534961"
  },
  "subscriptions": {
    "dataExtension": "test-de",
    "list": "test-list",
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
     "interactionKey": "9995e819-728b-43ca-822a-f912070ab7cf"
  }
}
```

### HTTP Responses

| Response | Reason |
| --- | --- |
| 201 Created | Send definition is created. Review example response. |
| 409 Conflict | Send definition already exists on the server |
| 400 Bad Request | Invalid request |
| 403 Forbidden | Failed to pass authorization. |
| 500 Server Error | Internal error |

Last Updated: Jun 8, 2021
