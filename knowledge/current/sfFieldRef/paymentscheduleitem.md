---
title: "PaymentScheduleItem"
domain: sfFieldRef
topic: paymentscheduleitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:07.439Z
estimatedTokens: 734
keywords: [PaymentScheduleItem, payment, schedule, items, item, processed, schedule’s, different, configuration, dates, accounts, scheduler, launches, run, evaluates]
---

# PaymentScheduleItem

> A payment schedule contains one or more payment schedule items, where each
         item represents one payment to be processed. Each of a schedule’s items can have different
         payment configuration fields, such as payment methods, payment dates, and payment accounts.
         When a payment scheduler launches a payment run, the run evaluates active payment schedule
         items, and picks them up for payment processing if they align with the scheduler’s payment
         criteria. This object is available in API version 55.0 and later.

# PaymentScheduleItem

A payment schedule contains one or more payment schedule items, where each item represents one payment to be processed. Each of a schedule’s items can have different payment configuration fields, such as payment methods, payment dates, and payment accounts. When a payment scheduler launches a payment run, the run evaluates active payment schedule items, and picks them up for payment processing if they align with the scheduler’s payment criteria. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PaymentScheduleItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_paymentscheduleitem.htm "HTML (New Window)") in the Billing Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AppliedAmount | Credited Amount | currency |  |  | 18 | 2 |
| Comments | Comments | textarea |  | 1000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Payment Schedule Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastPaymentGatewayLogId | Payment Gateway Log ID | reference |  | 18 |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| PaymentAccountId | Payment Account ID | reference |  | 18 |  |  |
| PaymentBatchRunId | Payment Batch Run ID | reference |  | 18 |  |  |
| PaymentGatewayRespStatus | Payment Gateway Response Status | picklist |  | 255 |  |  |
| PaymentId | Payment ID | reference |  | 18 |  |  |
| PaymentMethodId | Payment Method ID | reference |  | 18 |  |  |
| PaymentProcessingMessage | Payment Processing Message | string |  | 1000 |  |  |
| PaymentRunMatchingValue | Payment Run Matching Value | picklist |  | 40 |  |  |
| PaymentScheduleId | Payment Schedule ID | reference |  | 18 |  |  |
| PaymentScheduleItemNumber | Payment Schedule Item Number | string |  | 255 |  |  |
| PaymentSource | Payment Source | picklist |  | 255 |  |  |
| PaymentsReceived | Payments Received | currency |  |  | 18 | 2 |
| ProcessedAmount | Processed Amount | currency |  |  | 18 | 2 |
| RequestedAmount | Requested Amount | currency |  |  | 18 | 2 |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetPaymentProcessingDate | Target Payment Processing Date | date |  |  |  |  |
| UsageType | Usage Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
