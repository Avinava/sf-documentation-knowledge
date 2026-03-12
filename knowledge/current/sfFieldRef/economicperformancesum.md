---
title: "EconomicPerformanceSum"
domain: sfFieldRef
topic: economicperformancesum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.690Z
estimatedTokens: 412
keywords: [EconomicPerformanceSum, statistics, direct, economic, generated, distributed, organization, income, expenses]
---

# EconomicPerformanceSum

> Represents statistics about the direct economic value generated and
         distributed by an organization or the related income and expenses.

# EconomicPerformanceSum

Represents statistics about the direct economic value generated and distributed by an organization or the related income and expenses.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see EconomicPerformanceSum in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Country | Country | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DisclsReportingPeriodId | Disclosure Reporting Period ID | reference |  | 18 |  |  |
| Id | Economic Performance Summary ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Market | Market | picklist |  | 40 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PerformanceCategory | Performance Category | picklist |  | 40 |  |  |
| PerformanceType | Performance Type | picklist |  | 40 |  |  |
| Region | Region | picklist |  | 40 |  |  |
| SubsidiaryAccountId | Account ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAmount | Total Amount | currency |  |  | 18 | 0 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
