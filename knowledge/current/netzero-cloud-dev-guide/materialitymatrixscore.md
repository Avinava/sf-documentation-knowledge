---
title: "MaterialityMatrixScore"
domain: netzero-cloud-dev-guide
topic: materialitymatrixscore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.470Z
estimatedTokens: 826
keywords: [MaterialityMatrixScore, materiality, matrix, score, visualize, data, gathered, assessment, intake, process, API, version, 59.0, later, Calls]
---

# MaterialityMatrixScore

> Represents the materiality matrix score used to visualize all the
         data gathered through materiality assessment intake process. This object is available
      in API version 59.0 and later.

# MaterialityMatrixScore

Represents the materiality matrix score used to visualize all the data gathered through materiality assessment intake process. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CalculatedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime in which the record was last calculated, should be generally equal to Update Date. |
| InwardImpactScore | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe topic impact score for the company that conducts the materiality assessment. |
| IsTopicRelevant | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the topic is materially relevant for the company (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| MaterialityAsmtTopicId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe materiality assessment topic associated with the matrix.This field is a relationship field.Relationship NameMaterialityAsmtTopicRelationship TypeLookupRefers ToMaterialityTopic |
| MaterialityAssessmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe materiality assessment associated with the matrix.This field is a relationship field.Relationship NameMaterialityAssessmentRelationship TypeLookupRefers ToMaterialityAssessment |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the materiality matrix score. |
| OutwardImpactScore | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe topic impact score for the stakeholder interested in the materiality assessment conducted by the company. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MaterialityMatrixScoreFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[MaterialityMatrixScoreHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- MaterialityMatrixScoreFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- MaterialityMatrixScoreHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
