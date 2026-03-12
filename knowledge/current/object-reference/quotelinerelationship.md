---
title: "QuoteLineRelationship"
domain: object-reference
topic: quotelinerelationship
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:15.975Z
estimatedTokens: 1532
keywords: [QuoteLineRelationship, relationship, quote, line, items, bundle, it’s, immutable, can’t, edited, removed, API, version, 58.0, later]
---

# QuoteLineRelationship

> Describes the relationship between quote line items, such as items in a bundle. When you create a QuoteLineRelationship object, it’s immutable: it can’t be edited or
		removed. This object is available in API version 58.0 and later.

# QuoteLineRelationship

Describes the relationship between quote line items, such as items in a bundle. When you create a QuoteLineRelationship object, it’s immutable: it can’t be edited or removed. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Subscription Management or Revenue Cloud is enabled.

## Fields

| Field | Details |
| --- | --- |
| AssociatedQuantScaleMethod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionHow to scale the quantity of the associated quote line, relative to the main quote line. If this field has a non-null value, you can't edit the associated quote line's quantity.Possible values are:Constant— The associated quote’s line quantity remains the same in relation to the main quote line’s quantity. For example, the main quote line has a quantity of one and the associated quote line has a quantity of one. If you increase the quantity of the main quote line to two, the associated quote line’s quantity remains at one.Proportional— The associated order’s item quantity increases or decreases based on the main quote line’s quantity. For example, the main quote line has a quantity of one and the associated quote line has a quantity of two. If you increase the quantity of the main quote line to two, the associated quote line’s quantity increases to four.The default value is Proportional. |
| AssociatedQuoteLineId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique identifier of the associated quote line item.This field is a relationship field. In a bundle relationship, this quote line is the bundle component.Relationship NameAssociatedQuoteLineRelationship TypeLookupRefers ToQuoteLineItem |
| AssociatedQuoteLinePricing | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates how the associated quote line item is priced relative to the main quote line item.Possible values are:IncludedInBundlePrice— The associated quote line’s cost is $0 because it’s included in the bundle’s price.NotIncludedInBundlePrice— The associated quote line has a cost because it’s not included in the bundle’s price. |
| AssociatedQuoteLineRole | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionDescribes the position of the associated quote line item in the relationship.Possible values are:BundleComponent—The associated quote line item is part of a bundle.SetComponent—The associated quote line item is part of a set. |
| IsPriceInclusive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether child products are included in the root bundle price. If set to true, the price of each child product is zero.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate), but not viewed it. |
| MainQuoteLineId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique identifier of the main quote line item.This field is a relationship field. In a bundle relationship, this quote line is the bundle parent.Relationship NameMainQuoteLineRelationship TypeLookupRefers ToQuoteLineItem |
| MainQuoteLineRole | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionIndicates the position of the main quote line item in the relationship.Possible values are:Bundle—The main quote line item is the bundle parent.Set—The main quote line item is the set parent. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the quote line relationship. |
| ProductRelatedComponentId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the product related component.This field is a relationship field.Relationship NameProductRelatedComponentRefers ToProductRelatedComponent |
| ProductRelationshipTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique identifier of record that describes the relationship between the main and associated quote lines.This field is a relationship field.Relationship NameProductRelationshipTypeRelationship TypeLookupRefers ToProductRelationshipType |
| QuoteId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the quote to which the main and associated quote lines belong.This field is a relationship field.Relationship NameQuoteRelationship TypeLookupRefers ToQuote |
| RootQuoteLineId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe root quote line for the quote line relationship. In a bundle relationship, the root quote line is the root bundle.This field is a relationship field.Relationship NameRootQuoteLineRefers ToQuoteLineItem |

## Associated Objects

This object has the following associated objects.

[QuoteLineRelationshipFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[QuoteLineRelationshipHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- QuoteLineRelationshipFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- QuoteLineRelationshipHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
