---
title: "AssessmentReason"
domain: omnistudio
topic: assessmentreason
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.640Z
keywords: [AssessmentReason, Supported, Calls, Fields, Associated, Objects]
---

# AssessmentReason

# AssessmentReason

Represents the reasons for an assessment such as the associated coverage information. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| ParentAssessmentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe parent assessment record that this assessment record belongs to.This field is a relationship field.Relationship NameParentAssessmentRelationship TypeMaster-detailRefers ToAssessment (the master object) |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for the assessment.This field is a polymorphic relationship field.Relationship NameReferenceRecordRefers ToClinicalServiceRequest, MedicationRequest |
| ReferenceValue | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe assessment reason in JSON format when there is no Salesforce record to be added as the reference record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AssessmentReasonChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[AssessmentReasonFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[AssessmentReasonHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.