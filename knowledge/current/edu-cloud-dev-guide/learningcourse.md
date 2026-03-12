---
title: "LearningCourse"
domain: edu-cloud-dev-guide
topic: learningcourse
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:26.438Z
estimatedTokens: 1417
keywords: [LearningCourse, course, that’s, learning, framework, API, version, 57.0, later, Calls, Associated, Objects]
---

# LearningCourse

> Represents information about a course that’s required in a learning
         framework.  This object is available in API version 57.0 and later.

# LearningCourse

Represents information about a course that’s required in a learning framework. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcademicLevel | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe applicable point in the education process.Possible values are:Adult EducationDoctoralElementaryGraduateHigh SchoolMiddle SchoolPost-Baccalaureate CertificatePre-K/PreschoolProfessional EducationUndergraduate |
| ActiveFromDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionDate the Learning framework became active. |
| ActiveToDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionDate the Learning framework became inactive. |
| CipCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionClassification of Instructional Programming code that identifies the program or field of study. |
| CourseLevelDescription | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionThe general type or level of instruction provided throughout the course.Possible values are:Accepted as high school equivalentAdvancedAdvanced PlacementBasicCareer and Technical EducationCollege-levelCore SubjectDual CreditEnglish Language LearnerGeneralGifted and TalentedGraduation CreditHonorsInternational BaccalaureateOtherRemedialStudents with disabilitiesUntracked |
| CourseNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number that identifies the level of the course and helps organize the course catalog. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the Learning Course. |
| Duration | TypedoublePropertiesFilter, Nillable, SortDescriptionThe allocated length of time for completion of the Learning Course. |
| DurationUnit | TypepicklistPropertiesFilter, Group, Restricted picklist, Nillable, SortDescriptionThe unit of measurement for the length of time for completion.Possible values are:Clock HoursContinuing Education UnitsCredit HoursNo CreditOther |
| FieldOfStudy | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionThe academic subject related to the course of study.Possible values are:Career and Technical EducationCompositeCritical ReadingEnglishEnglish Language ArtsFine and Performing ArtsForeign Language and LiteratureLife and Physical SciencesMathematicsMilitary ScienceOtherPhysical, Health, and Safety EducationReadingReligious Education and TheologyScienceSocial Sciences and HistorySocial StudiesWriting |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the Learning Course is active (true) or not (false).The default value is false. |
| IsLinkedOnly | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Learning Course is a linked-only course (true) or not (false).The default value is false. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LearningId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionLearning (unique parent field) associated with a Learning Course.This field is a relationship field.Relationship NameLearningRelationship TypeLookupRefers ToLearning |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of a course of study that represents a single unit of teaching that typically lasts one term. |
| ProviderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe Account of the institution that provides the Learning Course. |
| SubjectAbbreviation | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAbbreviation of the Academic Subject for the course of study. For example, MAT = Mathematics. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LearningCourseHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LearningCourseHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
