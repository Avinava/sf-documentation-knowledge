---
title: "DocClauseSetAsmtQstn"
domain: netzero-cloud-dev-guide
topic: docclausesetasmtqstn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.810Z
estimatedTokens: 516
keywords: [DocClauseSetAsmtQstn, junction, document, clause, assessment, question, API, version, 64.0, later, Calls, Associated, Objects]
---

# DocClauseSetAsmtQstn

> Represents a junction between a document clause set and an assessment
         question. This object is available in API version 64.0 and later.

# DocClauseSetAsmtQstn

Represents a junction between a document clause set and an assessment question. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentQuestionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe assessment question associated with the record.This field is a relationship field.Relationship NameAssessmentQuestionRefers ToAssessmentQuestion |
| DocumentClauseSetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe document clause set associated with the record.This field is a relationship field.Relationship NameDocumentClauseSetRelationship TypeMaster-detailRefers ToDocumentClauseSet (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DocClauseSetAsmtQstnHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- DocClauseSetAsmtQstnHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
