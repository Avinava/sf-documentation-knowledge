---
title: "POST /contacts/v1/attributeSets/{id}"
domain: mc-apis
topic: post-contactsv1attributesetsid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:15.409Z
estimatedTokens: 857
keywords: [POST, contacts, attributeSets, Inserts, collection, attribute, containers, rows, **Overview**]
---

> Inserts a collection of attribute value containers or the data rows of a specified attribute set by ID or name.

# POST /contacts/v1/attributeSets/{id}

## **Overview**

Inserts a collection of attribute value containers or the data rows of a specified attribute set by ID or name.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| id | string | Required | The ID of the attribute set expressed in the form of a GUID (UUID). Required if not using key or name. |
| name | string | Required | The name of the attribute set. Prefix the parameter with name:. For example, /attributeSets/name:{name}. Required if not using ID. |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| items | array | Required | Array of values to insert into the attribute set |
| items.values | array | Required | Name and value pairs of attributes to insert into the attribute set |

### Usage

The call requires at least the ID, Key, or Name value in the request. If you provide more than one of these values, the call processes the first matching value in the following order:

1.  ID
2.  Key
3.  Name

**Example Request by ID**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/v1/attributeSets/abe05aca-2c17-e311-bb14-00237d5401ce
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{

        "items": [{
            "values": [{
                "name": "Customer Key",
                "value": "sgest@example.com",
            },
            {
                "name": "Order Number",
                "value": "123456"
            },
            {
                "name": "Order Total",
                "value": "177.99"
            }]
        }]
    }
```

**Example Request by Name**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/v1/attributeSets/name:Retail%20Orders
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
        "items": [{
            "values": [{
                "name": "Customer Key",
                "value": "sgest@example.com",
            },
            {
                "name": "Order Number",
                "value": "123456"
            },
            {
                "name": "Order Total",
                "value": "177.99"
            }]
        }]
}
```

**Example Response**

```js
200 (OK)
Content-Type: application/json
{
    "operationStatus": "OK",
    "rowsAffetcted": 1,
    "rowResults": [
        {
        "dataOperationResult": "inserted",
        "itemIndex": 0,
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
        "resultMessages": []
        }],
    "Id": "abe05aca-2c17-e311-bb14-00237d5401ce",
    "Key": "Retail Orders",
    "Name:""Retail Orders",
    "SchemaId": "36E001F0-6B8F-E311-A274-08EDB9DDEBF0",
    "links": {"attributeSet": {"href": "/attributeSets/{id}"}},
    "resultMessages": [],
    "requestServiceMessageID": "8b51b524-28c1-46fc-9a44-02fca5b0a08c",
    "serviceMessageID": "80676c59-ceb9-48aa-ad35-81e150094a17"
}
```

Last Updated: Jun 8, 2021
