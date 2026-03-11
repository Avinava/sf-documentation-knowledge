---
title: "Product Catalog Management Fields on Product2"
domain: revenue-cloud
topic: product-catalog-management-fields-on-product2
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T14:37:50.600Z
keywords: [Product, Catalog, Management, Fields, Product2, See]
---

# Product Catalog Management Fields on Product2

# Product Catalog Management Fields on Product2

Standard and custom fields extend the standard Product2 object for use in Product Catalog Management to represent information about products.

## Fields

| Field | Details |
| --- | --- |
| Based On | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product classification from which this product inherits.This field is a relationship field.Relationship NameBasedOnRelationship TypeLookupRefers ToProductClassification |
| Help Text | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe help text that appears at runtime for the product. The maximum size is 32,000 alphanumeric characters. The help text can include these special characters: @ ! - < > * ? + = % # ( ) / \ & ‘ £ € $ ”. |
| Availability Date | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the product is available. |
| CanRamp | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the product’s terms, volumes, and other commitments can be ramped (true) at run time or not (false)The default value is false. |
| Discontinued Date | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the product is discontinued. |
| End Of Life Date | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time after which a product isn’t supported, ordered, or maintained. |
| Specification Type | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of product specification that’s being created. |
| DecompositionScope | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe number of fulfillment order line items that must be generated. Available in API version 61.0 and later.Valid values are:AccountBundleOrderOrderLineItem |
| FulfillmentQtyCalcMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDetermines whether the quantity of fulfillment order line items must always be one or must be aggregated from the source line items. Available in API version 61.0 and later.Valid values are:AggregateAlwaysOne |
| UsageModelType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of usage model for a product or service. Anchor is the main subscription product or service. Pack is the add-on product or service that grants additional usage resources for consumption. Available in API version 62.0 and later.Valid values are:AnchorPack |

#### See Also

-   [Product2](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_product2.htm "Product2 - HTML (New Window)")