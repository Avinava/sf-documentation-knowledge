---
title: "GET /contacts/v1/attributeSetDefinitions/{id}"
domain: mc-apis
topic: get-contactsv1attributesetdefinitionsid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:18.704Z
estimatedTokens: 4007
keywords: [contacts, attributeSetDefinitions, Retrieves, attribute, definitiond, contact, model, **Overview**]
---

> Retrieves all attribute set definitiond in your contact data model.

# GET /contacts/v1/attributeSetDefinitions/{id}

## **Overview**

Retrieves all attribute set definitiond in your contact data model.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| id | string |  | The ID of the attribute set definition expressed in the form of a GUID (UUID). Leave off to retrieve all attribute set definitions in your contact data model. |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /contacts/v1/attributeSetDefinitions
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
200 (OK)
{
  "page": 1,
  "pageSize": 50,
  "count": 1,
  "items": [
    {
      "id": "043e290e-01ad-e611-80d5-1402ec6b95bc",
      "key": "MobileSubscriptions",
      "name": {
        "value": "MobileConnect Subscriptions"
      },
      "fullyQualifiedName": "MobileConnect Subscriptions",
      "storageLogicalType": "DataExtension",
      "isRoot": false,
      "isSendable": false,
      "categoryID": 639167,
      "isShared": false,
      "dataRetentionProperties": {
        "setDefinitionID": "043e290e-01ad-e611-80d5-1402ec6b95bc",
        "isRowBasedRetention": false,
        "isResetRetentionPeriodOnImport": false,
        "isDeleteAtEndOfRetentionPeriod": false
      },
      "isEvent": false,
      "relationships": [],
      "attributes": [
        {
          "id": "063e290e-01ad-e611-80d5-1402ec6b95bc",
          "key": "CreatedDate",
          "name": {
            "value": "Created Date"
          },
          "storageName": "_CreatedDate",
          "dataType": "Date",
          "isPrimaryKey": false,
          "isNullable": false,
          "isReadOnly": true,
          "defaultValue": "GETDATE()",
          "displayOrder": 2,
          "ranges": [],
          "description": "",
          "dataSourceID": 3,
          "restrictedValues": [],
          "obfuscationProperties": {
            "valueDefinitionID": "063e290e-01ad-e611-80d5-1402ec6b95bc",
            "storageTypeID": 1,
            "maskTypeID": 0,
            "storageType": "Plain",
            "maskType": "None"
          },
          "fullyQualifiedName": "MobileConnect Subscriptions.Created Date",
          "parentId": "043e290e-01ad-e611-80d5-1402ec6b95bc",
          "isSystemDefined": true,
          "isIdentityValue": false,
          "isHidden": false,
          "isUpdateable": false,
          "parentType": "Set",
          "dataSourceName": {},
          "links": {},
          "objectState": "Created"
        },
        {
          "id": "15052214-01ad-e611-80d5-1402ec6b95bc",
          "key": "SubscriptionDefinitionID",
          "name": {
            "value": "Keyword"
          },
          "storageName": "_SubscriptionDefinitionID",
          "dataType": "Text",
          "isPrimaryKey": true,
          "isNullable": false,
          "isReadOnly": false,
          "displayOrder": 3,
          "ranges": [],
          "description": "",
          "length": 200,
          "dataSourceID": 3,
          "restrictedValues": [],
          "restrictionLookupListID": 7,
          "obfuscationProperties": {
            "valueDefinitionID": "15052214-01ad-e611-80d5-1402ec6b95bc",
            "storageTypeID": 1,
            "maskTypeID": 0,
            "storageType": "Plain",
            "maskType": "None"
          },
          "fullyQualifiedName": "MobileConnect Subscriptions.Keyword",
          "parentId": "043e290e-01ad-e611-80d5-1402ec6b95bc",
          "isSystemDefined": true,
          "isIdentityValue": false,
          "isHidden": false,
          "isUpdateable": false,
          "parentType": "Set",
          "dataSourceName": {},
          "links": {},
          "objectState": "Created"
        },
        {
          "id": "073e290e-01ad-e611-80d5-1402ec6b95bc",
          "key": "MobileNumber",
          "name": {
            "value": "Mobile Number"
          },
          "storageName": "_MobileNumber",
          "dataType": "Phone",
          "isPrimaryKey": true,
          "isNullable": false,
          "isReadOnly": true,
          "displayOrder": 4,
          "ranges": [],
          "description": "",
          "length": 15,
          "dataSourceID": 3,
          "restrictedValues": [],
          "obfuscationProperties": {
            "valueDefinitionID": "073e290e-01ad-e611-80d5-1402ec6b95bc",
            "storageTypeID": 1,
            "maskTypeID": 0,
            "storageType": "Plain",
            "maskType": "None"
          },
          "fullyQualifiedName": "MobileConnect Subscriptions.Mobile Number",
          "parentId": "043e290e-01ad-e611-80d5-1402ec6b95bc",
          "isSystemDefined": true,
          "isIdentityValue": false,
          "isHidden": false,
          "isUpdateable": false,
          "parentType": "Set",
          "dataSourceName": {},
          "links": {},
          "objectState": "Created"
        },
        {
          "id": "0c052214-01ad-e611-80d5-1402ec6b95bc",
          "key": "ModifiedDate",
          "name": {
            "value": "Modified Date"
          },
          "storageName": "_ModifiedDate",
          "dataType": "Date",
          "isPrimaryKey": false,
          "isNullable": false,
          "isReadOnly": true,
          "defaultValue": "GETDATE()",
          "displayOrder": 7,
          "ranges": [],
          "description": "",
          "dataSourceID": 3,
          "restrictedValues": [],
          "obfuscationProperties": {
            "valueDefinitionID": "0c052214-01ad-e611-80d5-1402ec6b95bc",
            "storageTypeID": 1,
            "maskTypeID": 0,
            "storageType": "Plain",
            "maskType": "None"
          },
          "fullyQualifiedName": "MobileConnect Subscriptions.Modified Date",
          "parentId": "043e290e-01ad-e611-80d5-1402ec6b95bc",
          "isSystemDefined": true,
          "isIdentityValue": false,
          "isHidden": false,
          "isUpdateable": false,
          "parentType": "Set",
          "dataSourceName": {},
          "links": {},
          "objectState": "Created"
        },
        {
          "id": "0d052214-01ad-e611-80d5-1402ec6b95bc",
          "key": "OptInDate",
          "name": {
            "value": "Opt In Date"
          },
          "storageName": "_OptInDate",
          "dataType": "Date",
          "isPrimaryKey": false,
          "isNullable": true,
          "isReadOnly": true,
          "displayOrder": 8,
          "ranges": [],
          "description": "",
          "dataSourceID": 3,
          "restrictedValues": [],
          "obfuscationProperties": {
            "valueDefinitionID": "0d052214-01ad-e611-80d5-1402ec6b95bc",
            "storageTypeID": 1,
            "maskTypeID": 0,
            "storageType": "Plain",
            "maskType": "None"
          },
          "fullyQualifiedName": "MobileConnect Subscriptions.Opt In Date",
          "parentId": "043e290e-01ad-e611-80d5-1402ec6b95bc",
          "isSystemDefined": true,
          "isIdentityValue": false,
          "isHidden": false,
          "isUpdateable": false,
          "parentType": "Set",
          "dataSourceName": {},
          "links": {},
          "objectState": "Created"
        },
        {
          "id": "0e052214-01ad-e611-80d5-1402ec6b95bc",
          "key": "OptInMethodID",
          "name": {
            "value": "Opt In Method"
          },
          "storageName": "_OptInMethodID",
          "dataType": "Byte",
          "isPrimaryKey": false,
          "isNullable": true,
          "isReadOnly": true,
          "displayOrder": 9,
          "ranges": [],
          "description": "",
          "dataSourceID": 3,
          "restrictedValues": [],
          "restrictionLookupListID": 2,
          "obfuscationProperties": {
            "valueDefinitionID": "0e052214-01ad-e611-80d5-1402ec6b95bc",
            "storageTypeID": 1,
            "maskTypeID": 0,
            "storageType": "Plain",
            "maskType": "None"
          },
          "fullyQualifiedName": "MobileConnect Subscriptions.Opt In Method",
          "parentId": "043e290e-01ad-e611-80d5-1402ec6b95bc",
          "isSystemDefined": true,
          "isIdentityValue": false,
          "isHidden": false,
          "isUpdateable": false,
          "parentType": "Set",
          "dataSourceName": {},
          "links": {},
          "objectState": "Created"
        },
        {
          "id": "0f052214-01ad-e611-80d5-1402ec6b95bc",
          "key": "OptInStatusID",
          "name": {
            "value": "Opt In Status"
          },
          "storageName": "_OptInStatusID",
          "dataType": "Byte",
          "isPrimaryKey": false,
          "isNullable": false,
          "isReadOnly": false,
          "displayOrder": 10,
          "ranges": [],
          "description": "",
          "dataSourceID": 3,
          "restrictedValues": [],
          "restrictionLookupListID": 1,
          "obfuscationProperties": {
            "valueDefinitionID": "0f052214-01ad-e611-80d5-1402ec6b95bc",
            "storageTypeID": 1,
            "maskTypeID": 0,
            "storageType": "Plain",
            "maskType": "None"
          },
          "fullyQualifiedName": "MobileConnect Subscriptions.Opt In Status",
          "parentId": "043e290e-01ad-e611-80d5-1402ec6b95bc",
          "isSystemDefined": true,
          "isIdentityValue": false,
          "isHidden": false,
          "isUpdateable": false,
          "parentType": "Set",
          "dataSourceName": {},
          "links": {},
          "objectState": "Created"
        },
        {
          "id": "10052214-01ad-e611-80d5-1402ec6b95bc",
          "key": "OptOutDate",
          "name": {
            "value": "Opt Out Date"
          },
          "storageName": "_OptOutDate",
          "dataType": "Date",
          "isPrimaryKey": false,
          "isNullable": true,
          "isReadOnly": true,
          "displayOrder": 11,
          "ranges": [],
          "description": "",
          "dataSourceID": 3,
          "restrictedValues": [],
          "obfuscationProperties": {
            "valueDefinitionID": "10052214-01ad-e611-80d5-1402ec6b95bc",
            "storageTypeID": 1,
            "maskTypeID": 0,
            "storageType": "Plain",
            "maskType": "None"
          },
          "fullyQualifiedName": "MobileConnect Subscriptions.Opt Out Date",
          "parentId": "043e290e-01ad-e611-80d5-1402ec6b95bc",
          "isSystemDefined": true,
          "isIdentityValue": false,
          "isHidden": false,
          "isUpdateable": false,
          "parentType": "Set",
          "dataSourceName": {},
          "links": {},
          "objectState": "Created"
        },
        {
          "id": "11052214-01ad-e611-80d5-1402ec6b95bc",
          "key": "OptOutMethodID",
          "name": {
            "value": "Opt Out Method"
          },
          "storageName": "_OptOutMethodID",
          "dataType": "Byte",
          "isPrimaryKey": false,
          "isNullable": true,
          "isReadOnly": true,
          "displayOrder": 12,
          "ranges": [],
          "description": "",
          "dataSourceID": 3,
          "restrictedValues": [],
          "restrictionLookupListID": 4,
          "obfuscationProperties": {
            "valueDefinitionID": "11052214-01ad-e611-80d5-1402ec6b95bc",
            "storageTypeID": 1,
            "maskTypeID": 0,
            "storageType": "Plain",
            "maskType": "None"
          },
          "fullyQualifiedName": "MobileConnect Subscriptions.Opt Out Method",
          "parentId": "043e290e-01ad-e611-80d5-1402ec6b95bc",
          "isSystemDefined": true,
          "isIdentityValue": false,
          "isHidden": false,
          "isUpdateable": false,
          "parentType": "Set",
          "dataSourceName": {},
          "links": {},
          "objectState": "Created"
        },
        {
          "id": "12052214-01ad-e611-80d5-1402ec6b95bc",
          "key": "OptOutStatusID",
          "name": {
            "value": "Opt Out Status"
          },
          "storageName": "_OptOutStatusID",
          "dataType": "Byte",
          "isPrimaryKey": false,
          "isNullable": true,
          "isReadOnly": false,
          "displayOrder": 13,
          "ranges": [],
          "description": "",
          "dataSourceID": 3,
          "restrictedValues": [],
          "restrictionLookupListID": 3,
          "obfuscationProperties": {
            "valueDefinitionID": "12052214-01ad-e611-80d5-1402ec6b95bc",
            "storageTypeID": 1,
            "maskTypeID": 0,
            "storageType": "Plain",
            "maskType": "None"
          },
          "fullyQualifiedName": "MobileConnect Subscriptions.Opt Out Status",
          "parentId": "043e290e-01ad-e611-80d5-1402ec6b95bc",
          "isSystemDefined": true,
          "isIdentityValue": false,
          "isHidden": false,
          "isUpdateable": false,
          "parentType": "Set",
          "dataSourceName": {},
          "links": {},
          "objectState": "Created"
        },
        {
          "id": "13052214-01ad-e611-80d5-1402ec6b95bc",
          "key": "Source",
          "name": {
            "value": "Source"
          },
          "storageName": "_Source",
          "dataType": "Byte",
          "isPrimaryKey": false,
          "isNullable": true,
          "isReadOnly": true,
          "displayOrder": 14,
          "ranges": [],
          "description": "",
          "dataSourceID": 3,
          "restrictedValues": [],
          "restrictionLookupListID": 5,
          "obfuscationProperties": {
            "valueDefinitionID": "13052214-01ad-e611-80d5-1402ec6b95bc",
            "storageTypeID": 1,
            "maskTypeID": 0,
            "storageType": "Plain",
            "maskType": "None"
          },
          "fullyQualifiedName": "MobileConnect Subscriptions.Source",
          "parentId": "043e290e-01ad-e611-80d5-1402ec6b95bc",
          "isSystemDefined": true,
          "isIdentityValue": false,
          "isHidden": false,
          "isUpdateable": false,
          "parentType": "Set",
          "dataSourceName": {},
          "links": {},
          "objectState": "Created"
        },
        {
          "id": "14052214-01ad-e611-80d5-1402ec6b95bc",
          "key": "SourceObjectID",
          "name": {
            "value": "Source Object ID"
          },
          "storageName": "_SourceObjectId",
          "dataType": "Text",
          "isPrimaryKey": false,
          "isNullable": true,
          "isReadOnly": true,
          "displayOrder": 15,
          "ranges": [],
          "description": "",
          "length": 200,
          "dataSourceID": 3,
          "restrictedValues": [],
          "obfuscationProperties": {
            "valueDefinitionID": "14052214-01ad-e611-80d5-1402ec6b95bc",
            "storageTypeID": 1,
            "maskTypeID": 0,
            "storageType": "Plain",
            "maskType": "None"
          },
          "fullyQualifiedName": "MobileConnect Subscriptions.Source Object ID",
          "parentId": "043e290e-01ad-e611-80d5-1402ec6b95bc",
          "isSystemDefined": true,
          "isIdentityValue": false,
          "isHidden": false,
          "isUpdateable": false,
          "parentType": "Set",
          "dataSourceName": {},
          "links": {},
          "objectState": "Created"
        }
      ],
      "canAddValues": false,
      "isSystemDefined": true,
      "canRemove": false,
      "canModify": false,
      "isReadOnly": false,
      "applicationID": "e25893f9-08f3-480f-8def-7f8ab0583611",
      "applicationKey": "com.exacttarget.mobileconnect",
      "links": {},
      "objectState": "Created"
    }
  ],
  "links": {
    "self": {
      "href": "/v1/attributeSetDefinitions"
    },
    "schema": {
      "href": "/v1/schema"
    }
  },
  "requestServiceMessageID": "c9ffe21c-3cb7-4a05-a061-77844c090ecb",
  "resultMessages": [],
  "serviceMessageID": "2099a391-68fe-4fee-a2f5-0a8942d62830"
}
```

Last Updated: Jun 8, 2021
