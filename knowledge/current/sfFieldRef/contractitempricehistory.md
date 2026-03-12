---
title: "ContractItemPriceHistory"
domain: sfFieldRef
topic: contractitempricehistory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.405Z
estimatedTokens: 247
keywords: [ContractItemPriceHistory, history, changes, ContractItemPrice, API, version, 61.0, later]
---

# ContractItemPriceHistory

> Represents the history of changes to the values in the fields of a
         ContractItemPrice object. This object is available in API version 61.0 and
      later.

# ContractItemPriceHistory

Represents the history of changes to the values in the fields of a ContractItemPrice object. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ContractItemPriceHistory in the Quote and Order Capture Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ContractItemPriceId | Contract Item Price ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataType | Datatype | picklist |  | 40 |  |  |
| Field | Changed Field | picklist |  | 255 |  |  |
| Id | Contract Item Price History ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| NewValue | New Value | anyType |  | 255 |  |  |
| OldValue | Old Value | anyType |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
