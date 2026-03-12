---
title: "LoyaltyPgmPtnrLdgrSummary"
domain: sfFieldRef
topic: loyaltypgmptnrldgrsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.240Z
estimatedTokens: 407
keywords: [LoyaltyPgmPtnrLdgrSummary, aggregated, ledger, loyalty, program, credit, points, debit, prepaid, partner's, pack, add, deduct, monetary, postpaid]
---

# LoyaltyPgmPtnrLdgrSummary

> Represents the aggregated ledger used by a loyalty program to credit points
         to or debit points from a prepaid partner's points pack. This ledger can also be used to
         add or deduct the monetary value of points from the postpaid partner's bill.

# LoyaltyPgmPtnrLdgrSummary

Represents the aggregated ledger used by a loyalty program to credit points to or debit points from a prepaid partner's points pack. This ledger can also be used to add or deduct the monetary value of points from the postpaid partner's bill.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyPgmPtnrLdgrSummary in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActivityDate | Activity Date | date |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Loyalty Program Partner Ledger Summary Id | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoyaltyPgmPtnrPrepaidPackId | Loyalty Program Partner Prepaid Pack ID | reference |  | 18 |  |  |
| LoyaltyProgramPartnerId | Loyalty Program Partner ID | reference |  | 18 |  |  |
| Name | Name | string |  | 40 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalPoints | Total Points | double |  |  | 18 | 2 |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
