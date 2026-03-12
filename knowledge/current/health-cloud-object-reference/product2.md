---
title: "Product2"
domain: health-cloud-object-reference
topic: product2
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.152Z
estimatedTokens: 962
keywords: [Product2, product, org, sells, Calls, Associated, Objects]
---

# Product2

> Represents a product that your org sells.

# Product2

Represents a product that your org sells.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA text description of this record. Label is Product Description. |
| DisplayUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionURL leading to a specific version of a record in the linked external data source. |
| ExternalDataSourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the related external data source. |
| ExternalId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of a record in the linked external data source. For example, ID #123. |
| Family | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the product family associated with this record. Product families are configured as picklists in the user interface. Label is Product Family. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this record is active. |
| IsArchived | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicated whether the product is archived. |
| IsSerialized | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product supports serial numbers. If an associated product item record already exists, this boolean can’t be set to true unless the product item’s quantity is zero. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTime stamp for the last time this record was referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTime stamp for the last time this record was viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Default name of this record. Label is Product Name. |
| ProductCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefault product code for this record. Your org defines the product code naming pattern. |
| QuantityUnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnit of the product; for example, kilograms, liters, or cases. This field comes with only one value, Each, so you may want to create your own. The QuantityUnitOfMeasure field on ProductItem inherits this field’s values. |
| StockKeepingUnit | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe SKU for the product. Use in tandem with or instead of the ProductCode field. For example, you can track the manufacturer’s identifying code in the Product Code field and assign the product a SKU when you resell it. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[Product2Feed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[Product2History](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- Product2Feed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- Product2History (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
