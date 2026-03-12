---
title: "AsmtQstnMaterialityTpc"
domain: netzero-cloud-dev-guide
topic: asmtqstnmaterialitytpc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.531Z
estimatedTokens: 515
keywords: [AsmtQstnMaterialityTpc, junction, materiality, topic, assessment, question, API, version, 64.0, later, Calls, Associated, Objects]
---

# AsmtQstnMaterialityTpc

> Represents a junction between a materiality topic and an assessment
         question. This object is available in API version 64.0 and later.

# AsmtQstnMaterialityTpc

Represents a junction between a materiality topic and an assessment question. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentQuestionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe assessment question associated with the record.This field is a relationship field.Relationship NameAssessmentQuestionRelationship TypeMaster-detailRefers ToAssessmentQuestion (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| MaterialityTopicId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe materiality topic associated with the record.This field is a relationship field.Relationship NameMaterialityTopicRefers ToMaterialityTopic |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AsmtQstnMaterialityTpcHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AsmtQstnMaterialityTpcHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
