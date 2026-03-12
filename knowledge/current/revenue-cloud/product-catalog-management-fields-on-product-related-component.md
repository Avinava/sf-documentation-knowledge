---
title: "Product Catalog Management Fields on Product Related Component"
domain: revenue-cloud
topic: product-catalog-management-fields-on-product-related-component
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.407Z
estimatedTokens: 282
keywords: [Product, Catalog, Management, Component, Standard, custom, extend]
---

# Product Catalog Management Fields on Product Related Component

> Standard and custom fields extend the standard Product Related Component
         object for use in Product Catalog Management.

# Product Catalog Management Fields on Product Related Component

Standard and custom fields extend the standard Product Related Component object for use in Product Catalog Management.

## Fields

| Field | Details |
| --- | --- |
| ChildProductClassificationId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe child product classification that's associated with a product.This field is a relationship field.Relationship NameChildProductClassificationRefers ToProductClassification |
| QuoteVisibility | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the product-related component to display as a quote line item in the Transaction Line Editor and the quote document. The default value is Always.Possible values are:AlwaysTransaction Line Editor OnlyQuote Document OnlyNever |

#### See Also

-   [Product Related Component](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_productrelatedcomponent.htm "Product Related Component - HTML (New Window)")
