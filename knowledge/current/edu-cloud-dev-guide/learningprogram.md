---
title: "LearningProgram"
domain: edu-cloud-dev-guide
topic: learningprogram
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.512Z
estimatedTokens: 1407
keywords: [LearningProgram, trainings, program, that’s, obtain, credential, API, version, 57.0, later, Calls, Associated, Objects]
---

# LearningProgram

> Represents information about one or more trainings in a program that’s
         required to obtain a credential.  This object is available in API version 57.0 and
      later.

# LearningProgram

Represents information about one or more trainings in a program that’s required to obtain a credential. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcademicLevel | TypepicklistPropertiesFilter, Group, Restricted picklist, Nillable, SortDescriptionThe applicable point in the education process.Possible values are:Adult EducationDoctoralElementaryGraduateHigh SchoolMiddle SchoolPost-Baccalaureate CertificatePre-K/PreschoolProfessional EducationUndergraduate |
| ActiveFromDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionDate the Learning Program became active. |
| ActiveToDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionDate the Learning Program became inactive. |
| Category | TypestringPropertiesFilter, Nillable, SortDescriptionSpecifies the category of the learning program. |
| CipCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionClassification of Instructional Programming code that identifies the program or field of study. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the Learning Program. |
| DoesCreateOpportunityRecord | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether an Opportunity record is created (true) or not (false) for expressions of interest in the Learning Program. The default value is false. |
| DoesGroupOpportunities | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether an applicant’s academic interests are linked to a single opportunity (true) or not (false). This field is available in API version 62.0 and later.The default value is false. |
| Duration | TypedoublePropertiesFilter, Nillable, SortDescriptionThe allocated length of time for completion of the Learning Program. |
| DurationUnit | TypepicklistPropertiesFilter, Group, Restricted picklist, Nillable, SortDescriptionThe unit of measurement for the length of time for completion.Possible values are:Clock HoursContinuing Education UnitsCredit HoursNo CreditOther |
| Format | TypestringPropertiesFilter, Nillable, SortDescriptionSpecifies the format in which the learning program is offered. |
| Grade | TypestringPropertiesFilter, Nillable, SortDescriptionSpecifies the grade of the learning program. |
| ImageUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe URL to an image for the learning program. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies that the Learning Program is active.The default value is false. |
| IsTopLevelProgram | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIdentifies whether the learning program is a top-level program (true) or not (false). The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible the user accessed this record or list view (LastReferencedDate) but didn’t view it. |
| LearningId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionLearning (unique parent field) associated with a Learning Program.This field is a relationship field.Relationship NameLearningRelationship TypeLookupRefers ToLearning |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the Learning Program that leads to a Learning Achievement. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated with the learning program.This field is a relationship field. It’s available in API version 62.0 and later.Relationship NameProduct2Refers ToProduct2 |
| ProviderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionAccount of the institution that provides the Learning Program.This field is a relationship field.Relationship NameProviderRelationship TypeLookupRefers ToAccount |
| ShortDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe short description of the learning program. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LearningProgramHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LearningProgramHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
