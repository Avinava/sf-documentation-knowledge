---
title: "PaymentAuthorization"
domain: sfFieldRef
topic: paymentauthorization
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:07.189Z
estimatedTokens: 741
keywords: [PaymentAuthorization, payment, authorization, event, users, capture, reverse, against, reserve, funds, API, version, 48.0, later]
---

# PaymentAuthorization

> Represents a single payment authorization event where users can capture or
			reverse a payment against a reserve of funds. This object is available in API
		version 48.0 and later.

# PaymentAuthorization

Represents a single payment authorization event where users can capture or reverse a payment against a reserve of funds. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PaymentAuthorization](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_paymentauthorization.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| Amount | Amount | currency |  |  | 18 | 2 |
| Balance | Balance | currency |  |  | 18 | 2 |
| Comments | Comments | textarea |  | 1000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Date | Date | datetime |  |  |  |  |
| EffectiveDate | Effective Date | datetime |  |  |  |  |
| Email | Audit Email | email |  | 80 |  |  |
| ExpirationDate | Expiration Date | datetime |  |  |  |  |
| GatewayAuthCode | Gateway Auth Code | string |  | 64 |  |  |
| GatewayDate | Gateway Date | datetime |  |  |  |  |
| GatewayRefDetails | Gateway Reference Details | textarea |  | 1000 |  |  |
| GatewayRefNumber | Gateway Reference Number | string |  | 255 |  |  |
| GatewayResultCode | Gateway Result Code | string |  | 64 |  |  |
| GatewayResultCodeDescription | Gateway Result Code Description | string |  | 255 |  |  |
| Id | Payment Authorization ID | id |  | 18 |  |  |
| IpAddress | IP Address | string |  | 39 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MacAddress | MAC Address | string |  | 32 |  |  |
| PaymentAuthorizationNumber | Payment Authorization Number | string |  | 255 |  |  |
| PaymentGatewayId | Payment Gateway ID | reference |  | 18 |  |  |
| PaymentGroupId | Payment Group ID | reference |  | 18 |  |  |
| PaymentIntentGuid | Payment Intent Guid | string |  | 255 |  |  |
| PaymentMethodId | Payment Method ID | reference |  | 18 |  |  |
| Phone | Phone | phone |  | 40 |  |  |
| ProcessingMode | Processing Mode | picklist |  | 255 |  |  |
| SfResultCode | Salesforce Result Code | picklist |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAuthReversalAmount | Total Payment Auth Reversal Amount | currency |  |  | 18 | 2 |
| TotalPaymentCaptureAmount | Total Payment Capture Amount | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
