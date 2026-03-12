---
title: "DataIntegrationRecordPurchasePermission"
domain: tooling-api
topic: dataintegrationrecordpurchasepermission
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.204Z
estimatedTokens: 291
keywords: [DataIntegrationRecordPurchasePermission, Lightning, Data, purchase, credits, Salesforce, admin, granted, users, Tooling, API, version, 42.0, later, SOAP]
---

# DataIntegrationRecordPurchasePermission

> Represents Lightning Data purchase credits
        that a Salesforce admin has granted to users. Available in Tooling API version 42.0 and
            later.

# DataIntegrationRecordPurchasePermission

Represents Lightning Data purchase credits that a Salesforce admin has granted to users. Available in Tooling API version 42.0 and later.

## Supported SOAP Calls

create(), delete(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

GET, HEAD, and POST

For operations on a specific object, DataIntegrationRecordPurchasePermission supports GET, PATCH, DELETE, and HEAD.

## Special Access Rules

As of Spring ’20 and later, only your Salesforce org's internal users can access this object.

## Fields

| Field | Details |
| --- | --- |
| ExternalObject | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThis field can hold a single value: the name of the data service record matched to the Salesforce record. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of a user to whom purchase credits are assigned. |
| UserRecordPurchaseLimit | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of purchase credits assigned to a user. |

## Usage

Sample GET response:

```

```

## Code Examples

```
{
  "attributes" : {
    "type" : "DataIntegrationRecordPurchasePermission",
    "url" : "/services/data/v42.0/tooling/sobjects/DataIntegrationRecordPurchasePermission/0GyR0000000009xKAA"
  },
  "Id" : "0GyR0000000009xKAA",
  "IsDeleted" : false,
  "CreatedDate" : "2017-11-02T22:02:36.000+0000",
  "CreatedById" : "005R0000000F4ItIAK",
  "LastModifiedDate" : "2017-12-12T18:22:35.000+0000",
  "LastModifiedById" : "005R0000000F4ItIAK",
  "SystemModstamp" : "2017-12-12T18:22:35.000+0000",
  "UserId" : "005R0000000F4ItIAK",
  "ExternalObject" : "managedPackageNamespace__CustomObject__x",
  "UserRecordPurchaseLimit" : 300
}
```
