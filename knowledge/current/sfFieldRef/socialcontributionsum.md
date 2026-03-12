---
title: "SocialContributionSum"
domain: sfFieldRef
topic: socialcontributionsum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.191Z
estimatedTokens: 456
keywords: [SocialContributionSum, social, contributions, made, political, non-political, organizations, belonging, financial, non-financial, categories]
---

# SocialContributionSum

> Represents information about social contributions made to political
         and non-political organizations belonging to financial and non-financial categories.

# SocialContributionSum

Represents information about social contributions made to political and non-political organizations belonging to financial and non-financial categories.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see SocialContributionSum in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Category | Category | picklist |  | 40 |  |  |
| ContribOrganizationName | Contributing Organization Name | string |  | 255 |  |  |
| Country | Country | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DisclsReportingPeriodId | Disclosure Reporting Period ID | reference |  | 18 |  |  |
| Id | Social Contribution Summary ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NonMonetaryCtrb | Non-Monetary Contribution | double |  |  | 13 | 3 |
| NonMonetaryCtrbType | Non-Monetary Contribution Type | picklist |  | 40 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RecipientName | Recipient Name | string |  | 255 |  |  |
| SubsidiaryAccountId | Account ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAmount | Total Amount | currency |  |  | 14 | 2 |
| Type | Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
