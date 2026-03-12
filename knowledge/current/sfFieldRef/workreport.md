---
title: "WorkReport"
domain: sfFieldRef
topic: workreport
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:17.533Z
estimatedTokens: 418
keywords: [WorkReport, total, work, performed, contractor, business, certain, period, time, utility, customers, locations, providing, services, measures]
---

# WorkReport

> Represents the total work performed by a contractor business in a certain
         period of time for utility customers at one or more locations, providing services for one
         or more measures. This object is available in API version 59.0 and later.

# WorkReport

Represents the total work performed by a contractor business in a certain period of time for utility customers at one or more locations, providing services for one or more measures. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see WorkReport in the Energy and Utilities Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApplicationCount | Application Count | int | 9 |  |  |  |
| ContractorAccountId | Account ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EndDate | Work End Date | date |  |  |  |  |
| ExternalInvoiceIdentifier | External Invoice Identifier | string |  | 255 |  |  |
| Id | Work Report ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MeasureCount | Measure Count | int | 9 |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProcessingStatus | Processing Status | picklist |  | 255 |  |  |
| StartDate | Work Start Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
