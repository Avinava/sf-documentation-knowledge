---
title: "DataIntegrationRecordPurchasePermission"
domain: object-reference
topic: dataintegrationrecordpurchasepermission
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.032Z
estimatedTokens: 265
keywords: [DataIntegrationRecordPurchasePermission, Lightning, Data, purchase, credits, Salesforce, admin, granted, users, Calls, Special, Access, Rules]
---

# DataIntegrationRecordPurchasePermission

> Indicates Lightning Data purchase credits that a Salesforce admin has
   granted to users.

# DataIntegrationRecordPurchasePermission

Indicates Lightning Data purchase credits that a Salesforce admin has granted to users.

This object is available in API versions 42.0 and later.

## Supported Calls

describeSObjects(), create(), delete(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Spring ’20 and later, only your Salesforce org's internal users can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| ExternalObject | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the name of the data service record matched to the Salesforce record. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionIndicates the ID of a user to whom purchase credits are assigned.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
| UserRecordPurchaseLimit | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the number of purchase credits assigned to a user. |
