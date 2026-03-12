---
title: "InventoryOperation"
domain: life-sciences-dev-guide
topic: inventoryoperation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.221Z
estimatedTokens: 1521
keywords: [InventoryOperation, operations, performed, inventory, transfers, disbursements, adjustments, API, version, 65.0, later, Calls, Associated, Objects]
---

# InventoryOperation

> Represents operations performed on the inventory, such as transfers,
         disbursements, or adjustments. This object is available in API version 65.0 and
      later.

# InventoryOperation

Represents operations performed on the inventory, such as transfers, disbursements, or adjustments. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdditionalInformation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores additional information about the inventory operation. |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe comments for the inventory operation. |
| DestinationAddressId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address at which the products are delivered.This field is a relationship field.Relationship NameDestinationAddressRefers ToAddress |
| DestinationLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the destination location associated with the inventory operation.This field is a relationship field.Relationship NameDestinationLocationRefers ToLocation |
| DestinationLocationUserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the primary user associated with the destination location of the inventory operation.This field is a relationship field.Relationship NameDestinationLocationUserRefers ToUser |
| IsDuplicate | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the inventory operation is a duplicate (true) or not (false).The default value is false. |
| IsException | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the inventory operation has any exception (true) or not (false).The default value is false. |
| IsSystemCreated | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the inventory operation is created by the system (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the inventory operation record. |
| OperationType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of inventory operation.Possible values are:AdjustmentDisbursementReturnTransferTransferIn—Transfer InTransferOut—Transfer Out |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe opportunity associated with the inventory operation.This field is a relationship field.Relationship NameOpportunityRefers ToOpportunity |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the inventory operation record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product request associated with the inventory operation.This field is a relationship field.Relationship NameProductRequestRefers ToProductRequest |
| RelatedOperationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related operation associated with the inventory operation.This field is a relationship field.Relationship NameRelatedOperationRefers ToInventoryOperation |
| ShipmentStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status indicating the condition of the shipment. |
| SourceLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the source location associated with the inventory operation.This field is a relationship field.Relationship NameSourceLocationRefers ToLocation |
| SourceLocationUserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the primary user associated with the source location of the inventory operation.This field is a relationship field.Relationship NameSourceLocationUserRefers ToUser |
| VisitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the visit associated with the inventory operation.This field is a relationship field.Relationship NameVisitRefers ToVisit |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InventoryOperationFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InventoryOperationHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[InventoryOperationShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- InventoryOperationFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- InventoryOperationHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- InventoryOperationShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
