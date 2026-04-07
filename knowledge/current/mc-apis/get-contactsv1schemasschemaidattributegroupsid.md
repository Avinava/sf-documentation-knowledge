---
title: "GET /contacts/v1/schemas/{schemaId}/attributeGroups/{id}"
domain: mc-apis
topic: get-contactsv1schemasschemaidattributegroupsid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:18.675Z
estimatedTokens: 1070
keywords: [contacts, schemas, schemaId, attributeGroups, Retrieves, attribute, group, key, contact, schema, **Overview**]
---

> Retrieves a specified attribute group (by ID, key, or name) associated with a specified contact data schema.

# GET /contacts/v1/schemas/{schemaId}/attributeGroups/{id}

## **Overview**

Retrieves a specified attribute group (by ID, key, or name) associated with a specified contact data schema.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| schemaId | string | Required | The ID of the schema |
| id | string | Required | The ID of the attribute group expressed in the form of a GUID (UUID). Required if not using key or name. |
| key | string | Required | Key of the attribute group. Prefix the parameter with key:. For example, /attributeGroups/key:{key}. Required if not using ID or name. |
| name | string | Required | Name of the attribute group. Prefix the parameter with name:. For example, /attributeGroups/name:{name}. Required if not using ID or key. |

### Usage

**Example Request by ID**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /contacts/v1/schemas/36E001F0-6B8F-E311-A274-08EDB9DDEBF0/attributeGroups/36E001F0-6B8F-E311-A274-08EDB9DDEBF0
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
200 (OK)
{

    "attributeGroup": {
        "links": {
            "self": {"href": "/schemas/{parentReferenceId}/attributeGroups/{id}" },
            "schema": {"href": "/schemas/{parentReferenceId}" },
            "attributeSetDefinitions": {"href": "/schemas/{parentReferenceId}/attributeGroups/{id}/attributeSetDefinitions"
        },
        "id": "36E001F0-6B8F-E311-A274-08EDB9DDEBF0",
        "key": "com.exacttarget.mobilepush.ETMobilePush",
        "name": "ExactTarget MobilePush",
        "schemaId": "36E001F0-6B8F-E311-A274-08EDB9DDEBF0",
        "isSystemDefined": true,
        "applicationID": "131975ED-E859-4CC9-B479-62A615BC6C8A",
        "applicationKey": "com.exacttarget.mobilepush",
        "templateID": 100,
        "fullyQualifiedName": "com.exacttarget.mobilepush.ETMobilePush",
        "attributeGroupType": "standard",

    },
    }
}
```

**Example Request by Key**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /contacts/v1/schemas/36E001F0-6B8F-E311-A274-08EDB9DDEBF0/attributeGroups/key:com.exacttarget.mobilepush.ETMobilePush
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
200 (OK)
{
    "attributeGroup": {
        "links": {
            "self": {"href": "/schemas/{schemaId}/attributeGroups/{id}" },
            "schema": {"href": "/schemas/{schemaId}" },
            "attributeSetDefinitions": {"href": "/schemas/{schemaId}/attributeGroups/{id}/attributeSetDefinitions" }
        },
        "id": "4de15aca-2c17-e311-bb14-00237d5401ce",
        "key": "com.exacttarget.mobilepush.ETMobilePush",
        "name": "ExactTarget MobilePush",
        "schemaId": "36E001F0-6B8F-E311-A274-08EDB9DDEBF0",
        "isSystemDefined": true,
        "applicationID": "131975ED-E859-4CC9-B479-62A615BC6C8A",
        "applicationKey": "com.exacttarget.mobilepush",
        "templateID": 100,
        "fullyQualifiedName": "com.exacttarget.mobilepush.ETMobilePush",
        "attributeGroupType": "standard"
    }
}
```

**Example Request by Name**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /contacts/v1/schemas/36E001F0-6B8F-E311-A274-08EDB9DDEBF0/attributeGroups/name:ExactTarget%20MobilePush
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
200 (OK)
{
    "attributeGroup": {
        "links": {
            "self": {"href": "/schemas/{schemaId}/attributeGroups/{id}" },
            "schema": {"href": "/schemas/{schemaId}" },
            "attributeSetDefinitions": {"href": "/schemas/{schemaId}/attributeGroups/{id}/attributeSetDefinitions" }
        },
        "id": "4de15aca-2c17-e311-bb14-00237d5401ce",
        "key": "com.exacttarget.mobilepush.ETMobilePush",
        "name": "ExactTarget MobilePush",
        "schemaId": "36E001F0-6B8F-E311-A274-08EDB9DDEBF0",
        "isSystemDefined": true,
        "applicationID": "131975ED-E859-4CC9-B479-62A615BC6C8A",
        "applicationKey": "com.exacttarget.mobilepush",
        "templateID": 100,
        "fullyQualifiedName": "com.exacttarget.mobilepush.ETMobilePush",
        "attributeGroupType": "standard"
    }
}
```

Last Updated: Jun 8, 2021
