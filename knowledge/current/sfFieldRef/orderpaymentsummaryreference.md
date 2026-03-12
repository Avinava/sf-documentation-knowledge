---
title: "OrderPaymentSummaryReference"
domain: sfFieldRef
topic: orderpaymentsummaryreference
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:06.007Z
estimatedTokens: 438
keywords: [OrderPaymentSummaryReference, junction, order, payment, summary, shared, another]
---

# OrderPaymentSummaryReference

> OrderPaymentSummaryReference is a junction object that allows an order
         payment summary to be shared with another order summary.

# OrderPaymentSummaryReference

OrderPaymentSummaryReference is a junction object that allows an order payment summary to be shared with another order summary.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OrderPaymentSummaryReference](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_orderpaymentsummaryreference.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AuthorizationAmount | Authorized | currency |  |  | 18 | 2 |
| CapturedAmount | Captured | currency |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Order Payment Summary Reference ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Method | Method | string |  | 255 |  |  |
| OrderPaymentSummaryId | Order Payment Summary ID | reference |  | 18 |  |  |
| OrderSummaryId | Order Summary ID | reference |  | 18 |  |  |
| RefundedAmount | Refunded | currency |  |  | 18 | 2 |
| ReservedBalanceAmount | Reserved Balance | currency |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
