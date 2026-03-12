---
title: "LearningEquivalencyLearning"
domain: edu-cloud-dev-guide
topic: learningequivalencylearning
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.451Z
estimatedTokens: 541
keywords: [LearningEquivalencyLearning, junction, learning, equivalency, filter, equivalencies, API, version, 66.0, later, Calls, Associated, Objects]
---

# LearningEquivalencyLearning

> Represents a junction between a learning equivalency and a learning. Use this
         object to filter learning equivalencies by learning. This object is available in API
      version 66.0 and later.

# LearningEquivalencyLearning

Represents a junction between a learning equivalency and a learning. Use this object to filter learning equivalencies by learning. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LearningEquivalencyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe learning equivalency associated with the record.This field is a relationship field.Relationship NameLearningEquivalencyRelationship TypeMaster-detailRefers ToLearningEquivalency (the master object) |
| LearningId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe learning associated with the record.This field is a relationship field.Relationship NameLearningRefers ToLearning |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the Learning Equivalency Learning. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LearningEquivalencyLearningHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LearningEquivalencyLearningHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
