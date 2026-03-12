---
title: "AdverseEventEntry"
domain: life-sciences-dev-guide
topic: adverseevententry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.020Z
estimatedTokens: 1906
keywords: [AdverseEventEntry, event, unintended, anticipated, effects, research, participants, API, version, 61.0, later, Calls, Associated, Objects]
---

# AdverseEventEntry

> Represents the event related to unintended/anticipated effects on research
         participants. This object is available in API version 61.0 and later.

# AdverseEventEntry

Represents the event related to unintended/anticipated effects on research participants. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Category | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the category of the adverse event.Possible values are:Wrong PatientProcedure IncidentMedication IncidentDevice MalfunctionUnsafe Physical EnvironmentHospital Acquired InfectionWrong Body Site |
| CauseEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of the cause. |
| CauseStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of the cause. |
| ClinicalEncounterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe clinical encounter associated with the adverse incident.This field is a relationship field.Relationship NameClinicalEncounterRefers ToClinicalEncounter |
| DetectedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the adverse event was detected. |
| EventCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code of the adverse incident.This field is a polymorphic relationship field.Relationship NameEventCodeRefers ToCodeSet, CodeSetBundle |
| EventEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of the incident. |
| EventStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of the incident. |
| HasSubjectDiscontinuedStudy | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the subject has discontinued from the research study due to the adverse incident.The default value is false. |
| IsExpected | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the adverse incident is expected for the research study.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe site where the adverse event occured.This field is a polymorphic relationship field.Relationship NameLocationRefers ToCareProgramSite, HealthcareFacility |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the adverse event. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RecordedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account or person who recorded the adverse incident.This field is a polymorphic relationship field.Relationship NameRecordedByRefers ToAccount, CareProgramEnrollee |
| RecordedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the adverse event was recorded. |
| RelatedAdverseEventEntryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe adverse event entry that's associated with this record.This field is a relationship field.Relationship NameRelatedAdverseEventEntryRefers ToAdverseEventEntry |
| ReportingContextId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe context for which the adverse incident has been reported.This field is a polymorphic relationship field.Relationship NameReportingContextRefers ToResearchStudy |
| Severity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the severity of the adverse event.Possible values are:MildModerateSeriousLife Threatening or DisablingDeathUnserious |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external system that generated the record. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the record in the external system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which this item was last changed in the source system |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the status of the adverse incident.Possible values are:In ProgressCompletedEntered-in-ErrorUnknown |
| SubjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe subject of the adverse incident.This field is a polymorphic relationship field.Relationship NameSubjectRefers ToAccount, CareProgramEnrollee, HealthcareProvider |
| Type | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of adverse incident.Possible values are:Actual Adverse EventPotential Adverse Event |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdverseEventEntryChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[AdverseEventEntryFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AdverseEventEntryHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AdverseEventEntryShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AdverseEventEntryChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- AdverseEventEntryFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- AdverseEventEntryHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- AdverseEventEntryShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
