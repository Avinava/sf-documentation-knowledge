---
title: "WorkBadgeDefinition"
domain: sfFieldRef
topic: workbadgedefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:17.232Z
estimatedTokens: 479
keywords: [WorkBadgeDefinition, attributes, badge, including, image, WorkBadge, record, lookup, since, derived]
---

# WorkBadgeDefinition

> Represents the attributes of a badge including the badge name,
			description, and image. Each WorkBadge record must have a lookup to a
			WorkBadgeDefinition since badge attributes (like badge name) are derived from the
			WorkBadgeDefinition object.

# WorkBadgeDefinition

Represents the attributes of a badge including the badge name, description, and image. Each WorkBadge record must have a lookup to a WorkBadgeDefinition since badge attributes (like badge name) are derived from the WorkBadgeDefinition object.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [WorkBadgeDefinition](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_workbadgedefinition.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 4000 |  |  |
| GivenBadgeCount | Given Badge Count | int | 9 |  |  |  |
| Id | Badge ID | id |  | 18 |  |  |
| ImageUrl | Image URL | url |  | 255 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsCompanyWide | Company Badge | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsLimitPerUser | Limit Per User | boolean |  |  |  |  |
| IsRewardBadge | Reward Badge | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LimitNumber | Limit Number | int | 9 |  |  |  |
| LimitStartDate | Limit Start Date | date |  |  |  |  |
| Name | Badge Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
