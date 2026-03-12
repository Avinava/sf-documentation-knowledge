---
title: "ResearchStdyCndtStatusPrd"
domain: life-sciences-dev-guide
topic: researchstdycndtstatusprd
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.263Z
estimatedTokens: 747
keywords: [ResearchStdyCndtStatusPrd, time, duration, research, study, candidate, assigned, specific, status, API, version, 61.0, later, Calls, Associated]
---

# ResearchStdyCndtStatusPrd

> Represents the time duration during which a research study candidate is
         assigned a specific status. This object is available in API version 61.0 and
      later.

# ResearchStdyCndtStatusPrd

Represents the time duration during which a research study candidate is assigned a specific status. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EffectiveEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe effective end date and time of the candidate status. |
| EffectiveStartDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe effective start date and time of the candidate status. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the research study candidate status period. |
| ResearchStudyCandidateId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe research study candidate associated with the research study candidate status period.This field is a relationship field.Relationship NameResearchStudyCandidateRelationship TypeMaster-detailRefers ToResearchStudyCandidate (the master object) |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the status of the candidate.Possible values are:DroppedEligibleEnrolledEvaluation CompletedEvaluation In ProgressIn ConsiderationIneligibleNewPre-screeningRandomizedRejectedScreening |
| StatusReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason why the candidate was assigned the status. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ResearchStdyCndtStatusPrdChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- ResearchStdyCndtStatusPrdChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
