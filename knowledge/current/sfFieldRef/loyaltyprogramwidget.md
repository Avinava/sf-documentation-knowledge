---
title: "LoyaltyProgramWidget"
domain: sfFieldRef
topic: loyaltyprogramwidget
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:03.432Z
estimatedTokens: 356
keywords: [LoyaltyProgramWidget, configuration, widget, user, apply, out-of-the-box, templates, FlexCards, provided, Omnistudio, helps, implement, custom, changes, promotion]
---

# LoyaltyProgramWidget

> Represents the configuration of a widget that a user can apply to the
         out-of-the-box templates and FlexCards provided by Omnistudio. The configuration helps
         implement custom UI changes, such as promotion type, promotion tag line, and so on for a
         user.

# LoyaltyProgramWidget

Represents the configuration of a widget that a user can apply to the out-of-the-box templates and FlexCards provided by Omnistudio. The configuration helps implement custom UI changes, such as promotion type, promotion tag line, and so on for a user.

For more information, see LoyaltyProgramWidget in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CustomizedContent | Customized Content | textarea |  | 128000 |  |  |
| Description | Description | string |  | 255 |  |  |
| Id | Loyalty Program Widget ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProgramId | Loyalty Program ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TemplateName | Template Name | string |  | 255 |  |  |
| TemplateVersion | Template Version | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
