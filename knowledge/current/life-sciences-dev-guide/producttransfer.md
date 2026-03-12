---
title: "ProductTransfer"
domain: life-sciences-dev-guide
topic: producttransfer
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.104Z
estimatedTokens: 486
keywords: [ProductTransfer, Standard, custom, extend, Product, Transfer, represent, inventory, locations, API, version, 65.0, later, Calls, producttransfer, transfer, service, Associated, Objects]
---

# ProductTransfer

> Represents the transfer of inventory between locations in field
      service.

# producttransfer

Represents the transfer of inventory between locations in field service.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDetails not recorded in the provided fields. |
| DestinationLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe place the product is to be delivered. |
| ExpectedPickupDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date that the transfer is being requested for. |
| IsReceived | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionCheckbox identifying that the product was received. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the product request was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the product request was last viewed. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionOwner of the product transfer. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup field for the product associated with the product transfer. |
| ProductTransferNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-assigned number that identifies the product transfer. |
| QuantityReceived | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAmount of product received at the destination location. |
| QuantitySent | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionAmount of product that’s being requested. |
| QuantityUnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe units of the product, for example grams, liters, or units. |
| ReceivedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup field for the person who received the product at the destination location. |
| ShipmentExpectedDeliveryDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date for which the transfer is being accepted.. |
| SourceLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the location of the inventory making the transfer. |
| SourceProductItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the inventory making the transfer. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the transfer request.Possible values are:AcceptedRejectedRequested |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ProductTransferFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProductTransferHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProductTransferOwnerSharingRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ProductTransferShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProductTransferFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ProductTransferHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ProductTransferOwnerSharingRule (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- ProductTransferShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
