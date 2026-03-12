---
title: "PrvdActvtyPlanAdjProdt"
domain: life-sciences-dev-guide
topic: prvdactvtyplanadjprodt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.171Z
estimatedTokens: 706
keywords: [PrvdActvtyPlanAdjProdt, products, associated, provider, activity, plan, adjustment, API, version, 65.0, later, Calls, Objects]
---

# PrvdActvtyPlanAdjProdt

> Represents the details of the products associated with the provider activity plan
      adjustment. This object is available in API version 65.0 and later.

# PrvdActvtyPlanAdjProdt

Represents the details of the products associated with the provider activity plan adjustment. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last viewed the record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the product-related activity plan adjustment request. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product associated with the provider activity plan adjustment.This field is a polymorphic relationship field.Relationship NameProductRefers ToLifeSciMarketableProduct, Product2 |
| ProductWeightage | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe weightage for all product-related activities associated with the provider activity plan adjustment. |
| ProviderActvtyPlanAdjusmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe provider activity plan adjustment associated with the provider activity plan adjustment product.This field is a relationship field.Relationship NameProviderActvtyPlanAdjusmentRelationship TypeMaster-detailRefers ToProviderActvtyPlanAdjusment (the parent object) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PrvdActvtyPlanAdjProdtFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PrvdActvtyPlanAdjProdtHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PrvdActvtyPlanAdjProdtFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- PrvdActvtyPlanAdjProdtHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
