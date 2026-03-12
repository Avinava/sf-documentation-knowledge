---
title: "EnergyServiceAgreementItem"
domain: sfFieldRef
topic: energyserviceagreementitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.217Z
estimatedTokens: 521
keywords: [EnergyServiceAgreementItem, Energy, Service, Agreement, time, location, pricing, API, version, 62.0, later]
---

# EnergyServiceAgreementItem

> Represents the details of the Energy Service Agreement object such as the
         time, location, and pricing information.  This object is available in API version 62.0
      and later.

# EnergyServiceAgreementItem

Represents the details of the Energy Service Agreement object such as the time, location, and pricing information. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see EnergyServiceAgreementItem in the Energy and Utilities Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssetId | Asset ID | reference |  | 18 |  |  |
| BillingAccountId | Billing Account ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EndDate | End Date | date |  |  |  |  |
| EnergyServiceAgreementId | Energy Service Agreement ID | reference |  | 18 |  |  |
| Id | Energy Service Agreement Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LocationId | Location ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| OneTimePrice | One Time Price | currency |  |  | 18 | 2 |
| Product2Id | Product ID | reference |  | 18 |  |  |
| RecurringPrice | Recurring Price | currency |  |  | 18 | 2 |
| RecurringPriceFrequency | Recurring Price Frequency | picklist |  | 40 |  |  |
| ServicePointId | Service Point ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UsagePeriod | Usage Period | picklist |  | 40 |  |  |
| UsagePrice | Usage Price | currency |  |  | 18 | 2 |
| UsageQuantity | Usage Quantity | int | 9 |  |  |  |
| UsageUnitOfMeasure | Usage Unit of Measure | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
