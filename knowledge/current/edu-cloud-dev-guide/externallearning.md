---
title: "ExternalLearning"
domain: edu-cloud-dev-guide
topic: externallearning
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.261Z
estimatedTokens: 977
keywords: [ExternalLearning, training, made, external, provider, course, program, on-site, experience, contact, API, version, 65.0, later, Calls]
---

# ExternalLearning

> Represents information that defines a training that is made available by an
         external provider as a course, program, or on-site experience, for a contact. This
      object is available in API version 65.0 and later.

# ExternalLearning

Represents information that defines a training that is made available by an external provider as a course, program, or on-site experience, for a contact. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the External Learning. |
| Duration | TypedoublePropertiesFilter, Nillable, SortDescriptionThe duration of the External Learning. |
| DurationUnit | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the duration unit of the External Learning.Possible values are:Clock HoursContinuing Education UnitsCredit HoursNo CreditOther |
| FieldOfStudy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the field of study for the External Learning.Possible values are:Career and Technical EducationCompositeCritical ReadingEnglishEnglish Language ArtsFine and Performing ArtsForeign Language and LiteratureLife and Physical SciencesMathematicsMilitary ScienceOtherPhysical, Health, and Safety EducationReadingReligious Education and TheologyScienceSocial Sciences and HistorySocial StudiesWriting |
| Identifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the External Learning. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the External Learning is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LearningId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent Learning related to the External Learning.This field is a relationship field.Relationship NameLearningRelationship TypeMaster-detailRefers ToLearning (the master object) |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the External Learning. |
| ProviderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe educational institution related to the External Learning.This field is a relationship field.Relationship NameProviderRefers ToAccount |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the transfer status of the External Learning.Possible values are:InReview—In ReviewNonTransferable—Non TransferablePendingTransferable |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the External Learning.Possible values are:EducationEmploymentExaminationMilitaryOther |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ExternalLearningHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ExternalLearningHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
