---
title: "ProductQualification"
domain: revenue-cloud
topic: productqualification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.198Z
estimatedTokens: 1003
keywords: [ProductQualification, qualification, rules, products, determine, product, qualifies, users, user, context, API, version, 60.0, later, Calls]
---

# ProductQualification

> Represents qualification rules for products. The rules determine when the
         product qualifies to be displayed to users. The rules are based on user context. This
      object is available in API version 60.0 and later.

# ProductQualification

Represents qualification rules for products. The rules determine when the product qualifies to be displayed to users. The rules are based on user context. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Product Catalog Management must be enabled to access this object.

## Fields

| Field | Details |
| --- | --- |
| EffectiveFromDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date from which the qualification rule for the product comes into effect. |
| EffectiveToDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date to which the qualification rule for the product ceases to be in effect. |
| IsQualified | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the product is qualified based on the qualification rules (true) or not (false). For a product to qualify, this field should be true.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the product qualification record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the product qualification record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the product qualification record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the product qualification record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the immediate parent product in the product bundle hierarchy.This field is a relationship field.Relationship NameParentProductRelationship TypeLookupRefers ToProduct2 |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product for which the qualification rule is defined.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| RootProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the root product in the product bundle hierarchy.This field is a relationship field.Relationship NameRootProductRelationship TypeLookupRefers ToProduct2 |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductQualificationFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProductQualificationHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProductQualificationShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProductQualificationFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- ProductQualificationHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
- ProductQualificationShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
