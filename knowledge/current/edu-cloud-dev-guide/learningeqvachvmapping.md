---
title: "LearningEqvAchvMapping"
domain: edu-cloud-dev-guide
topic: learningeqvachvmapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.458Z
estimatedTokens: 625
keywords: [LearningEqvAchvMapping, mapping, learning, equivalency, internal, achievement, group, external, API, version, 65.0, later, Calls, Associated, Objects]
---

# LearningEqvAchvMapping

> Represents the mapping between a learning equivalency, internal achievement
         group, and external achievement group. This object is available in API version 65.0
      and later.

# LearningEqvAchvMapping

Represents the mapping between a learning equivalency, internal achievement group, and external achievement group. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LearningEquivalencyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent Learning Equivalency related to the Learning Equivalency Achievement Mapping.This field is a relationship field.Relationship NameLearningEquivalencyRelationship TypeMaster-detailRefers ToLearningEquivalency (the master object) |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the Learning Equivalency Achievement Mapping. |
| SourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe source Learning Achievement related to the Learning Equivalency Achievement Mapping.This field is a relationship field.Relationship NameSourceRefers ToLearningAchievement |
| TargetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe target Learning Achievement related to the Learning Equivalency Achievement Mapping.This field is a relationship field.Relationship NameTargetRefers ToLearningAchievement |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LearningEqvAchvMappingHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LearningEqvAchvMappingHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
