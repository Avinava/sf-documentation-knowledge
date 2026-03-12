---
title: "ApplicationRecommendation"
domain: edu-cloud-dev-guide
topic: applicationrecommendation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.860Z
estimatedTokens: 570
keywords: [ApplicationRecommendation, recommendation, individual, application, API, version, 57.0, later, Calls]
---

# ApplicationRecommendation

> Represents information about the recommendation for an individual
         application. This object is available in API version 57.0 and later.

# ApplicationRecommendation

Represents information about the recommendation for an individual application. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicationRecommenderId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe contact associated with the recommendation as the recommender.This field is a relationship field.Relationship NameApplicationRecommenderRelationship TypeLookupRefers ToApplicationRecommender |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible the user accessed this record or list view (LastReferencedDate) but didn’t view it. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name for this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Recommendation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe content submitted as the recommendation. |
| SurveyResponseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe survey response associated with the application recommendation.This field is a relationship field. It’s available in API version 62.0 and later.Relationship NameSurveyResponseRefers ToSurveyResponse |
