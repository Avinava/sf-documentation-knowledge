---
title: "SvcCatalogRequest"
domain: sfFieldRef
topic: svccatalogrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.967Z
estimatedTokens: 542
keywords: [SvcCatalogRequest, made, user, Service, Catalog, builders, report, activity, API, version, 53.0, later]
---

# SvcCatalogRequest

> Represents a request made by a user using the Service Catalog. Catalog
         builders use this object to report on Service Catalog activity. This object is
      available in API version 53.0 and later.

# SvcCatalogRequest

Represents a request made by a user using the Service Catalog. Catalog builders use this object to report on Service Catalog activity. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [SvcCatalogRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_svccatalogrequest.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CaseId | Case ID | reference |  | 18 |  |  |
| CatalogItemDescription | Catalog Item Description | textarea |  | 4000 |  |  |
| CatalogItemName | Catalog Item Name | string |  | 80 |  |  |
| CatalogItemVersion | Catalog Item Version | string |  | 128 |  |  |
| ClosedDate | Closed Date | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Service Catalog Request ID | id |  | 18 |  |  |
| IsClosed | Closed | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| ItemFlowVersion | Item Flow Version ID | string |  | 128 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Service Catalog Request Number | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ReferenceObjectId | Reference Object ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SubmitterId | User ID | reference |  | 18 |  |  |
| SvcCatalogItemDefinitionId | Service Catalog Item Definition ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetCustomerId | Target Customer ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
