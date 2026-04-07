---
title: "POST /contacts/v1/establish"
domain: mc-apis
topic: post-contactsv1establish
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:21.718Z
estimatedTokens: 888
keywords: [POST, contacts, establish, Creates, contact, Key, provided, payload, **Overview**, Usage, Marketing, Cloud, Permissions, Fast, Fire]
---

# POST /contacts/v1/establish

> Creates or returns a contact using the Contact Key and Contact Type provided in the payload.

# POST /contacts/v1/establish

## **Overview**

Creates or returns a contact using the Contact Key and Contact Type provided in the payload.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| contactKeys | array | Required | String array of one or more contact keys. |
| contactType | number |  | The default contact type is "Default" or 0. Most users do not modify the default value. |
| returnResults | boolean |  | Indicates if the call returns results. The default value is true. |
| correlateResponseItem | boolean |  | Indicates if the result items' return order matches the request order. The default value is true. |
| includeNewContactAwareness | boolean |  | Indicates that the contact has never been included in the results before. The default value is true. |

## Usage

### Required Marketing Cloud Permissions

-   Contact Builder, Administer Contact Data Model
-   Contact Builder, Access

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/v1/establish
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "ContactKeys": ["Key1", "Key2"],
}
```

### Example Response

```js
HTTP/1.1 200 Success
[
      {
        "items": [
            {
                "value": {
                    "requestedContactKey": "key1",
                    "isNewContact": false,
                    "contactReference": {
                        "contactID": 295863490,
                        "contactType": "Default",
                        "contactKey": "key1",
                        "contactStatus": "Active"
                    }
                },
                "requestItemIndex": 0,
                "resultMessages": []
            },
            {
                "value": {
                    "requestedContactKey": "key2",
                    "isNewContact": false,
                    "contactReference": {
                        "contactID": 304574890,
                        "contactType": "Default",
                        "contactKey": "key2",
                        "contactStatus": "Active"
                    }
                },
                "requestItemIndex": 1,
                "resultMessages": []
            }
        ],
        "requestServiceMessageID": "53e4cbf8-b9b4-43d4-ba17-eedbfb0ffd90",
        "responseDateTime": "2018-02-26T15:06:45.4009365-06:00",
        "resultMessages": [],
        "serviceMessageID": "70082431-9a48-4e3e-8dc5-f318ec5c3665"
    }
]
```

### Example Fast Fire and Forget Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/v1/establish
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "ContactKeys": ["Key1", "Key2"],
    "ReturnResults": "false",
    "CorrelateResponseItem": "false",
    "IncludeNewContactAwareness": "false"
}
```

### Example Fast Fire and Forget Response

```js
HTTP/1.1 200 Success
[
      {
    "items": [],
    "requestServiceMessageID": "3e3e76bc-e824-44ff-8e16-463cb446c837",
    "responseDateTime": "2018-02-27T09:03:37.9793969-06:00",
    "resultMessages": [
        {
            "resultType": "Operational",
            "resultClass": "Information",
            "resultCode": "ResponseReturnsNotRequested",
            "message": "ServiceCommand.ResultsProcessing.Information",
            "data": "The data operation returned successfully but no results were requested to be returned. "
        }
    ],
    "serviceMessageID": "c76a245d-73b4-4150-9782-fd1d6769495d"
}
]
```

Last Updated: Jun 8, 2021
