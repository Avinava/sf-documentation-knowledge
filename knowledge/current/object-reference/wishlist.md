---
title: "Wishlist"
domain: object-reference
topic: wishlist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.493Z
estimatedTokens: 720
keywords: [Wishlist, buyer-created, WishlistItems, store, that’s, built, B2B, Commerce, Lightning, API, version, 49.0, later, Calls, Special]
---

# Wishlist

> Represents a buyer-created list of WishlistItems in a store that’s built with B2B Commerce
         on Lightning. Available in API version 49.0 and later.

# Wishlist

Represents a buyer-created list of [WishlistItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_wishlistitem.htm "Represents an item on a Wishlist in a store built with B2B Commerce for Lightning. Available in API version 49.0 and later.")s in a store that’s built with B2B Commerce on Lightning. Available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The Wishlist object is available only if the B2B Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the account that owns the Wishlist. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency that’s specified on the buyer’s account. Default value is USD. Possible values are:USD—U.S. Dollar |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this Wishlist record. Name can be up to 255 characters. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user or group that owns the Wishlist. |
| WebStoreId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the WebStore related to this Wishlist. |
| WishlistProductCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe count of WishlistItems on this Wishlist. WishlistProductCount is a calculated field. |

## Associated Objects

This object has the following associated objects. Unless it’s noted, associated objects are available in the same API version as this object.

[WishlistOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[WishlistShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Usage Notes

-   Wishlists aren’t included in any searches.

#### See Also

-   [WishlistItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_wishlistitem.htm "Represents an item on a Wishlist in a store built with B2B Commerce for Lightning. Available in API version 49.0 and later.")

## Related Topics

- WishlistItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_wishlistitem.htm)
- WishlistOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- WishlistShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
