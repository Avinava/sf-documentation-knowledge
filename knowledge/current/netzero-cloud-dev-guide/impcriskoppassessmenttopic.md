---
title: "ImpcRiskOppAssessmentTopic"
domain: netzero-cloud-dev-guide
topic: impcriskoppassessmenttopic
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.423Z
estimatedTokens: 617
keywords: [ImpcRiskOppAssessmentTopic, junction, impact, risk, opportunity, assessment, materiality, topic, API, version, 63.0, later, Calls, Associated, Objects]
---

# ImpcRiskOppAssessmentTopic

> Represents a junction between an impact risk opportunity assessment and a
         materiality topic. This object is available in API version 63.0 and later.

# ImpcRiskOppAssessmentTopic

Represents a junction between an impact risk opportunity assessment and a materiality topic. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ImpcRiskOppAssessmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe impact risk opportunity assesssment associated with the record.This field is a relationship field.Relationship NameImpcRiskOppAssessmentRelationship TypeMaster-detailRefers ToImpcRiskOppAssessment (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| MaterialityTopicId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe materiality topic associated with the record.This field is a relationship field.Relationship NameMaterialityTopicRefers ToMaterialityTopic |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ImpcRiskOppAssessmentTopicFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ImpcRiskOppAssessmentTopicHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ImpcRiskOppAssessmentTopicFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- ImpcRiskOppAssessmentTopicHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
