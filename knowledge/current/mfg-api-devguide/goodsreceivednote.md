---
title: "GoodsReceivedNote"
domain: mfg-api-devguide
topic: goodsreceivednote
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:04:23.472Z
estimatedTokens: 496
keywords: [GoodsReceivedNote, record, created, buyer, confirm, delivery, goods, supplier, verify, received, items, match, purchase, order, API]
---

# GoodsReceivedNote

> Represents a record created by the buyer to confirm the delivery of goods from
      a supplier. It is used to verify that the received items match the purchase order. This object
      is available in API version 65.0 and later.

# GoodsReceivedNote

Represents a record created by the buyer to confirm the delivery of goods from a supplier. It is used to verify that the received items match the purchase order. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| GoodsReceivedNoteNumber | TypeIntPropertiesFilter, Group, idLookup, SortDescriptionThe unique identifier and primary key for the Goods Received Note. |
| SupplierAccount | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe account of the supplier that provides the goods. |
| GoodsReceivedDate | TypedatetimePropertiesFilter, Group, Nillable, SortDescriptionThe date and time on which the goods are received. |
| InvoiceReferenceNumber | TypetextPropertiesFilter, Group, Nillable, SortDescriptionThe invoice number provided by the supplier. |
| GoodsReceivedLocation | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe location where the goods are received. |
| ReceiverAccount | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe account associated with the user who is receiving the goods. |
| ReceivedBy | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe user who is receiving the goods. |
| Comments | TypetextPropertiesFilter, Group, Nillable, SortDescriptionAdditional notes or remarks related to the Goods Received Note. |
| StatusCode | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionIndicates the status of the Goods Received Note. |
| PurchaseOrder | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe purchase order associated with the Goods Received Note. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the context in which the Goods Received Note is created. |
