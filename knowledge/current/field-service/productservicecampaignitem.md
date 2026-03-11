---
title: "ProductServiceCampaignItem"
domain: field-service
topic: productservicecampaignitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:12.781Z
keywords: [ProductServiceCampaignItem, Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# ProductServiceCampaignItem

# ProductServiceCampaignItem

Represents a product service campaign's asset. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset associated with the product service campaign. Must be present if Product2Id is not present. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the asset was last modified. Its UI label is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the asset was last viewed. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Product2 associated with this campaign. The UI label is Product. Must be present if AssetID is not present. |
| ProductServiceCampaignId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The item’s parent product service campaign record. |
| ProductServiceCampaignItemNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe ID of the product service campaign item. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe status of the product service campaign item. The picklist includes the following values, which can be customized:New—Product service campaign item created, but there hasn’t yet been any activity.In Progress—Product service campaign item has begun.On Hold—Product service campaign item is paused.Completed—Product service campaign item is complete.Cannot Complete—Product service campaign item couldn’t be completed.Closed—All product service campaign item and associated activity is complete.Canceled—Product service campaign item is canceled, typically before any work began. |
| StatusCategory | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe category that each Status value falls into. The StatusCategory field has eight default values: seven values that are identical to the default Status values, and None for statuses without a status category.If you create custom Status values, you must indicate which category it belongs to. For example, if you create a Waiting for Response value, add it to the On Hold category. To learn which processes reference StatusCategory, see How are Status Categories Used? |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

ProductServiceCampaignItemFeed

Feed tracking is available for the object.

ProductServiceCampaignItemHistory

History is available for tracked fields of the object.

ProductServiceCampaignItemOwnerSharingRule

Sharing rules are available for the object.

ProductServiceCampaignItemShare

Sharing is available for the object.