---
title: "PaymentSchedule"
domain: sfFieldRef
topic: paymentschedule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:07.429Z
estimatedTokens: 740
keywords: [PaymentSchedule, payment, schedule, collection, payments, customer, wants, collect, different, times, certain, record, items, item, processed]
---

# PaymentSchedule

> The payment schedule represents a collection of payments that a customer
         wants to collect at different times for a certain record. A schedule contains one or more
         payment schedule items, where each item represents one payment to be processed. Each of a
         schedule’s items can have different payment configuration fields, such as payment methods,
         payment dates, and payment accounts. When a payment scheduler launches a payment run, the
         run evaluates active payment schedule items, and picks them up for payment processing if
         they align with the scheduler’s payment criteria. This object is available in API
      version 55.0 and later.

# PaymentSchedule

The payment schedule represents a collection of payments that a customer wants to collect at different times for a certain record. A schedule contains one or more payment schedule items, where each item represents one payment to be processed. Each of a schedule’s items can have different payment configuration fields, such as payment methods, payment dates, and payment accounts. When a payment scheduler launches a payment run, the run evaluates active payment schedule items, and picks them up for payment processing if they align with the scheduler’s payment criteria. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PaymentSchedule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_paymentschedule.htm "HTML (New Window)") in the Billing Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AvailableRequestedAmount | Available Requested Amount | currency |  |  | 18 | 2 |
| Comments | Comments | textarea |  | 1000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DefaultPaymentAccountId | Default Payment Account ID | reference |  | 18 |  |  |
| DefaultPaymentMethodId | Default Payment Method ID | reference |  | 18 |  |  |
| Id | Payment Schedule ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PaymentScheduleNumber | Payment Schedule Number | string |  | 255 |  |  |
| PaymentSource | Payment Source | picklist |  | 40 |  |  |
| ReferenceEntityId | Reference Entity ID | reference |  | 18 |  |  |
| RemainingAmountToBeProcessed | Remaining Amount To Be Processed | currency |  |  | 18 | 2 |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAppliedAmount | Total Applied Amount | currency |  |  | 18 | 2 |
| TotalCanceledAmount | Total Canceled Amount | currency |  |  | 18 | 2 |
| TotalPaymentScheduleItemAmount | Total Payment Schedule Item Amount | currency |  |  | 18 | 2 |
| TotalPaymentsReceived | Total Payments Received | currency |  |  | 18 | 2 |
| TotalProcessedAmount | Total Processed Amount | currency |  |  | 18 | 2 |
| TotalRequestedAmount | Total Requested Amount | currency |  |  | 18 | 2 |
| UsageType | Usage Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
