---
title: "WorkReportLineItem"
domain: sfFieldRef
topic: workreportlineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:17.573Z
estimatedTokens: 611
keywords: [WorkReportLineItem, measure, work, performed, contractor, business, consumer, location, program, API, version, 59.0, later]
---

# WorkReportLineItem

> Represents one measure of work performed by a contractor business for a
         consumer at a location within a program. This object is available in API version 59.0
      and later.

# WorkReportLineItem

Represents one measure of work performed by a contractor business for a consumer at a location within a program. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see WorkReportLineItem in the Energy and Utilities Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ContractorAccountId | Account ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| CustomerFirstName | Customer First Name | string |  | 255 |  |  |
| CustomerLastName | Customer Last Name | string |  | 255 |  |  |
| Description | Description | string |  | 255 |  |  |
| ExternalDocumentIdentifier | External Document Identifier | string |  | 255 |  |  |
| HasError | Error | boolean |  |  |  |  |
| Id | Work Report Line Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LaborCost | Labor Cost | currency |  |  | 18 | 2 |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LocationId | Location ID | reference |  | 18 |  |  |
| LocationStreetAddress | Customer Street Address | string |  | 255 |  |  |
| MaterialCost | Material Cost | currency |  |  | 18 | 2 |
| Measure | Measure | string |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| OtherCost | Other Cost | currency |  |  | 18 | 2 |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProcessingStatus | Processing Status | picklist |  | 255 |  |  |
| ProductQuantity | Product Quantity | int | 9 |  |  |  |
| ProgramProductId | Program Product ID | reference |  | 18 |  |  |
| ProjectName | Project Name | string |  | 255 |  |  |
| ServiceDate | Service Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalCost | Total Cost | currency |  |  | 18 | 2 |
| UploadedById | User ID | reference |  | 18 |  |  |
| WorkReportId | Work Report ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
