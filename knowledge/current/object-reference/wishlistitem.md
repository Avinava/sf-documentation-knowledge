---
title: "WishlistItem"
domain: object-reference
topic: wishlistitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.497Z
estimatedTokens: 360
keywords: [WishlistItem, item, Wishlist, store, built, B2B, Commerce, Lightning, API, version, 49.0, later, Calls, Special, Access]
---

# WishlistItem

> Represents an item on a Wishlist in a store
         built with B2B Commerce for Lightning. Available in API version 49.0 and
      later.

# WishlistItem

Represents an item on a Wishlist in a store built with B2B Commerce for Lightning. Available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The WishListItem object is available only if the B2B Commerce for Lightning license is enabled.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency that’s specified on the buyer’s account. Default value is USD.Possible values are:USD—U.S. Dollar |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this WishlistItem record. Name can be up to 255 characters. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the product that is represented by the WishlistItem. |
| WishlistId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the parent Wishlist of this WishlistItem. |

#### See Also

-   [Wishlist](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_wishlist.htm "Represents a buyer-created list of WishlistItems in a store that’s built with B2B Commerce on Lightning. Available in API version 49.0 and later.")

## Related Topics

- Wishlist (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_wishlist.htm)
