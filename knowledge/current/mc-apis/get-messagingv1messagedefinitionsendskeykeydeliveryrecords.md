---
title: "GET /messaging/v1/messageDefinitionSends/key:{key}/deliveryRecords"
domain: mc-apis
topic: get-messagingv1messagedefinitionsendskeykeydeliveryrecords
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.886Z
estimatedTokens: 558
keywords: [messaging, messageDefinitionSends, key, deliveryRecords, delivery, email, sent, **Overview**]
---

> Gets the delivery details of an email sent using the MessageDefinitionSends.

# GET /messaging/v1/messageDefinitionSends/key:{key}/deliveryRecords

## **Overview**

Gets the delivery details of an email sent using the MessageDefinitionSends.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| ObjectID | GUID | Required | The ID of the entry event send definition, included in URL as id:your ID value here or just the ID. Either this or the external key is required. |
| key | string | Required | External key of the entry event send definition. Either this or the ObjectID is required. |
| RecipientSendId | GUID | Required | The RecipientSendId value returned from the /messageDefinitionSends send service, which is the unique identifier for a single email send. |

### Usage

**Example Request Using Send ID**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /messaging/v1/messageDefinitionSends/dfa5ab87-1b0f-e211-b71b-9c8e9920e9fc/deliveryRecords/a7038ea5-51b7-4574-ac22-183654378dd2
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Request Using Send ID**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /messaging/v1/messageDefinitionSends/key:external_key/deliveryRecords/a7038ea5-51b7-4574-ac22-183654378dd2
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 200 OK
{
    "deliveryTime": "2014-09-18T07:38:34.943",
    "id": "bd52a488-2f5c-de11-92ee-001cc494ae9e",
    "messageId": "a7038ea5-51b7-4574-ac22-183654378dd2",
    "status": "Sent",
    "to": {
        "address": "example@example.com",
        "id": 195711367,
        "key": "example@example.com"
    }
}
```

**Example Queued Response**

```js
HTTP/1.1 200 OK
{
   "id": "bd52a488-2f5c-de11-92ee-001cc494ae9e",
   "messageId": "ea0ebbe0-59fa-4f4d-a0fb-eda2fbda1052"</span>,
   "status": "Queued"
}
```

**Example Error Response**

```js
HTTP/1.1 200 OK
{
   "id": "bd52a488-2f5c-de11-92ee-001cc494ae9e",
   "messageId": "d74f4d52-e5d9-42ef-9999-8d24a68be89b",
   "status": "Error",
   "to":    {
        "address": "",
        "id": 0,
        "key": ""
   },
   "messageErrors": [{"messageErrorStatus": "The subscriber was excluded by List Detective."}]
}
```

Last Updated: Jun 8, 2021
