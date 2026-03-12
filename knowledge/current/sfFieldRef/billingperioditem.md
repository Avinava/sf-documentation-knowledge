---
title: "BillingPeriodItem"
domain: sfFieldRef
topic: billingperioditem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.968Z
estimatedTokens: 442
keywords: [BillingPeriodItem, payment, period, subscription, billing, item, pass, invoice, line, Management, API, version, 55.0, later]
---

# BillingPeriodItem

> Represents one payment period for a subscription. The billing period item is
         used to pass billing information to an invoice line item in Subscription Management.
      This object is available in API version 55.0 and later.

# BillingPeriodItem

Represents one payment period for a subscription. The billing period item is used to pass billing information to an invoice line item in Subscription Management. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [BillingPeriodItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_billingperioditem.htm "HTML (New Window)") in the Billing Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Amount | Amount | currency |  |  | 18 | 2 |
| BillingPeriodEndDate | Billing Period End Date | date |  |  |  |  |
| BillingPeriodItemNumber | Name | string |  | 255 |  |  |
| BillingPeriodStartDate | Billing Period Start Date | date |  |  |  |  |
| BillingScheduleGroupId | Billing Schedule Group ID | reference |  | 18 |  |  |
| BillingScheduleId | Billing Schedule ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Billing Period Item ID | id |  | 18 |  |  |
| InvoiceId | Invoice ID | reference |  | 18 |  |  |
| InvoiceLineId | Invoice Line ID | reference |  | 18 |  |  |
| InvoiceStatus | Invoice Status | picklist |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
