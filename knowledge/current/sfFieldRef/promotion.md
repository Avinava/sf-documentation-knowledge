---
title: "Promotion"
domain: sfFieldRef
topic: promotion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:10.530Z
estimatedTokens: 564
keywords: [Promotion, B2B, D2C, stores, API, version, 52.0, later]
---

# Promotion

> Represents a promotion for B2B or D2C stores. This object is available
      in API version 52.0 and later.

# Promotion

Represents a promotion for B2B or D2C stores. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Promotion](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_promotion.htm "HTML (New Window)") in the Consumer Goods Cloud Developer Guide, Loyalty Management Developer Guide, Object Reference for the Salesforce Platform, and Referral Marketing Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| DisplayName | Display Name | string |  | 255 |  |  |
| EndDateTime | End Datetime | datetime |  |  |  |  |
| ExclusivityType | Exclusivity Type | picklist |  | 255 |  |  |
| Id | Promotion ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsAutomatic | Automatic | boolean |  |  |  |  |
| IsCommercePromotion | Commerce Promotion | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsQualCriteriaNotRequiredPerApplication | Qualifying Criteria Not Required Per Application | boolean |  |  |  |  |
| IsTiered | Tiered Promotion | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MaximumUsageCount | Maximum Applications Per Cart | int | 9 |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Objective | Objective | textarea |  | 1000 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PriorityNumber | Priority Number | int | 9 |  |  |  |
| QualifierCriteria | Qualifier Criteria | picklist |  | 255 |  |  |
| StartDateTime | Start Datetime | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TermsAndConditions | Terms and Conditions | textarea |  | 4000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
