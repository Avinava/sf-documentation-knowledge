---
title: "AssessmentQuestionAssignment"
domain: omnistudio
topic: assessmentquestionassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.615Z
keywords: [AssessmentQuestionAssignment, Supported, Calls, Fields, Associated, Objects]
---

# AssessmentQuestionAssignment

# AssessmentQuestionAssignment

Represents a junction between an assessment question set and an assessment question. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentQuestionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the assessment question associated with this record.This is a relationship field.Relationship NameAssessmentQuestionRelationship TypeLookupRefers ToAssessmentQuestion |
| AssessmentQuestionSetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the assessment question set associated with this record.This is a relationship field.Relationship NameAssessmentQuestionSetRelationship TypeLookupRefers ToAssessmentQuestionSet |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the relationship record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sequence number for an assessment question in an assessment question set.Available in API version 64.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AssessmentQuestionAssignmentChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[AssessmentQuestionAssignmentFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[AssessmentQuestionAssignmentHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[AssessmentQuestionAssignmentShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.