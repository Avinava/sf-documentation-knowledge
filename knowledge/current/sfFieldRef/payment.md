---
title: "Payment"
domain: sfFieldRef
topic: payment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:07.167Z
estimatedTokens: 1013
keywords: [Payment, event, shopper, credit, cards, capture, sale, doesn't, appear, shopper's, card, statement, API, version, 48.0]
---

# Payment

> Represents a single event when a shopper makes a payment. For credit cards,
			this event is a payment capture or payment sale, but it doesn't appear on the shopper's
			credit card statement. This object is available in API version 48.0 and
		later.

# Payment

Represents a single event when a shopper makes a payment. For credit cards, this event is a payment capture or payment sale, but it doesn't appear on the shopper's credit card statement. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Payment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_payment.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| Amount | Amount | currency |  |  | 18 | 2 |
| Balance | Balance | currency |  |  | 18 | 2 |
| CancellationDate | Cancellation Date | datetime |  |  |  |  |
| CancellationEffectiveDate | Cancellation Effective Date | datetime |  |  |  |  |
| CancellationGatewayDate | Cancellation Gateway Date | datetime |  |  |  |  |
| CancellationGatewayRefNumber | Cancellation Gateway Reference Number | string |  | 255 |  |  |
| CancellationGatewayResultCode | Cancellation Gateway Result Code | string |  | 64 |  |  |
| CancellationSfResultCode | Cancellation Salesforce Result Code | string |  | 64 |  |  |
| ClientContext | Client Context | textarea |  | 2000 |  |  |
| Comments | Comments | textarea |  | 1000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Date | Date | datetime |  |  |  |  |
| EffectiveDate | Effective Date | datetime |  |  |  |  |
| Email | Audit Email | email |  | 80 |  |  |
| GatewayDate | Gateway Date | datetime |  |  |  |  |
| GatewayRefDetails | Gateway Reference Details | textarea |  | 1000 |  |  |
| GatewayRefNumber | Gateway Reference Number | string |  | 255 |  |  |
| GatewayResultCode | Gateway Result Code | string |  | 64 |  |  |
| GatewayResultCodeDescription | Gateway Result Code Description | string |  | 255 |  |  |
| Id | Payment ID | id |  | 18 |  |  |
| ImpactAmount | Impact Amount | currency |  |  | 18 | 2 |
| IpAddress | IP Address | string |  | 39 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MacAddress | MAC Address | string |  | 32 |  |  |
| NetApplied | Net Applied | currency |  |  | 18 | 2 |
| NetPaymentCreditApplied | Net Payment Credit Applied | currency |  |  | 18 | 2 |
| NetRefundApplied | Net Refund Applied | currency |  |  | 18 | 2 |
| PaymentAuthorizationId | Payment Authorization ID | reference |  | 18 |  |  |
| PaymentGatewayId | Payment Gateway ID | reference |  | 18 |  |  |
| PaymentGroupId | Payment Group ID | reference |  | 18 |  |  |
| PaymentIntentGuid | Payment Intent Guid | string |  | 255 |  |  |
| PaymentMethodId | Payment Method ID | reference |  | 18 |  |  |
| PaymentNumber | Payment Number | string |  | 255 |  |  |
| Phone | Phone | phone |  | 40 |  |  |
| ProcessingMode | Processing Mode | picklist |  | 255 |  |  |
| SfResultCode | Salesforce Result Code | picklist |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalApplied | Total Applied | currency |  |  | 18 | 2 |
| TotalPaymentCreditApplied | Total Payment Credit Applied | currency |  |  | 18 | 2 |
| TotalPaymentCreditUnapplied | Total Payment Credit Unapplied | currency |  |  | 18 | 2 |
| TotalRefundApplied | Total Refund Applied | currency |  |  | 18 | 2 |
| TotalRefundUnapplied | Total Refund Unapplied | currency |  |  | 18 | 2 |
| TotalUnapplied | Total Unapplied | currency |  |  | 18 | 2 |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
