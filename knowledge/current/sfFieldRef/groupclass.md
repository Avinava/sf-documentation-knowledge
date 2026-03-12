---
title: "GroupClass"
domain: sfFieldRef
topic: groupclass
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:59.939Z
estimatedTokens: 394
keywords: [GroupClass, classification, group, members, receive, similar, benefits, classes, include, executives, union, office, workers, Child, employer]
---

# GroupClass

> Represents the classification of group members that receive similar benefits. Example classes include executives, union, and office workers. Child object of employer or group Account. This object is available in API version 55.0 and later.

# GroupClass

Represents the classification of group members that receive similar benefits. Example classes include executives, union, and office workers. Child object of employer or group Account. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see GroupClass in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| Category | Category | picklist |  | 40 |  |  |
| Code | Code | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| EffectiveEndDate | Effective End Date | date |  |  |  |  |
| EffectiveStartDate | Effective Start Date | date |  |  |  |  |
| Id | Group Class ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ParentGroupClassId | Group Class ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UsageType | Usage Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
