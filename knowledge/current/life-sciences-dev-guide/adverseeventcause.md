---
title: "AdverseEventCause"
domain: life-sciences-dev-guide
topic: adverseeventcause
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:44.996Z
estimatedTokens: 1089
keywords: [AdverseEventCause, entity, suspected, caused, adverse, event, API, version, 61.0, later, Calls, Associated, Objects]
---

# AdverseEventCause

> Describes the entity that is suspected to have caused the adverse event.
      This object is available in API version 61.0 and later.

# AdverseEventCause

Describes the entity that is suspected to have caused the adverse event. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdverseEventEntryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe adverse incident associated with the adverse incident cause.This field is a relationship field.Relationship NameAdverseEventEntryRelationship TypeMaster-detailRefers ToAdverseEventEntry (the master object) |
| AssessmentMethodCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe assessment method code associated with the adverse incident cause.This field is a polymorphic relationship field.Relationship NameAssessmentMethodCodeRefers ToCodeSet, CodeSetBundle |
| AuthoredById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person who has authored the adverse incident cause.This field is a polymorphic relationship field.Relationship NameAuthoredByRefers ToAccount, Contact, HealthcareFacility, HealthcarePractitionerFacility, ResearchStudyCandidate, User |
| CauseCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code of the adverse incident cause.This field is a polymorphic relationship field.Relationship NameCauseCodeRefers ToCodeSet, CodeSetBundle |
| CauseId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe cause of the adverse event.This field is a polymorphic relationship field.Relationship NameCauseRefers ToCareRegisteredDevice, Medication, MedicationStatement, PatientImmunization, PatientMedicalProcedure, ResearchStudy |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the research study. |
| Probability | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the probability of the cause to have been the reason for the adverse incident.Possible values are:CertainLikelyPossibleUnlikelyConditional or ClassifiedUnassessable or Unclassifiable |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdverseEventCauseChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[AdverseEventCauseFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AdverseEventCauseHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AdverseEventCauseChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- AdverseEventCauseFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- AdverseEventCauseHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
