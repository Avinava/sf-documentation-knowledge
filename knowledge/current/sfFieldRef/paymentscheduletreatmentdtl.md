---
title: "PaymentScheduleTreatmentDtl"
domain: sfFieldRef
topic: paymentscheduletreatmentdtl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:07.469Z
estimatedTokens: 522
keywords: [PaymentScheduleTreatmentDtl, configuration, payment, schedule, treatment, detail, API, version, 56.0, later]
---

# PaymentScheduleTreatmentDtl

> Contains configuration information for the payment schedule treatment
         detail. This object is available in API version 56.0 and later.

# PaymentScheduleTreatmentDtl

Contains configuration information for the payment schedule treatment detail. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PaymentScheduleTreatmentDtl](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_paymentscheduletreatmentdtl.htm "HTML (New Window)") in the Billing Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DateOffset | Date Offset | int | 9 |  |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| Id | Payment Schedule Treatment Detail ID | id |  | 18 |  |  |
| InstallmentPaymentType | Installment Payment Type | picklist |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| PaymentMethodSelectionType | Payment Method Selection Type | picklist |  | 255 |  |  |
| PaymentRunMatchingValue | Payment Run Matching Value | picklist |  | 40 |  |  |
| PaymentScheduleTreatmentDetailNumber | Payment Schedule Treatment Detail Number | string |  | 255 |  |  |
| PaymentScheduleTreatmentId | Payment Schedule Treatment ID | reference |  | 18 |  |  |
| Percentage | Percentage | percent |  |  | 3 | 0 |
| ProcessingDateReference | Processing Date Reference | picklist |  | 255 |  |  |
| PymtSchdDistributionMethodId | Payment Schedule Distribution Method ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
