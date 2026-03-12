---
title: "PartyRoleRelation"
domain: sfFieldRef
topic: partyrolerelation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:07.020Z
estimatedTokens: 431
keywords: [PartyRoleRelation, relationship, participants, API, version, 58.0, later]
---

# PartyRoleRelation

> Represents information about the type of relationship between the
         participants in a relationship. This object is available in API version 58.0 and
      later.

# PartyRoleRelation

Represents information about the type of relationship between the participants in a relationship. This object is available in API version 58.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PartyRoleRelation in the Automotive Cloud Developer Guide, Channel Revenue Management Developer Guide, Industries Common Resources Developer Guide, Nonprofit Cloud Developer Guide, and Rebate Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Party Role Relationship ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Party Role Relationship Id | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RelatedInverseRecordId | Related Inverse Record ID | reference |  | 18 |  |  |
| RelatedRoleName | Related Role Name | string |  | 255 |  |  |
| RelationshipObjectName | Relationship Object Name | picklist |  | 255 |  |  |
| RoleName | Role Name | string |  | 255 |  |  |
| ShouldCreaInversRoleAuto | Create Inverse Role Automatically | boolean |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
