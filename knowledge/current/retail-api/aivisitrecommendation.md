---
title: "AiVisitRecommendation"
domain: retail-api
topic: aivisitrecommendation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.032Z
estimatedTokens: 637
keywords: [AiVisitRecommendation, visit, recommendation, API, version, 50.0, later, Calls]
---

# AiVisitRecommendation

> Represents the details of a visit recommendation. This object is available
    in API version 50.0 and later.

# AiVisitRecommendation

Represents the details of a visit recommendation. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AggregatedScore | TypedoublePropertiesCreate, Filter, Nillable, SortDescriptionAggregate score for this visit recommendation. Based on the rule score and the model score. |
| AiVisitRecommendRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the visit recommendation request associated with this record. |
| IsLatest | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates if the recommendation is the latest recommendation. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| ModelScore | TypetextareaPropertiesCreate, NillableDescriptionThe score provided by the machine-learning model. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the visit recommendation. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user associated with this record. |
| RecommendationDecision | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionStatus of the recommendation request.Possible values are:ACCEPTED—ScheduledACCEPTED_FAILED—Failed to ScheduleACCEPTED_PENDING—Scheduling In ProgressRECOMMENDED—RecommendedREJECTED—Ignored |
| RecommendationDecisionComment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDetails about why a recommendation was accepted or rejected. |
| RecommendationReason | TypetextareaPropertiesCreate, NillableDescriptionDetails about why this visit is recommended. |
| RuleScore | TypedoublePropertiesCreate, Filter, Nillable, SortDescriptionThe score provided by the recommendation strategy. |
| VisitDate | TypedatePropertiesCreate, Filter, Group, SortDescriptionRecommended date on which the site must be visited. |
| VisitSiteId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the location for which visit is recommended. |
