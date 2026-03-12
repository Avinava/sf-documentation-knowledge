---
title: "ApplicationRecommender"
domain: edu-cloud-dev-guide
topic: applicationrecommender
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.871Z
estimatedTokens: 868
keywords: [ApplicationRecommender, junction, individual, application, recommender, API, version, 57.0, later, Calls]
---

# ApplicationRecommender

> Represents a junction between an individual application and the recommender
         of the application. This object is available in API version 57.0 and later.

# ApplicationRecommender

Represents a junction between an individual application and the recommender of the application. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe individual application that's associated with the recommender.This field is a relationship field.Relationship NameApplicationRelationship TypeLookupRefers ToIndividualApplication |
| DoesSendSurvey | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether automation sends a recommendation survey to the recommender (true) or not (false). This field is available in API version 62.0 and later.The default value is false |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible the user accessed this record or list view (LastReferencedDate) but didn’t view it. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name for this record. |
| RecommendationStatus | TypepicklistPropertiesCreate, Filter, Restricted picklist, Group, Sort, UpdateDescriptionSpecifies the status of the recommendation.Possible values are:Canceled. This value is available in API version 62.0 and later.RequestedSubmitted |
| RecommenderId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe contact associated with the application as a recommender.This field is a relationship field.Relationship NameRecommenderRelationship TypeLookupRefers ToContact |
| SubmittedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the date on which the recommendation was submitted. |
| SurveyDeveloperName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe developer name of the survey sent to the recommender. This field is available in API version 62.0 and later. |
| SurveySubject | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the survey subject record. Used for tracking recommender types. This field is available in API version 62.0 and later. |
| VerificationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date and time of the recommendation verification. This field is available in API version 62.0 and later. |
| VerificationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe verification status of the application. This field is available in API version 62.0 and later.Possible values are:AcceptedNot VerifiedRejectedWaived |
