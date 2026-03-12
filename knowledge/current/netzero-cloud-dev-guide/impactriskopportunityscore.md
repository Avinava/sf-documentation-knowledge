---
title: "ImpactRiskOpportunityScore"
domain: netzero-cloud-dev-guide
topic: impactriskopportunityscore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.405Z
estimatedTokens: 1031
keywords: [ImpactRiskOpportunityScore, score, impact, risk, opportunity, assessment, API, version, 63.0, later, Calls, Associated, Objects]
---

# ImpactRiskOpportunityScore

> Represents the score of an impact, risk, or opportunity for an
         assessment. This object is available in API version 63.0 and later.

# ImpactRiskOpportunityScore

Represents the score of an impact, risk, or opportunity for an assessment. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ImpactIrremediability | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA value from 1 through 5 that represents the irremediability of an impact, where 1 indicates the lowest and 5 indicates the highest. |
| ImpactRiskOpportunityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe impact risk opportunity record associated with the impact risk opportunity score.This field is a relationship field.Relationship NameImpactRiskOpportunityRelationship TypeMaster-detailRefers ToImpactRiskOpportunity (the master object) |
| ImpactScale | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA value from 1 through 5 that represents the scale of an impact occurring, where 1 indicates the smallest scale and 5 indicates the largest scale. |
| ImpactScope | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA value from 1 through 5 that represents the scope of an impact, where 1 indicates the smallest scope and 5 indicates the largest scope. |
| ImpactSeverity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA value from 1 through 5 that represents the severity of an impact, where 1 indicates the lowest severity and 5 indicates the highest severity. |
| ImpcRiskOppAssessmentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe impact risk opportunity assessment record associated with the impact risk opportunity score.This field is a relationship field.Relationship NameImpcRiskOppAssessmentRefers ToImpcRiskOppAssessment |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Likelihood | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA value from 1 through 5 that represents the likelihood of a impact, risk, or opportunity occurring, where 1 indicates the lowest probability and 5 indicates the highest probability. |
| Magnitude | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA value from 1 through 5 that represents the magnitude of a risk, impact, or opportunity, where 1 indicates the smallest magnitude and 5 indicates the largest magnitude. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| Notes | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRelevant context for scoring values. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ImpactRiskOpportunityScoreFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ImpactRiskOpportunityScoreHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ImpactRiskOpportunityScoreFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- ImpactRiskOpportunityScoreHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
