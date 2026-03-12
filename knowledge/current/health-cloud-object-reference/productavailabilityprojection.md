---
title: "ProductAvailabilityProjection"
domain: health-cloud-object-reference
topic: productavailabilityprojection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.862Z
estimatedTokens: 779
keywords: [ProductAvailabilityProjection, projected, product, quantity, inventory, location, various, points, time, Records, automatically, created, Intelligent, Sales, API]
---

# ProductAvailabilityProjection

> Represents the projected product quantity available at an inventory location
         at various points in time. Records for this object are automatically created by Intelligent
         Sales. This object is available in API version 55.0 and later.

# ProductAvailabilityProjection

Represents the projected product quantity available at an inventory location at various points in time. Records for this object are automatically created by Intelligent Sales. This object is available in API version 55.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypeLookupPropertiesFilter, Group, SortDescriptionThe owner of the record.Refers ToGroup, User |
| Product2Id | TypeLookupPropertiesFilter, Group, Nillable, SortDescriptionThe product whose quantity is available quantity is projected.Refers ToProduct2 |
| ProductLocationId | TypeLookupPropertiesFilter, Group, Nillable, SortDescriptionThe inventory location of the product with that quantity.Refers ToLocation |
| ProjectedQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe quantity projected at the inventory for the specified date. |
| ProjectionDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date for when the quantity projection is applicable. |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the inventory based on the projected quantity and the required quantity for that day.Possible values are:AvailableProjectedAvailableShortfall |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductAvailabilityProjectionFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProductAvailabilityProjectionHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProductAvailabilityProjectionShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProductAvailabilityProjectionFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ProductAvailabilityProjectionHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ProductAvailabilityProjectionShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
