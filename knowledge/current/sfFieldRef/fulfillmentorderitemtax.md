---
title: "FulfillmentOrderItemTax"
domain: sfFieldRef
topic: fulfillmentorderitemtax
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.783Z
estimatedTokens: 422
keywords: [FulfillmentOrderItemTax, tax, FulfillmentOrderLineItem, FulfillmentOrderItemAdjustment, Corresponds, OrderItemTaxLineItemSummary, API, version, 48.0, later]
---

# FulfillmentOrderItemTax

> Represents the tax on a FulfillmentOrderLineItem or
      FulfillmentOrderItemAdjustment. Corresponds to an OrderItemTaxLineItemSummary. This
    object is available in API version 48.0 and later.

# FulfillmentOrderItemTax

Represents the tax on a FulfillmentOrderLineItem or FulfillmentOrderItemAdjustment. Corresponds to an OrderItemTaxLineItemSummary. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FulfillmentOrderItemTax](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderitemtax.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Amount | Amount | currency |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 2000 |  |  |
| FulfillmentOrderId | Fulfillment Order ID | reference |  | 18 |  |  |
| FulfillmentOrderItemAdjustId | Fulfillment Order Item Adjustment ID | reference |  | 18 |  |  |
| FulfillmentOrderItemTaxNumber | Name | string |  | 255 |  |  |
| FulfillmentOrderLineItemId | Fulfillment Order Product ID | reference |  | 18 |  |  |
| Id | Fulfillment Order Item Tax ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Rate | Rate | percent |  |  | 5 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaxEffectiveDate | Tax Effective Date | date |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
