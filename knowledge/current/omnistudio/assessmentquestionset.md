---
title: "AssessmentQuestionSet"
domain: omnistudio
topic: assessmentquestionset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.627Z
keywords: [AssessmentQuestionSet, Supported, Calls, Fields, Associated, Objects]
---

# AssessmentQuestionSet

# AssessmentQuestionSet

Container object for assessment questions. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The question set name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the relationship record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AssessmentQuestionSetChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[AssessmentQuestionSetFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[AssessmentQuestionSetHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[AssessmentQuestionSetShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.