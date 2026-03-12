---
title: "OrderPaymentSummary"
domain: sfFieldRef
topic: orderpaymentsummary
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:05.993Z
estimatedTokens: 641
keywords: [OrderPaymentSummary, current, state, payments, payment, applied, OrderSummary]
---

# OrderPaymentSummary

> Represents the current properties and state of payments using a single payment
      method that are applied to one OrderSummary.

# OrderPaymentSummary

Represents the current properties and state of payments using a single payment method that are applied to one OrderSummary.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OrderPaymentSummary](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_orderpaymentsummary.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AuthorizationAmount | Authorized | currency |  |  | 18 | 2 |
| AuthorizationReversalAmount | Authorization Reversed | currency |  |  | 18 | 2 |
| AvailableToCaptureAmount | Available to Capture | currency |  |  | 18 | 2 |
| AvailableToRefundAmount | Available to Refund | currency |  |  | 18 | 2 |
| BalanceAmount | Balance | currency |  |  | 18 | 2 |
| CapturedAmount | Captured | currency |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| FullName | Full Name | string |  | 255 |  |  |
| Id | Order Payment Summary ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastPaymentGatewayLogId | Payment Gateway Log ID | reference |  | 18 |  |  |
| LastPaymentGatewayMessage | Last Payment Gateway Message | string |  | 1000 |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Method | Method | string |  | 255 |  |  |
| OrderSummaryId | Order Summary ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PaymentMethodId | Payment Method ID | reference |  | 18 |  |  |
| PendingAuthorizationAmount | Pending Authorization | currency |  |  | 18 | 2 |
| PendingCaptureAmount | Pending Capture | currency |  |  | 18 | 2 |
| PendingRefundAmount | Pending Refund | currency |  |  | 18 | 2 |
| PendingReverseAuthAmount | Pending Authorization Reversal | currency |  |  | 18 | 2 |
| RefundedAmount | Refunded | currency |  |  | 18 | 2 |
| ReservedBalanceTotalAmount | Total Reserved Balance | currency |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
