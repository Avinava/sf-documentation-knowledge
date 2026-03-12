---
title: "MaterialityTopicQstn"
domain: netzero-cloud-dev-guide
topic: materialitytopicqstn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.508Z
estimatedTokens: 691
keywords: [MaterialityTopicQstn, mapping, materiality, assessment, topics, survey, questions, API, version, 59.0, later, Calls, Associated, Objects]
---

# MaterialityTopicQstn

> Represents the mapping between the materiality assessment topics and
         the materiality assessment survey questions. This object is available in API version
      59.0 and later.

# MaterialityTopicQstn

Represents the mapping between the materiality assessment topics and the materiality assessment survey questions. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ImpactType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of impact associated with the survey question.Possible values are:InwardOutwardThe default value is Inward. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| MaterialityAssessmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe materiality assessment associated with the question.This field is a relationship field.Relationship NameMaterialityAssessmentRelationship TypeLookupRefers ToMaterialityAssessment |
| MaterialityTopicId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe materiality assessment topic associated with the question.This field is a relationship field.Relationship NameMaterialityTopicRelationship TypeLookupRefers ToMaterialityTopic |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of this materiality assessment topic question. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MaterialityTopicQstnFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[MaterialityTopicQstnHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- MaterialityTopicQstnFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- MaterialityTopicQstnHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
