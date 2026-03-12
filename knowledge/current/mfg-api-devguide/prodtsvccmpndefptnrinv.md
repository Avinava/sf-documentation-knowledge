---
title: "ProdtSvcCmpnDefPtnrInv"
domain: mfg-api-devguide
topic: prodtsvccmpndefptnrinv
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.861Z
estimatedTokens: 1034
keywords: [ProdtSvcCmpnDefPtnrInv, partner-held, inventory, items, impacted, product, service, campaign, Stores, granular, status, unit, count, facilitating, simplified]
---

# ProdtSvcCmpnDefPtnrInv

> Represents information about the partner-held inventory of the items that are
         impacted by a product service campaign. Stores the granular details, such as inventory
         status and impacted unit count, facilitating simplified tracking and efficient execution of
         the product service campaign. This object is available in API version 65.0 and later.

# ProdtSvcCmpnDefPtnrInv

Represents information about the partner-held inventory of the items that are impacted by a product service campaign. Stores the granular details, such as inventory status and impacted unit count, facilitating simplified tracking and efficient execution of the product service campaign. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| InventoryStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of inventory at each partner location. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the product service campaign definition partner inventory. |
| PartnerAccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account associated with the product service campaign definition partner inventory.This field is a relationship field.Relationship NamePartnerAccountRefers ToAccount |
| PartnerType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe role of the partner associated with a product service campaign, such as a distributor or a dealer. |
| PointOfContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe point of contact for the partner associated with a product service campaign.This field is a relationship field.Relationship NamePointOfContactRefers ToContact |
| ProductItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unsold inventory of the partner associated with a product service campaign.This field is a relationship field.Relationship NameProductItemRefers ToProductItem |
| ProductSvcCampaignDefId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe product service campaign definition associated with the product service campaign definition partner inventory.This field is a relationship field.Relationship NameProductSvcCampaignDefRelationship TypeMaster-detailRefers ToProductSvcCampaignDef (the master object) |
| UnsoldInventoryQuantity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of unsold and impacted inventory units. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProdtSvcCmpnDefPtnrInvChangeEvent](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ProdtSvcCmpnDefPtnrInvHistory](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProdtSvcCmpnDefPtnrInvChangeEvent (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm)
- ProdtSvcCmpnDefPtnrInvHistory (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm)
