---
title: "GET /contacts/v1/schemas/{schemaId}/attributeGroups"
domain: mc-apis
topic: get-contactsv1schemasschemaidattributegroups
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:18.666Z
estimatedTokens: 353
keywords: [contacts, schemas, schemaId, attributeGroups, Retrieves, attribute, groups, contact, schema, **Overview**]
---

> Retrieves all attribute groups associated with a specified contact data schema.

# GET /contacts/v1/schemas/{schemaId}/attributeGroups

## **Overview**

Retrieves all attribute groups associated with a specified contact data schema.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| schemaId | string | Required | The ID of the schema |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /contacts/v1/schemas/36E001F0-6B8F-E311-A274-08EDB9DDEBF0/attributeGroups
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
200 (OK)
{
    "count": 2,
    "page": 1,
    "pageSize": 25,
    "links": {
        "self": {"href": "/schemas/{schemaId}/attributeGroups" },
        "schema": {"href": "/schemas/{schemaId}" },
    },
    "items": [{
        "links": {
            "self": {"href": "/attributeGroups/{id}" }
        },
        "id": "4de15aca-2c17-e311-bb14-00237d5401ce",
        "key": "com.exacttarget.mobilepush.ETMobilePush",
        "name": "ExactTarget MobilePush",
        "parentId": "36E001F0-6B8F-E311-A274-08EDB9DDEBF0"
    },
    {
        "links": {
            "self": {"href": "/attributeGroups/{id}" }
        },
        "id": "4de15aca-2c17-e311-bb14-00237d5401ce",
        "key": "com.exacttarget.mobilepush.ETMobilePush",
        "name": "ExactTarget MobilePush",
        "parentId": "36E001F0-6B8F-E311-A274-08EDB9DDEBF0"
    }]
}
```

Last Updated: Jun 8, 2021
