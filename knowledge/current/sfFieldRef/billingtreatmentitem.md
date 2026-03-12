---
title: "BillingTreatmentItem"
domain: sfFieldRef
topic: billingtreatmentitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.054Z
estimatedTokens: 528
keywords: [BillingTreatmentItem, billing, treatment, item, how, order, item's, total, amount, distributed, schedules, over, course, lifecycle, Subscription]
---

# BillingTreatmentItem

> A billing treatment item defines how the order item's total amount is
         distributed into billing schedules over the course of the order item's lifecycle. In the
         Subscription Management pilot, billing treatments must have only one billing treatment
         item, so that the billing treatment item covers 100% of the order item's total
         value.
      This object is available in API version 55.0 and later.

# BillingTreatmentItem

A billing treatment item defines how the order item's total amount is distributed into billing schedules over the course of the order item's lifecycle. In the Subscription Management pilot, billing treatments must have only one billing treatment item, so that the billing treatment item covers 100% of the order item's total value. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [BillingTreatmentItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_billingtreatmentitem.htm "HTML (New Window)") in the Billing Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BillingTreatmentId | Billing Treatment ID | reference |  | 18 |  |  |
| BillingType | Billing Type | picklist |  | 255 |  |  |
| Controller | Controller | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| FlatAmount | Flat Amount | currency |  |  | 18 | 0 |
| Handling0Amount | Zero Amount Behavior | picklist |  | 255 |  |  |
| Id | Billing Treatment Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Percentage | Percentage | percent |  |  | 3 | 0 |
| ProcessingOrder | Processing Order | int | 9 |  |  |  |
| Sequencing | Sequencing | picklist |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
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
