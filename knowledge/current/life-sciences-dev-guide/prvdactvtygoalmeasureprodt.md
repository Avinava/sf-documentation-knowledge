---
title: "PrvdActvtyGoalMeasureProdt"
domain: life-sciences-dev-guide
topic: prvdactvtygoalmeasureprodt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.163Z
estimatedTokens: 699
keywords: [PrvdActvtyGoalMeasureProdt, products, associated, activity, goal, measure, API, version, 65.0, later, Calls, Objects]
---

# PrvdActvtyGoalMeasureProdt

> Represents the details of the products associated with the activity goal
         measure. This object is available in API version 65.0 and later.

# PrvdActvtyGoalMeasureProdt

Represents the details of the products associated with the activity goal measure. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last viewed the record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the provider activity goal measure product. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product associated with the provider activity goal measure.This field is a polymorphic relationship field.Relationship NameProductRefers ToLifeSciMarketableProduct, Product2 |
| ProductWeightage | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe weightage for all product-related activities associated with the provider activity goal measure. |
| ProviderActvtyGoalMeasureId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe provider activity goal measure associated with the provider activity goal measure product.This field is a relationship field.Relationship NameProviderActvtyGoalMeasureRelationship TypeMaster-detailRefers ToProviderActivityGoalMeasure (the master object) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PrvdActvtyGoalMeasureProdtFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PrvdActvtyGoalMeasureProdtHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PrvdActvtyGoalMeasureProdtFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- PrvdActvtyGoalMeasureProdtHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
