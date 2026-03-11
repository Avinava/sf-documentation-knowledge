---
title: "DataIntegrationRecordPurchasePermission"
domain: tooling-api
topic: dataintegrationrecordpurchasepermission
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.552Z
keywords: [DataIntegrationRecordPurchasePermission, Supported, SOAP, Calls, REST, HTTP, Methods, Special, Access, Rules, Fields, Usage]
---

# DataIntegrationRecordPurchasePermission

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