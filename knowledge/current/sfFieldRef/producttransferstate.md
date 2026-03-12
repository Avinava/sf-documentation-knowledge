---
title: "ProductTransferState"
domain: sfFieldRef
topic: producttransferstate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:09.920Z
estimatedTokens: 356
keywords: [ProductTransferState, action, taken, associate, serialized, product, transfer, new, state, result, record, created, products, attached, API]
---

# ProductTransferState

> Represents an action taken to associate a serialized product with a product
         transfer. The new state is a result of the action. A product transfer state record is
         created when serialized products are attached to the product transfer. This object is
      available in API version 60.0 and later.

# ProductTransferState

Represents an action taken to associate a serialized product with a product transfer. The new state is a result of the action. A product transfer state record is created when serialized products are attached to the product transfer. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ProductTransferState in the Manufacturing Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Action | Action | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Product Transfer State Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Product Transfer State Number | string |  | 255 |  |  |
| ProductTransferId | Product Transfer ID | reference |  | 18 |  |  |
| SerializedProductId | Serialized Product ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TransferState | Transfer State | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
