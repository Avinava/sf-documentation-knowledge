---
title: "POST /interaction/v1/interactions/contactexit"
domain: mc-apis
topic: post-interactionv1interactionscontactexit
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:20.683Z
estimatedTokens: 388
keywords: [POST, interaction, interactions, contactexit, Removes, contacts, journey, versions, **Overview**, Usage, Errors]
---

# POST /interaction/v1/interactions/contactexit

> Removes up to 50 contacts from a journey or from one or more versions of a journey.

# POST /interaction/v1/interactions/contactexit

## **Overview**

Removes up to 50 contacts from a journey or from one or more versions of a journey.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| ContactKey | string | Required | ID that uniquely identifies a subscriber or contact. Include a single contact or an array of up to 50 contacts. |
| DefinitionKey | string | Required | Customer Key that uniquely identifies the journey. This key is the same for all versions of the journey. |
| Versions | array |  | One or more versions of a journey from which to remove a contact. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /interaction/v1/interactions/contactexit
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

### Example Response without Errors

```js
HTTP/1.1 202 Accepted
{
    "errors": []
}
```

### Example Response with Errors

```js
HTTP/1.1 202 Accepted
{
    "errors": [
        {
            "contactKey": "CONTACTKEY 2",
            "definitionKey": "INVALID DEFINITIONKEY",
            "status": [
                {
                    "version": 1,
                    "message": "Exit request Ignored - Invalid Interaction Name."
                }
            ]
        }
    ]
}
```

Last Updated: Jun 8, 2021
