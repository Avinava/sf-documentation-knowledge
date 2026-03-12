---
title: "PriceAdjustmentSchedule"
domain: sfFieldRef
topic: priceadjustmentschedule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:08.514Z
estimatedTokens: 484
keywords: [PriceAdjustmentSchedule, series, discounts, offered, depending, product's, configuration, quantity, they’re, purchased, combination, products, API, version, 47.0]
---

# PriceAdjustmentSchedule

> Represents a series of discounts offered depending on your product's
			configuration, quantity, and when they’re purchased in combination with other
			products. This object is available in API version 47.0 and later.

# PriceAdjustmentSchedule

Represents a series of discounts offered depending on your product's configuration, quantity, and when they’re purchased in combination with other products. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PriceAdjustmentSchedule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_priceadjustmentschedule.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Salesforce Pricing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentMethod | Adjustment Method | picklist |  | 255 |  |  |
| ContractId | Contract ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 255 |  |  |
| EffectiveFrom | Effective from | datetime |  |  |  |  |
| EffectiveTo | Effective to | datetime |  |  |  |  |
| Id | Price Adjustment Schedule ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Price Adjustment Schedule Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Pricebook2Id | Price Book ID | reference |  | 18 |  |  |
| ScheduleType | Schedule Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
