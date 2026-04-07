---
title: "POST /messaging/v1/messageDefinitionSends/{triggeredSendDefinitionId}/send"
domain: mc-apis
topic: post-messagingv1messagedefinitionsendstriggeredsenddefinitionidsend
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.879Z
estimatedTokens: 1506
keywords: [POST, messaging, messageDefinitionSends, triggeredSendDefinitionId, send, transactional, email, Marketing, Cloud's, triggered, functionality, order, service, configure, definition, Studio, documentation, managed, REST, API, revie, **Overview**]
---

> Sends transactional email using Marketing Cloud's triggered send functionality. In order to use this service, configure a triggered send definition in Email Studio. This documentation applies only to triggered sends that are managed in Email Studio. To use the transactional messaging REST API, revie

# POST /messaging/v1/messageDefinitionSends/{triggeredSendDefinitionId}/send

## **Overview**

Sends transactional email using Marketing Cloud's triggered send functionality. In order to use this service, configure a triggered send definition in Email Studio. This documentation applies only to triggered sends that are managed in Email Studio. To use the transactional messaging REST API, review [Transactional Messaging API](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/transactional-messaging-api.htm).

| Name | Type |  | Description |
| --- | --- | --- | --- |
| ObjectID | GUID | Required | ID of the entry event send definition that comes from the response when creating a TriggeredSendDefinition. Either this or the external key is required. |
| key | string | Required | External key of the entry event send definition. Either this or the ObjectID is required. |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| From | object |  | Object containing email address and name of sender. |
| From.Address | string |  | Email address that will show as the sender. |
| From.Name | string |  | Name of the sender. |
| To | object | Required | Object requiring email address and optional subscriber parameters passed in at send time. |
| To.Address | string | Required | Email address of the message recipient. |
| To.SubscriberKey | string | Required | Unique identifier defined for the message recipient. |
| To.ContactAttributes | object |  | The profile attributes setup determines the attributes that can be passed in. |
| To.ContactAttributes.SubscriberAttributes | object |  | Name and value pairs for subscriber attributes defined for the message. |
| Options | object |  | Object used to specify asynchronous or synchronous. If not specified, defaults to asynchronous. |
| Options.RequestType | string |  | Valid values ASYNC and SYNC. Default value when not defined is ASYNC. Determines if the request is processed asychronously. |

### Usage

**Example Asynchronous Request Using Send ID**

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/messageDefinitionSends/dfa5ab87-1b0f-e211-b71b-9c8e9920e9fc/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "From": {
        "Address": "code@exacttarget.com",
        "Name": "Code@"
    },
    "To": {
        "Address": "example@example.com",
        "SubscriberKey": "example@example.com",
        "ContactAttributes": {
            "SubscriberAttributes": {
                "Region": "West",
                "City": "Indianapolis",
                "State": "IN"
            }
        }
    },
    "Options": {
        "RequestType": "ASYNC"
    }
}
```

**Example Asynchronous Request Using Customer Key**

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/messageDefinitionSends/key:external_key/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "From": {
        "Address": "code@exacttarget.com",
        "Name": "Code@"
    },
    "To": {
        "Address": "example@example.com",
        "SubscriberKey": "example@example.com",
        "ContactAttributes": {
            "SubscriberAttributes": {
                "Region": "West",
                "City": "Indianapolis",
                "State": "IN"
            }
        }
    },
    "Options": {
        "RequestType": "ASYNC"
    }
}
```

**Example Synchronous Request Using Send ID**

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/messageDefinitionSends/dfa5ab87-1b0f-e211-b71b-9c8e9920e9fc/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "From": {
        "Address": "code@exacttarget.com",
        "Name": "Code@"
    },
    "To": {
        "Address": "example@example.com",
        "SubscriberKey": "example@example.com",
        "ContactAttributes": {
            "SubscriberAttributes": {
                "Region": "West",
                "City": "Indianapolis",
                "State": "IN"
            }
        }
    },
    "Options": {
        "RequestType": "SYNC"
    }
}
```

**Example Synchronous Request Using Customer Key**

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/messageDefinitionSends/key:cust_key/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "From": {
        "Address": "code@exacttarget.com",
        "Name": "Code@"
    },
    "To": {
        "Address": "example@example.com",
        "SubscriberKey": "example@example.com",
        "ContactAttributes": {
            "SubscriberAttributes": {
                "Region": "West",
                "City": "Indianapolis",
                "State": "IN"
            }
        }
    },
    "Options": {
        "RequestType": "SYNC"
    }
}
```

**Example Response (Asynchronous)**

Queued status for an asynchronous request means that the request is accepted for processing. Refer to [Get Email Delivery Details](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/messageDefinitionSendsDeliveryRecords.htm) for the final message request status.

```
HTTP/1.1 202 Accepted
{
   "requestId": "e2ddb203-ea53-4843-b2d4-9f8c0c862913",
   "responses": [   {
      "recipientSendId": "e2ddb203-ea53-4843-b2d4-9f8c0c862913",
      "hasErrors": false,
      "messages": ["Queued"]
   }]
}
```

**Error Response (Synchronous)**

```
HTTP/1.1 202 Accepted
{
   "requestId": "21977680-17e1-469d-9162-bd3f20149cbb",
   "responses": [   {
   "recipientSendId": "21977680-17e1-469d-9162-bd3f20149cbb",
      "hasErrors": true,
      "messageErrors": [      {
         "messageErrorCode": 180008,
         "messageErrorStatus": "Unable to queue Triggered Send request. There are no valid subscribers."
      }]
   }]
}
```

**Error Response**

```
HTTP/1.1 202 Accepted
{
    "recipientSendId": "",
    "hasErrors": true,
    "messages": ["InvalidOrMissingToAddress"]
}
```

Last Updated: Jun 8, 2021
