---
title: "LoyaltyAggrPointExprLedger"
domain: sfFieldRef
topic: loyaltyaggrpointexprledger
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.082Z
estimatedTokens: 295
keywords: [LoyaltyAggrPointExprLedger, non-qualifying, currency, points, expire, fixed, model, tier, group]
---

# LoyaltyAggrPointExprLedger

> Represents information about non-qualifying currency points that expire based
         on a fixed model tier group.

# LoyaltyAggrPointExprLedger

Represents information about non-qualifying currency points that expire based on a fixed model tier group.

For more information, see LoyaltyAggrPointExprLedger in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExpirationDate | Expiration Date | date |  |  |  |  |
| ExpirationPoints | Expiration Points | double |  |  | 18 | 2 |
| Id | Loyalty Aggregated Point Expiration Ledger ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LoyaltyProgramCurrencyId | Currency ID | reference |  | 18 |  |  |
| LoyaltyProgramMemberId | Loyalty Program Member ID | reference |  | 18 |  |  |
| PointsStatus | Points Status | picklist |  | 40 |  |  |
| RedeemedPoints | Redeemed Points | double |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
