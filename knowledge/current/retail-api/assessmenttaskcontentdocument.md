---
title: "AssessmentTaskContentDocument"
domain: retail-api
topic: assessmenttaskcontentdocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.544Z
estimatedTokens: 456
keywords: [AssessmentTaskContentDocument, Associate, content, documents, visits, tasks, promotions, planograms, API, version, 47.0, later, Calls, Associated, Objects]
---

# AssessmentTaskContentDocument

> Associate content documents to visits, tasks, promotions, or planograms.
    This object is available in API version 47.0 and later.

# AssessmentTaskContentDocument

Associate content documents to visits, tasks, promotions, or planograms. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentTaskId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the assessment task. |
| ContentContextId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the attachment or file used as the content document for a custom object that is associated with a task. The IDs are validated against ActionPlanTemplateType. |
| ContentDocumentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the attachment or file used as the content document. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identifier of the content document. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[AssessmentTaskContentDocumentHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

## Related Topics

- AssessmentTaskContentDocumentHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
