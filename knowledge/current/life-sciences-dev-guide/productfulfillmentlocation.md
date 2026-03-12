---
title: "ProductFulfillmentLocation"
domain: life-sciences-dev-guide
topic: productfulfillmentlocation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.938Z
estimatedTokens: 750
keywords: [ProductFulfillmentLocation, Associates, business, account, product, inventory, responsible, rep, API, version, 49.0, later, Calls, Associated, Objects]
---

# ProductFulfillmentLocation

> Associates a business account and a product inventory with the responsible
      field rep. This object is available in API version 49.0 and later.

# ProductFulfillmentLocation

Associates a business account and a product inventory with the responsible field rep. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe business account a field rep is responsible for visiting. |
| FulfillmentLocationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe inventory location from which an order will be fulfilled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location of the account the field rep visits. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Product Fulfillment Location record. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the product the field rep fulfills at the account. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe field rep responsible for the account and inventory. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductFulfillmentLocationHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.") (API version 63.0)

History is available for tracked fields of the object.

[ProductFulfillmentLocationOwnerSharingRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API version 63.0)

Sharing rules are available for the object.

[ProductFulfillmentLocationShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API version 63.0)

Sharing is available for the object.

## Related Topics

- ProductFulfillmentLocationHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ProductFulfillmentLocationOwnerSharingRule (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- ProductFulfillmentLocationShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
