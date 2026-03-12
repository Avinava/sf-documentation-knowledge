---
title: "BillingSchedule"
domain: sfFieldRef
topic: billingschedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.990Z
estimatedTokens: 700
keywords: [BillingSchedule, Stores, order, item, invoicing, process, API, version, 55.0, later]
---

# BillingSchedule

> Stores the order item information used in the invoicing process. This
      object is available in API version 55.0 and later.

# BillingSchedule

Stores the order item information used in the invoicing process. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [BillingSchedule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_billingschedule.htm "HTML (New Window)") in the Billing Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BilledAmount | Billed Amount | currency |  |  | 18 | 2 |
| BilledThroughPeriod | Last billing period that includes this date | date |  |  |  |  |
| BillingPeriodAmount | Billing Period Amount | currency |  |  | 18 | 2 |
| BillingScheduleEndDate | Billing Schedule End Date | date |  |  |  |  |
| BillingScheduleGroupId | Billing Schedule Group ID | reference |  | 18 |  |  |
| BillingScheduleNumber | Name | string |  | 255 |  |  |
| BillingScheduleStartDate | Billing Schedule Start Date | date |  |  |  |  |
| BillingTreatmentItemId | Billing Treatment Item ID | reference |  | 18 |  |  |
| CancellationDate | Cancellation Date | date |  |  |  |  |
| Category | Category | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExternalReference | External Reference Id | string |  | 18 |  |  |
| ExternalReferenceItem | External Reference Item Id | string |  | 18 |  |  |
| Id | Billing Schedule ID | id |  | 18 |  |  |
| InvoiceRunMatchingValue | Invoice Run Matching Value | picklist |  | 40 |  |  |
| IsBilledThroughPeriodUpdated | Is Billed Through Period Updated | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| NetUnitPrice | Net Unit Price | currency |  |  | 18 | 2 |
| NextBillingDate | Next Billing Date | date |  |  |  |  |
| NextChargeFromDate | Next Charge From Date | date |  |  |  |  |
| OriginalBillingScheduleId | Billing Schedule ID | reference |  | 18 |  |  |
| PendingAmount | Pending Amount | currency |  |  | 18 | 2 |
| Quantity | Quantity | double |  |  | 18 | 2 |
| ReferenceEntityId | ReferenceEntity ID | reference |  | 18 |  |  |
| ReferenceEntityItemId | ReferenceEntityItem ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaxTreatmentId | Tax Treatment ID | reference |  | 18 |  |  |
| TotalAmount | Total Amount | currency |  |  | 18 | 2 |
| UnitPrice | Unit Price | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
