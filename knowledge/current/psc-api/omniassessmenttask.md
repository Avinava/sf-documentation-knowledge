---
title: "OmniAssessmentTask"
domain: psc-api
topic: omniassessmenttask
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.031Z
estimatedTokens: 1288
keywords: [OmniAssessmentTask, assessment, task, associated, OmniScript, API, version, 55.0, later, Calls, Objects]
---

# OmniAssessmentTask

> Represents the information about an assessment task that is associated with
         an OmniScript. This object is available in API version 55.0 and later.

# OmniAssessmentTask

Represents the information about an assessment task that is associated with an OmniScript. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe assessment record associated with the runtime instance of an assessment task record. The value is null when the record is designed through action plan template and populated when the assessment is taken through associated omni process.This is a relationship field.Relationship NameAssessmentRelationship TypeLookupRefers ToAssessment |
| DefinitionReferenceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe definition record associated with the runtime record. The value is null if the record is a definition record.This is a relationship field.Relationship NameDefinitionReferenceRelationship TypeLookupRefers ToOmniAssessmentTask |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the task. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of the task. |
| IsDefinition | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicated whether the record is a definition record.The default value is 'false'. |
| IsMandatoryTask | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the action is mandatory.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the omni assessment task record. |
| OmniProcessId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the omni process record associated with the assessment task when it is executed.This is a relationship field.Relationship NameOmniProcessRelationship TypeLookupRefers ToOmniProcess |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the omni assessment task record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Sequence | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sequence in which the task can be performed. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of the task. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the status of the task. You must define and update the values manually. |
| StatusCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionSpecifies the current status of the task.Possible values are:CompletedInProgress—In ProgressIsDefined—Is DefinedNotStarted—Not StartedThe default value is 'IsDefined'. |
| TaskRelationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the relation between an object associated with the action plan target record.This is a polymorphic relationship field.Relationship NameTaskRelationRelationship TypeLookupRefers ToBusinessLicenseApplication, CarePlan, IndividualApplication, PublicComplaint, Visit |
| UniqueName | TypeTextPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique name of the omni assessment task used in the Metadata API. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OmniAssessmentTaskFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[OmniAssessmentTaskHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[OmniAssessmentTaskShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- OmniAssessmentTaskFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- OmniAssessmentTaskHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- OmniAssessmentTaskShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
