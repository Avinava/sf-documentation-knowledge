---
title: "GET /contacts/v1/attributeSets/name:{name}"
domain: mc-apis
topic: get-contactsv1attributesetsnamename
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:20.341Z
estimatedTokens: 459
keywords: [contacts, attributeSets, Retrieves, collection, attribute, containers, data, rows, **Overview**, Usage]
---

# GET /contacts/v1/attributeSets/name:{name}

> Retrieves a collection of attribute value containers or the data rows of a specified attribute set by name.

# GET /contacts/v1/attributeSets/name:{name}

## **Overview**

Retrieves a collection of attribute value containers or the data rows of a specified attribute set by name.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| name | string | Required | The name of the attribute set. Prefix the parameter with name:. For example, /attributeSets/name:{name}. |

### Usage

This call populates the ID, Key, and Name values for all items.

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /contacts/v1/attributeSets/name:Retail%20Orders
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
200 (OK)
Content-Type: application/json
{
    "count": 200,
    "page": 10,
    "pageSize": 3,
    "Id": "abe05aca-2c17-e311-bb14-00237d5401ce",
    "Key": "Retail Orders",
    "Name:" "Retail Orders",
    "SchemaId": "36E001F0-6B8F-E311-A274-08EDB9DDEBF0",
    "_links": {
            "self": { "href": "/attributeSets/{id}"},
            "next": { "href": "/attributeSets/{id}?$page=11&$pageSize=3" },
            "prev": { "href": "/attributeSets/{id}?$page=9&$pageSize=3" },
            "attributeSetDefinition":{},
        },

    "items": [{
        "values": [{
            "id": "abe05acb-2c17-e311-bb14-00237d5401ce",
            "key": "Customer Key",
            "name": "Customer Key",
            "value": "sgest@example.com",

        },
        {
            "id": "abe05acd-2c17-e311-bb14-00237d5401ce",
            "key": "Order Number",
            "name": "Order Number",
            "value": "123456"
        },
        {
            "id": "abe05ace-2c17-e311-bb14-00237d5401ce",
            "key": "Order Total",
            "name": "Order Total",
            "value": "177.99"
        }],
    }]
}
```

Last Updated: Jun 8, 2021
