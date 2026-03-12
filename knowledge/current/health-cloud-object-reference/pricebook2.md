---
title: "Pricebook2"
domain: health-cloud-object-reference
topic: pricebook2
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.136Z
estimatedTokens: 529
keywords: [Pricebook2, price, book, products, org, sells, Calls, Associated, Objects]
---

# Pricebook2

> Represents a price book that contains the list of products that your
      org sells.

# Pricebook2

Represents a price book that contains the list of products that your org sells.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText description of the price book. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the price book is active (true) or not (false). Inactive price books are hidden in many areas in the user interface. You can change this field’s value as often as necessary. Label is Active. |
| IsArchived | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the price book has been archived (true) or not (false). This field is read only. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the price book has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| IsStandard | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the price book is the standard price book for the org (true) or not (false). Every org has one standard price book—all other price books are custom price books. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Name of this object. This field is read-only for the standard price book. Label is Price Book Name. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[Pricebook2History](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- Pricebook2History (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
