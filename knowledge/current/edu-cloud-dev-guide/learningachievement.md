---
title: "LearningAchievement"
domain: edu-cloud-dev-guide
topic: learningachievement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.415Z
estimatedTokens: 1160
keywords: [LearningAchievement, outcome, learning, activity, API, version, 57.0, later, Calls, Associated, Objects]
---

# LearningAchievement

> Represents information about the outcome of a learning activity.  This
      object is available in API version 57.0 and later.

# LearningAchievement

Represents information about the outcome of a learning activity. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Abbreviation | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionShort name for a Learning Achievement. |
| AcademicLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionThe applicable point in the education process.Possible values are:Adult EducationDoctoralElementaryGraduateHigh SchoolMiddle SchoolPost-Baccalaureate CertificatePre-K/PreschoolProfessional EducationUndergraduate |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of a Learning Achievement. |
| FieldOfStudy | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionThe academic subject related to the course of study.Possible values are:Career and Technical EducationCompositeCritical ReadingEnglishEnglish Language ArtsFine and Performing ArtsForeign Language and LiteratureLife and Physical SciencesMathematicsMilitary ScienceOtherPhysical, Health, and Safety EducationReadingReligious Education and TheologyScienceSocial Sciences and HistorySocial StudiesWriting |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| IssuerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe institution that grants the credential.This field is a relationship field.Relationship NameIssuerRelationship TypeLookupRefers ToAccount |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of a Learning Achievement that represents a modeled qualification, achievement, or other program outcome. Used to provide a meaningful mapping between Learnings and the result of their successful completion. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Specialization | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNarrows the category, subject, area of study, discipline, or general branch of knowledge that the achievement was awarded for. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LearningAchievementHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[LearningAchievementOwnerSharingRule](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[LearningAchievementShare](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LearningAchievementHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- LearningAchievementOwnerSharingRule (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- LearningAchievementShare (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm)
