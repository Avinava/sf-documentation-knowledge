---
title: "PickTicketProduct"
domain: sfFieldRef
topic: pickticketproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.299Z
estimatedTokens: 411
keywords: [PickTicketProduct, quantity, product, picked, part, PickTicket, include, quantities, multiple, FulfillmentOrders]
---

# PickTicketProduct

> Represents a quantity of a product to be picked as part of a PickTicket. It
         can include quantities for multiple FulfillmentOrders.

# PickTicketProduct

Represents a quantity of a product to be picked as part of a PickTicket. It can include quantities for multiple FulfillmentOrders.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PickTicketProduct](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_pickticketproduct.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Pick Ticket Product ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| PickTicketId | Pick Ticket ID | reference |  | 18 |  |  |
| PickTicketProductNumber | Pick Ticket Product Number | string |  | 255 |  |  |
| PickedQuantity | Picked Quantity | double |  |  | 18 | 0 |
| Product2Id | Product ID | reference |  | 18 |  |  |
| ProductCode | Product Code | string |  | 255 |  |  |
| Quantity | Quantity | double |  |  | 18 | 0 |
| RejectReason | Reject Reason | picklist |  | 40 |  |  |
| RejectedQuantity | Rejected Quantity | double |  |  | 18 | 0 |
| StockKeepingUnit | Product SKU | string |  | 180 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
