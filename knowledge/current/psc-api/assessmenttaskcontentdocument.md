---
title: "AssessmentTaskContentDocument"
domain: psc-api
topic: assessmenttaskcontentdocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.079Z
estimatedTokens: 536
keywords: [AssessmentTaskContentDocument, Associate, content, documents, visits, API, version, 47.0, later, Calls, Associated, Objects]
---

# AssessmentTaskContentDocument

> Associate content documents to visits. This object is available in API
    version 47.0 and later.

# AssessmentTaskContentDocument

Associate content documents to visits. This object is available in API version 47.0 and later.

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

[AssessmentTaskContentDocumentOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[AssessmentTaskContentDocumentFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object.

## Related Topics

- AssessmentTaskContentDocumentOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- AssessmentTaskContentDocumentFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
