---
title: "PaymentRequestLine"
domain: sfFieldRef
topic: paymentrequestline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:07.404Z
estimatedTokens: 561
keywords: [PaymentRequestLine, line, item, financial, compensation, API, version, 60.0, later]
---

# PaymentRequestLine

> Represents the line item details of the financial compensation request.
      This object is available in API version 60.0 and later.

# PaymentRequestLine

Represents the line item details of the financial compensation request. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PaymentRequestLine in the Financial Services Cloud Developer Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentAmount | Adjustment Amount | currency |  |  | 18 | 2 |
| AdjustmentReason | Adjustment Reason | multipicklist |  | 4099 | 0 |  |
| BenefitName | Benefit Name | string |  | 255 |  |  |
| ClaimItemId | Claim Item ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DiagnosticCodeId | DiagnosticCode ID | reference |  | 18 |  |  |
| EndDateTime | End Date Time | datetime |  |  |  |  |
| FacilityId | Facility ID | reference |  | 18 |  |  |
| Id | Payment Request Line ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| PaymentRequestId | Payment Request ID | reference |  | 18 |  |  |
| Quantity | Quantity | int | 9 |  |  |  |
| QuantityUnitOfMeasure | Quantity Unit Of Measure | picklist |  | 40 |  |  |
| RequestedAmount | Requested Amount | currency |  |  | 18 | 2 |
| ServiceAmount | Service Amount | currency |  |  | 18 | 2 |
| ServiceCodeId | ServiceCode ID | reference |  | 18 |  |  |
| ServiceProviderId | ServiceProvider ID | reference |  | 18 |  |  |
| ServiceType | Service Type | picklist |  | 40 |  |  |
| StartDateTime | Start Date Time | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UnitPrice | Unit Price | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
