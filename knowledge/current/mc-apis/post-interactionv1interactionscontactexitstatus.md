---
title: "POST /interaction/v1/interactions/contactexit/status"
domain: mc-apis
topic: post-interactionv1interactionscontactexitstatus
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:20.689Z
estimatedTokens: 512
keywords: [POST, interaction, interactions, contactexit, status, remove, contact, journey, versions, **Overview**, Usage]
---

# POST /interaction/v1/interactions/contactexit/status

> Returns the status of a request to remove a contact from a journey or from one or more versions of a journey.

# POST /interaction/v1/interactions/contactexit/status

## **Overview**

Returns the status of a request to remove a contact from a journey or from one or more versions of a journey.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| ContactKey | string | Required | ID that uniquely identifies a subscriber or contact. Include a single contact or an array of up to 50 contacts. |
| DefinitionKey | string | Required | Customer Key that uniquely identifies the journey. This key is the same for all versions of the journey. |
| Versions | array |  | One or more versions of a journey from which to remove a contact. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /interaction/v1/interactions/contactexit/status
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

[
    {
        "ContactKey": "CONTACTKEY 1",
        "DefinitionKey": "DEFINITIONKEY"
    },
    {
        "ContactKey": "CONTACTKEY 2",
        "DefinitionKey": "INVALID DEFINITIONKEY",
        "Versions" :[1,2]
    }
]
```

### Example Response

```js
HTTP/1.1 200 Accepted
[
    {
        "contactKey": "CONTACTKEY 1",
        "definitionKey": "DEFINITIONKEY",
        "status": [
            {
                "version": 1,
                "message": "Exit process Completed.",
                "definitionInstanceId": "423698a6-a517-4bf9-8ecc-3517905aa489"
            },
            {
                "version": 2,
                "message": "Exit request received for processing"
            }
        ]
    },
    {
        "contactKey": "CONTACTKEY 2",
        "definitionKey": "DEFINITIONKEY",
        "status": [
            {
                "version": 1,
                "message": "Exit Request is being Processed.",
                "definitionInstanceId": "68e1544e-9bdc-4e3f-9cb0-e6d0bfceefc0"
            },
            {
                "version": 2,
                "message": "Exit request received for processing"
            }
        ]
    }
]
```

Last Updated: Jun 8, 2021
