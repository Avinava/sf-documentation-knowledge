---
title: "Product Catalog Management Fields on Product Catalog"
domain: revenue-cloud
topic: product-catalog-management-fields-on-product-catalog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:09.005Z
estimatedTokens: 359
keywords: [Product, Catalog, Management, Fields, Standard, custom, fields, extend, standard, Management., API, version, 60.0, later.]
---

# Product Catalog Management Fields on Product Catalog

> Standard and custom fields extend the standard Product Catalog object
         for use in Product Catalog Management. This object is available in API version 60.0
      and later.

# Product Catalog Management Fields on Product Catalog

Standard and custom fields extend the standard Product Catalog object for use in Product Catalog Management. This object is available in API version 60.0 and later.

## Fields

| Field | Details |
| --- | --- |
| Code | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionA unique ID associated with the catalog. The maximum size is 80 alphanumeric characters. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the catalog that's used during design time. The maximum size is 255 alphanumeric characters. |
| EffectiveEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date after which the product catalog is unavailable to end users. |
| EffectiveStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the product catalog is available to end users. |
| CatalogType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe category of an entry in the catalog.Possible values are:SalesServiceProcess—Service ProcessThe default value is Sales. |

#### See Also

-   [Product Catalog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_productcatalog.htm "Product Catalog - HTML (New Window)")
