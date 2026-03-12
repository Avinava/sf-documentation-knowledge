---
title: "AssetStatePeriod"
domain: sfFieldRef
topic: assetstateperiod
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.759Z
estimatedTokens: 520
keywords: [AssetStatePeriod, time, span, asset, quantity, amount, monthly, recurring, revenue, MRR, state, periods, there, changes, actions]
---

# AssetStatePeriod

> Represents a time span when an asset has the same quantity, amount, and
         monthly recurring revenue (MRR). An asset has as many asset state periods as there are
         changes to it (asset actions) during its lifecycle. The dashboard and related pages show
         the current asset state period. The fields can’t be edited. This object is available
      in API version 50.0 and later.

# AssetStatePeriod

Represents a time span when an asset has the same quantity, amount, and monthly recurring revenue (MRR). An asset has as many asset state periods as there are changes to it (asset actions) during its lifecycle. The dashboard and related pages show the current asset state period. The fields can’t be edited. This object is available in API version 50.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AssetStatePeriod](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_assetstateperiod.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Transaction Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Amount | Amount | currency |  |  | 18 | 2 |
| AssetId | Asset ID | reference |  | 18 |  |  |
| AssetStatePeriodNumber | Name | string |  | 255 |  |  |
| BillingFrequency | Billing Frequency | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Discount | Discount | percent |  |  | 5 | 2 |
| DiscountAmount | Discount Amount | currency |  |  | 18 | 2 |
| EndDate | End Date | datetime |  |  |  |  |
| Id | Asset State Period ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LegalEntityId | Legal Entity ID | reference |  | 18 |  |  |
| Mrr | Monthly Recurring Revenue | currency |  |  | 18 | 2 |
| Quantity | Quantity | double |  |  | 14 | 2 |
| StartDate | Start Date | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UnitPrice | Unit Price | currency |  |  | 18 | 2 |
| UnitPriceUplift | Unit Price Uplift | percent |  |  | 5 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
