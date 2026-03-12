---
title: "PromotionChannel"
domain: retail-api
topic: promotionchannel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.646Z
estimatedTokens: 670
keywords: [PromotionChannel, Associate, promotion, store, group, account, API, version, 47.0, later, Calls, Associated, Objects]
---

# PromotionChannel

> Associate a promotion with a store, store group, or an account. This
    object is available in API version 47.0 and later.

# PromotionChannel

Associate a promotion with a store, store group, or an account. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the account with which the promotion is associated. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFinal date that the association of the promotion with the stores is valid. |
| InStoreLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the in-store location that’s associated with the promotion. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identifier of the association. |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the promotion with which the store is associated. |
| RetailLocationGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the retail store group with which the promotion is associated. |
| RetailStoreId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the retail store with which the promotion is associated. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionFirst date that the association of the promotion with the stores is valid. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[PromotionChannelFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed are available for the object.

[PromotionChannelHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

## Related Topics

- PromotionChannelFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- PromotionChannelHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
