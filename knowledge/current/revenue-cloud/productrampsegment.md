---
title: "ProductRampSegment"
domain: revenue-cloud
topic: productrampsegment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:11.209Z
estimatedTokens: 925
keywords: [ProductRampSegment, Represents, ramp, period, within, deal, where, terms, volumes, commitments, change, over, time., API, version, 62.0, later., Supported, Calls, Special]
---

# ProductRampSegment

> Represents the ramp period within a ramp deal where terms, volumes, and other
         commitments change over time. This object is available in API version 62.0 and
      later.

# ProductRampSegment

Represents the ramp period within a ramp deal where terms, volumes, and other commitments change over time. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Product Catalog Management must be enabled to access this object.

## Fields

| Field | Details |
| --- | --- |
| DurationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of time within which users can try the product for free.Valid values are:DaysMonths |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the product ramp segment was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the product ramp segment was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the product ramp segment. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the product ramp segment.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the product associated with the product ramp segment.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| ProductSellingModelId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the product selling model associated with the product ramp segment.This field is a relationship field.Relationship NameProductSellingModelRefers ToProductSellingModel |
| SegmentType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe time duration within the ramp deal where specific terms, volumes, and commitments are applied to the subscription product.Valid values are:CustomFreeTrialYearlyThe default value is Yearly. |
| TrialDuration | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe duration within which users can try the product for free. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductRampSegmentFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProductRampSegmentHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProductRampSegmentShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProductRampSegmentFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- ProductRampSegmentHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
- ProductRampSegmentShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
