---
title: "ProductConsumed"
domain: object-reference
topic: productconsumed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.337Z
estimatedTokens: 1655
keywords: [ProductConsumed, item, inventory, work, order, line, service, Calls, Special, Access, Rules, Usage, Associated, Objects]
---

# ProductConsumed

> Represents an item from your inventory that was used to complete a
			work order or work order line item in field service.

# ProductConsumed

Represents an item from your inventory that was used to complete a work order or work order line item in field service.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

To create products consumed, you need Read permission on product items.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

To delete or undelete product consumed for non-serialized products, you need Edit, Create, and Read permission on product consumed. For product consumed records that lookup to serialized products, you need Modify All Data or Modify All Records permission on product consumed.

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionNotes and context about the product consumed. |
| IsConsumed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that a product consumed has been processed if the Product2 it refers to has IsSerialized=true selected. The default is false. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the product consumed record is locked or not.The default value is false. |
| IsProduct2Serialized | TypebooleanPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates if a product is a serialized product. The default is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the product consumed was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the product consumed was last viewed. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the product consumed record can be edited or not.The default value is false. |
| PricebookEntryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPrice book associated with the product consumed. If the work order and the product item’s associated product are related to the same price book, the Price Book Entry auto-populates based on the product item. |
| Product2Id | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionProduct associated with the product consumed. |
| ProductConsumedNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescription(Read Only) Auto-generated number identifying the product consumed. |
| ProductItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionProduct item associated with the product consumed. Creating a product consumed record subtracts the quantity consumed from the linked product item’s quantity. |
| ProductName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName for the product consumed. |
| QuantityConsumed | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe quantity of products consumed. |
| QuantityUnitOfMeasure | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionUnits of the consumed item; for example, kilograms or liters. Quantity Unit of Measure picklist values are inherited from the Quantity Unit of Measure field on products. |
| TotalPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total price paid for the product items. |
| UnitPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe price per unit of the product consumed. |
| WorkOrderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionWork order that the product was consumed for. |
| WorkOrderLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWork order line item that the product was consumed for. |

## Usage

When a product is consumed during the completion of a work order, create a product consumed record to track its consumption. You can add products consumed to work orders or work order line items. Track product consumption at the line item level if you want to know which products were used for each line item’s tasks.

The way you use products consumed depends on how closely you want to track the state of your inventory in Salesforce. If you want to track the entire lifecycle of items in your inventory, including their storage, transfer, and consumption, link your products consumed records to product items. This approach ensures that your inventory numbers auto-update to reflect the consumption of products from your inventory. If you want to track product consumption only, however, specify a Price Book Entry on each product consumed record and leave the Product Item field blank.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductConsumedChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 48.0)

Change events are available for the object.

[ProductConsumedFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProductConsumedHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProductConsumedChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ProductConsumedFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ProductConsumedHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
