---
title: "LoyaltyProgramProcess"
domain: sfFieldRef
topic: loyaltyprogramprocess
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:03.395Z
estimatedTokens: 419
keywords: [LoyaltyProgramProcess, loyalty, program, processes, determine, how, transaction, journals, processed]
---

# LoyaltyProgramProcess

> Represents information about loyalty program processes that determine how
         transaction journals are processed.

# LoyaltyProgramProcess

Represents information about loyalty program processes that determine how transaction journals are processed.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyProgramProcess in the Loyalty Management Developer Guide and Referral Marketing Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| ExecutionType | Process Execution Method | picklist |  | 255 |  |  |
| Id | Program Process ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| JournalSubTypeId | Journal Subtype ID | reference |  | 18 |  |  |
| JournalTypeId | Journal Type ID | reference |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoyaltyProgramId | Loyalty Program ID | reference |  | 18 |  |  |
| LoyaltyTierGroupId | Loyalty Tier Group ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProcessType | Process Type | picklist |  | 40 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
