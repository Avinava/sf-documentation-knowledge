---
title: "Solution"
domain: sfFieldRef
topic: solution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.264Z
estimatedTokens: 422
keywords: [Solution, detailed, customer, issue, resolution]
---

# Solution

> Represents a detailed description of a customer issue and the
   resolution of that issue.

# Solution

Represents a detailed description of a customer issue and the resolution of that issue.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Solution](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_solution.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Solution ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsHtml | Is Html | boolean |  |  |  |  |
| IsPublished | Public | boolean |  |  |  |  |
| IsPublishedInPublicKb | Visible in Public Knowledge Base | boolean |  |  |  |  |
| IsReviewed | Reviewed | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SolutionName | Title | string |  | 255 |  |  |
| SolutionNote | Description | textarea |  | 32000 |  |  |
| SolutionNumber | Solution Number | string |  | 30 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimesUsed | Num Related Cases | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
