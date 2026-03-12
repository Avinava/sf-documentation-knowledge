---
title: "AccountAccountRelation"
domain: sfFieldRef
topic: accountaccountrelation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.847Z
estimatedTokens: 478
keywords: [AccountAccountRelation, relationship, accounts, distributor, account, ship-to, API, version, 58.0, later]
---

# AccountAccountRelation

> Represents a relationship between accounts, such as a relationship between a
         distributor account and a ship-to account. This object is available in API version
      58.0 and later.

# AccountAccountRelation

Represents a relationship between accounts, such as a relationship between a distributor account and a ship-to account. This object is available in API version 58.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AccountAccountRelation in the Automotive Cloud Developer Guide, Channel Revenue Management Developer Guide, Financial Services Cloud Developer Guide, Industries Common Resources Developer Guide, Nonprofit Cloud Developer Guide, and Rebate Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EndDate | End Date | date |  |  |  |  |
| HierarchyType | Hierarchy Type | picklist |  | 255 |  |  |
| Id | Account Account Relationship ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Account Relationship Id | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PartyRoleRelationId | Party Role Relationship ID | reference |  | 18 |  |  |
| RelatedAccountId | Related Account ID | reference |  | 18 |  |  |
| RelatedInverseRecordId | Related Inverse Record ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
