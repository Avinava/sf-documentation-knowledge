---
title: "ClaimPaymentSummary"
domain: sfFieldRef
topic: claimpaymentsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.115Z
estimatedTokens: 356
keywords: [ClaimPaymentSummary, amount, money, that's, paid, claimant, claim, participant, cover, API, version, 51.0, later]
---

# ClaimPaymentSummary

> Represents the amount of money that's paid to a claimant or claim participant
      to cover a claim. This object is available in API version 51.0 and later.

# ClaimPaymentSummary

Represents the amount of money that's paid to a claimant or claim participant to cover a claim. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ClaimPaymentSummary in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CancellationDate | Cancellation Date | datetime |  |  |  |  |
| ClaimId | Claim ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Claim Payment Summary ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| PaymentAmount | Payment Amount | currency |  |  | 18 | 2 |
| PaymentDate | Payment Date | date |  |  |  |  |
| PaymentIdentifier | Payment Identifier | string |  | 255 |  |  |
| PaymentStatus | Payment Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
