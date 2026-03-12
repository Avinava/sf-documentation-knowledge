---
title: "ContractLineItem"
domain: object-reference
topic: contractlineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.322Z
estimatedTokens: 1655
keywords: [ContractLineItem, product, covered, service, contract, customer, support, agreement, API, version, 18.0, later, Calls, Associated, Objects]
---

# ContractLineItem

> Represents a product covered by a service contract (customer support
			agreement). This object is available in API version 18.0 and later.

# ContractLineItem

Represents a product covered by a service contract (customer support agreement). This object is available in API version 18.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Nillable, UpdateDescriptionRequired. ID of the Asset associated with the contract line item. Must be a valid asset ID. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the contract line item. |
| Discount | TypepercentPropertiesCreate, Filter, Nillable, UpdateDescriptionThe discount for the product as a percentage.When updating, if you specify Discount without specifying TotalPrice, the TotalPrice will be adjusted to accommodate the new Discount value, and the UnitPrice will be held constant.If you specify both Discount and Quantity, you must also specify either TotalPrice or UnitPrice so the system can determine which one to automatically adjust. |
| EndDate | TypedatePropertiesCreate, Filter, Nillable, UpdateDescriptionThe last day the contract line item is in effect. |
| LastReferencedDate | TypedatePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedatePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LineItemNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, UpdateDescriptionAutomatically-generated number that identifies the contract line item. |
| ListPrice | TypecurrencyPropertiesFilter, NillableDescriptionCorresponds to the UnitPrice on the PricebookEntry that is associated with this line item, which can be in the standard pricebook or a custom pricebook. A client application can use this information to show whether the unit price (or sales price) of the line item differs from the pricebook entry list price. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location associated with the contract line item.If you have access to the location entity, it doesn’t necessarily mean you can access the location id field. To access the location, you must have userHasLocation user access. |
| ParentContractLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe line item’s parent line item, if it has one. |
| PricebookEntryId | TypereferencePropertiesCreate, Filter, UpdateDescriptionRequired. ID of the associated PricebookEntry.Only exists if Product2 is enabled. |
| Product2Id | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe product related to the contract line item. |
| Quantity | TypedoublePropertiesCreate, Filter, UpdateDescriptionNumber of units of the contract line item (product) included in the associated service contract. |
| RootContractLineItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescription(Read only) The top-level line item in a contract line item hierarchy. Depending on where a line item lies in the hierarchy, its root could be the same as its parent. |
| ServiceContractId | TypereferencePropertiesCreate, FilterDescriptionRequired. ID of the ServiceContract associated with the contract line item. Must be a valid service contract ID. |
| StartDate | TypedatePropertiesCreate, Filter, Nillable, UpdateDescriptionThe first day the contract line item is in effect. |
| Status | TypepicklistPropertiesFilter, NillableDescriptionStatus of the contract line item. |
| Subtotal | TypecurrencyPropertiesFilter, NillableDescriptionContract line item's sales price multiplied by the Quantity. |
| TotalPrice | TypecurrencyPropertiesFilter, NillableDescriptionThis field is available only for backward compatibility. It represents the total price of the ContractLineItemIf you specify Discount and Quantity, this field or UnitPrice is required.This field is nillable, but you can't set both TotalPrice and UnitPrice to null in the same update request. To insert the TotalPrice for a contract line item via the API (given only a unit price and the quantity), calculate this field as the unit price multiplied by the quantity. |
| UnitPrice | TypecurrencyPropertiesCreate, Filter, UpdateDescriptionThe unit price for the contract line item. In the user interface, this field’s value is calculated by dividing the total price of the contract line item by the quantity listed for that line item. Label is Sales Price.This field or TotalPrice is required. You can’t specify both.If you specify Discount and Quantity, this field or TotalPrice is required. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContractLineItemChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 44.0)

Change events are available for the object.

[ContractLineItemFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ContractLineItemHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ContractLineItemChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ContractLineItemFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ContractLineItemHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
