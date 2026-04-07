---
title: "GET /ott/v1/send/{messageId}"
domain: mc-apis
topic: get-ottv1sendmessageid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:20.001Z
estimatedTokens: 741
keywords: [ott, send, messageId, Retrieves, message, **Overview**, Usage, Retrieve, Messenger, LINE]
---

# GET /ott/v1/send/{messageId}

> Retrieves all the information about an existing OTT send message request.

# GET /ott/v1/send/{messageId}

## **Overview**

Retrieves all the information about an existing OTT send message request.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| messageId | string | Required | Id of the send request to be retrieved. Id can be user-defined MessageKey or ottRequestId returned as a response to send message request. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /ott/v1/send/812ed7d7-f11c-43dd-9eaa-b32ca3264278
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response: Retrieve a Send Message Request to Messenger

```
HTTP/1.1 200 OK

{
    "requestBody": {
        "messageKey": "e1c3514160f969e52b0d",
        "ottRequestId": "942adfff-817e-4276-bca6-c1cbcd7b6241",
        "from": {
            "senderType": "messenger",
            "senderId": "200012913364042"
        },
        "to": {
            "ottId": "1061820367222105"
        },
        "message": {
            "subject": "Message Name",
            "contents": [
                {
                    "type": "text",
                    "text": "Hello, Messenger World!",
                    "duration": 0,
                    "isReusable": false
                }
            ],
            "customKeys": [
                {
                    "messagingType": "RESPONSE"
                }
            ]
        },
        "validityPeriod": 30
    },
    "status": [
        {
            "event": "Created",
            "eventDateTime": "2018-05-24T13:36:52.747"
        },
        {
            "event": "Queued",
            "eventDateTime": "2018-05-24T13:37:01.29"
        },
        {
            "event": "Sent",
            "eventDateTime": "2018-05-24T13:37:01.337"
        }
    ]
}
```

### Example Response: Retrieve Send Message Request to LINE

```
HTTP/1.1 200 OK

{
    "requestBody": {
        "messageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
        "ottRequestId": "2dd53e4a-56a5-497a-b5f2-1a34187e1641",
        "from": {
            "senderType": "line",
            "senderId": "1415451353"
        },
        "to": {
            "ottId": "U0098560c6da67ea9cab11d4405e3c018"
        },
        "message": {
            "subject": "Message Name",
            "contents": [
                {
                    "type": "text",
                    "text": "Hello, LINE World!",
                    "duration": 0,
                    "isReusable": false
                }
            ],
            "customKeys": []
        },
        "validityPeriod": 30
    },
    "status": [
        {
            "event": "Created",
            "eventDateTime": "2018-05-24T14:58:14.36"
        },
        {
            "event": "Queued",
            "eventDateTime": "2018-05-24T14:58:15.01"
        },
        {
            "event": "Sent",
            "eventDateTime": "2018-05-24T14:58:15.337"
        }
    ]
}
```

Last Updated: Jun 8, 2021
