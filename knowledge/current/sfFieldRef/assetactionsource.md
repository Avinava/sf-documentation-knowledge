---
title: "AssetActionSource"
domain: sfFieldRef
topic: assetactionsource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.645Z
estimatedTokens: 556
keywords: [AssetActionSource, way, record, transactions, caused, changes, lifecycle-managed, assets, trace, financial, asset, actions, supports, Salesforce, order]
---

# AssetActionSource

> Represents an optional way to record what transactions caused changes to
         lifecycle-managed assets. Use it to trace financial and other information about asset
         actions. This object supports Salesforce order products and work order line items, and
         transaction IDs from other systems. The fields can’t be edited. This object is
      available in API version 50.0 and later.

# AssetActionSource

Represents an optional way to record what transactions caused changes to lifecycle-managed assets. Use it to trace financial and other information about asset actions. This object supports Salesforce order products and work order line items, and transaction IDs from other systems. The fields can’t be edited. This object is available in API version 50.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AssetActionSource](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_assetactionsource.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Transaction Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActualTax | Actual Tax | currency |  |  | 18 | 2 |
| AdjustmentAmount | Adjustment Amount | currency |  |  | 18 | 2 |
| AssetActionId | Asset Action ID | reference |  | 18 |  |  |
| AssetActionSourceNumber | Name | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EndDate | End Date | datetime |  |  |  |  |
| EstimatedTax | Estimated Tax | currency |  |  | 18 | 2 |
| ExternalReference | External Reference | string |  | 255 |  |  |
| ExternalReferenceDataSource | External Reference Data Source | string |  | 255 |  |  |
| Id | Asset Action Source ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ProductAmount | Product Amount | currency |  |  | 18 | 2 |
| Quantity | Quantity | double |  |  | 14 | 2 |
| ReferenceEntityItemId | Reference Entity Item ID | reference |  | 18 |  |  |
| StartDate | Start Date | datetime |  |  |  |  |
| Subtotal | Subtotal | currency |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TransactionDate | Transaction Date | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
