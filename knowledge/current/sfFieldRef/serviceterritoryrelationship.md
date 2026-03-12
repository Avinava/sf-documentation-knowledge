---
title: "ServiceTerritoryRelationship"
domain: sfFieldRef
topic: serviceterritoryrelationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.678Z
estimatedTokens: 338
keywords: [ServiceTerritoryRelationship, Represent, relationship, service, territories, work, performed, API, version, 56.0, later]
---

# ServiceTerritoryRelationship

> Represent the relationship between service territories based on work types
         performed. This object is available in API version 56.0 and later.

# ServiceTerritoryRelationship

Represent the relationship between service territories based on work types performed. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ServiceTerritoryRelationship in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Service Territory Relationship ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Service Territory Relationship | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RelatedServiceTerritoryId | Territory ID | reference |  | 18 |  |  |
| ServiceTerritoryId | Territory ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WorkTypeId | Work Type ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
