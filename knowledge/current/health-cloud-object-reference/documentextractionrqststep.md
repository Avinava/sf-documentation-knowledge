---
title: "DocumentExtractionRqstStep"
domain: health-cloud-object-reference
topic: documentextractionrqststep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.942Z
estimatedTokens: 747
keywords: [DocumentExtractionRqstStep, step, involved, document, extraction, process, API, version, 64.0, later, Calls, Associated, Objects]
---

# DocumentExtractionRqstStep

> Represents each step involved in the document extraction request
         process. This object is available in API version 64.0 and later.

# DocumentExtractionRqstStep

Represents each step involved in the document extraction request process. This object is available in API version 64.0 and later.

## Example

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=health_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DocumentExtractionRequestId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent document extraction request associated with the document extraction request step.This field is a relationship field.Relationship NameDocumentExtractionRequestRelationship TypeMaster-detailRefers ToDocumentExtractionRequest (the master object) |
| InputData | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe JSON input required for the current document extraction request step. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this document. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the document extraction request step. |
| OutputData | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe JSON output of the current step, which is passed as input for the next step. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the document extraction request step.Possible values are:CompletedErrorInProgressNew |
| StatusReason | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe reason for the document extraction request step status. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of document extraction request step.Possible values are:ExtractSaveTransform |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DocumentExtractionRqstStepHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- DocumentExtractionRqstStepHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
