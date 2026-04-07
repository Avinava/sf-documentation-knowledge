---
title: "POST /interaction/v1/events"
domain: mc-apis
topic: post-interactionv1events
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:18.195Z
estimatedTokens: 307
keywords: [POST, interaction, events, Fires, entry, event, initiates, journey, UTF-8, characters, payload, Rest, API, change, Content-Type, application, json, charset=UTF-8, **Overview**]
---

> Fires the entry event that initiates the journey. If you use UTF-8 characters in a payload for the Rest API, change the Content-Type header to: application/json; charset=UTF-8.

# POST /interaction/v1/events

## **Overview**

Fires the entry event that initiates the journey. If you use UTF-8 characters in a payload for the Rest API, change the Content-Type header to: application/json; charset=UTF-8.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| ContactKey | string | Required | The ID that uniquely identifies a subscriber/contact |
| EventDefinitionKey | string | Required | Find the EventDefinitionKey in Event Administration after the event is created and saved. This is true for both standard and custom events. Do not include a period in the event definition key. |
| Data | object |  | Properties of the event. Only required if defined in a custom event or by the event. |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /interaction/v1/events
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "ContactKey": "ID601",
    "EventDefinitionKey":"AcmeBank-AccountAccessed",
    "Data": {
        "accountNumber":"123456",
        "patronName":"John Smith" }
}
```

**Example Response**

```js
HTTP/1.1 201
{
     "eventInstanceId": "########-####-####-####-############"
}
```

Last Updated: Jun 8, 2021
