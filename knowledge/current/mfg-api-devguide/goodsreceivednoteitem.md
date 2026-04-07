---
title: "GoodsReceivedNoteItem"
domain: mfg-api-devguide
topic: goodsreceivednoteitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:13.795Z
estimatedTokens: 793
keywords: [GoodsReceivedNoteItem, line, entry, Goods, Received, GRN, receiving, status, specific, product, records, total, quantity, how, units, were, damaged, short-delivered, excess, purchase, order, API, 65.0]
---

> Represents a single line entry on the Goods Received Note (GRN) that details
      the receiving status of a specific product. It records the total quantity received and
      indicates how many units were damaged, short-delivered, or received in excess of the purchase
      order. This object is available in API version 65.0 and later.

# GoodsReceivedNoteItem

Represents a single line entry on the Goods Received Note (GRN) that details the receiving status of a specific product. It records the total quantity received and indicates how many units were damaged, short-delivered, or received in excess of the purchase order. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| GoodsReceivedNoteItemNumber | TypeIntPropertiesFilter, Group, idLookup, SortDescriptionA unique identifier for each item in the Goods Received Note. |
| GoodsReceivedNote | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe parent Goods Received Note record for this item. |
| InvoicedQuantity | TypedatetimePropertiesFilter, Group, Nillable, SortDescriptionThe quantity specified on the supplier’s invoice for this item. |
| ReceivedQuantity | TypetextPropertiesFilter, Group, Nillable, SortDescriptionThe actual quantity of the item received. |
| AcceptedQuantity | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe quantity of the item accepted after inspection. |
| DamagedQuantity | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe quantity of the item that was damaged upon receipt. |
| ShortageQuantity | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe quantity shortage for this item compared to the order or invoice. |
| ExcessQuantity | TypetextPropertiesFilter, Group, Nillable, SortDescriptionThe quantity received in excess of what was ordered or invoiced. |
| UnitofMeasure | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe unit of measure used to quantify the item. |
| Product | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe product associated with this Goods Received Note item. |
| PurchaseOrderItem | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe specific item number from the related purchase order. |
| StatusCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe current status of the item within the Goods Received Note process. |
| Comments | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional notes or remarks related to this Goods Received Note item. |
| LastSyncedReceivedQuantity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe quantity received during the most recent inventory synchronization. |
| SyncStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe current status of the inventory synchronization process for this item. |
| InventorySyncMessage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails about the inventory synchronization, such as the reason for a synchronization failure. |
| ProductItem | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product item associated with this Goods Received Note item. |
