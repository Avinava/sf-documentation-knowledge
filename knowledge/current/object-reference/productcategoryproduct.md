---
title: "ProductCategoryProduct"
domain: object-reference
topic: productcategoryproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.321Z
estimatedTokens: 742
keywords: [ProductCategoryProduct, Holds, relation, product, category, assign, products, API, version, 55.0, later, Calls, Special, Access, Rules]
---

# ProductCategoryProduct

> Holds the relation between product and product category to assign products to a category. This object is available in API version 55.0 and later.

# ProductCategoryProduct

Holds the relation between product and product category to assign products to a category. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

You must have the Industries, Retail, or B2B Commerce license.

## Fields

| Field | Details |
| --- | --- |
| Catalog | TypereferencePropertiesFilter, Group, SortDescriptionThe foreign key to the ProductCatalog ID of the Category. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPossible values are:EUR—EuroUSD—U.S. DollarThe default value is USD. |
| EffectiveEndDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date after which the catalog is unavailable to end users. |
| EffectiveStartDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date on which the catalog is available to end users. |
| IsPrimaryCategory | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the ProductCategory is the primaryProductCategory for a given product in a ProductCatalog. The default value is false. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the ProductCategoryProduct record. |
| ProductCategory | TypereferencePropertiesCreate, Filter, Group, SortDescriptionForeign key to the ProductCategory ID. |
| Product | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the product. |
| ProductToCategory | TypestringPropertiesFilter, Group, SortDescriptionConcatenated Product ID and Category ID. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe lifecycle state of the catalog. Possible values include: Draft, Active, Inactive |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductCategoryProductEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 55.0)

Change events are available for the object.

## Related Topics

- ProductCategoryProductEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
