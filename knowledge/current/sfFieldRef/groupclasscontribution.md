---
title: "GroupClassContribution"
domain: sfFieldRef
topic: groupclasscontribution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:59.948Z
estimatedTokens: 456
keywords: [GroupClassContribution, employer, group, contributions, GroupClass, members, their, dependents, per, product, category, medical, dental, vision, Child]
---

# GroupClassContribution

> Represents employer or group contributions for GroupClass members and their dependents on a per product category such as medical, dental, or vision. Child object of GroupClass. This object is available in API version 55.0 and later.

# GroupClassContribution

Represents employer or group contributions for GroupClass members and their dependents on a per product category such as medical, dental, or vision. Child object of GroupClass. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see GroupClassContribution in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Amount | Amount | currency |  |  | 18 | 0 |
| ContractGroupPlanId | Contract Group Plan ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveEndDate | Effective End Date | date |  |  |  |  |
| EffectiveStartDate | Effective Start Date | date |  |  |  |  |
| GroupBenefitProductCategory | Group Benefit Product Category | picklist |  | 40 |  |  |
| GroupClassId | Group Class ID | reference |  | 18 |  |  |
| Id | Group Class Contribution ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MemberType | Member Type | picklist |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| Percentage | Percentage | percent |  |  | 3 | 0 |
| ProductCategoryId | Category ID | reference |  | 18 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
