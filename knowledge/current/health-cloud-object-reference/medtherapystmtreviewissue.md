---
title: "MedTherapyStmtReviewIssue"
domain: health-cloud-object-reference
topic: medtherapystmtreviewissue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.680Z
estimatedTokens: 754
keywords: [MedTherapyStmtReviewIssue, junction, Medication, Therapy, Statement, Review, Clinical, Detected, Issue, objects, API, version, 56.0, later, Calls]
---

# MedTherapyStmtReviewIssue

> Represents a junction object between the Medication Therapy Statement Review
         and Clinical Detected Issue objects. This object is available in API version 56.0 and
      later.

# MedTherapyStmtReviewIssue

Represents a junction object between the Medication Therapy Statement Review and Clinical Detected Issue objects. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ClinicalDetectedIssueId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe clinical detected issue associated with the medication therapy statement review.This field is a relationship field.Relationship NameClinicalDetectedIssueRelationship TypeLookupRefers ToClinicalDetectedIssue |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| MedicationTherapyStmtReviewId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe medication therapy statement review associated with the clinical detected issue.This field is a relationship field.Relationship NameMedicationTherapyStmtReviewRelationship TypeMaster-DetailRefers ToMedicationTherapyStmtReview |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the medication therapy statement review issue record. |
| SourceSysModifiedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the record was last modified in its source system. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source system from where the record was brought into Salesforce. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the record in its source system. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MedTherapyStmtReviewIssueFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[MedTherapyStmtReviewIssueHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- MedTherapyStmtReviewIssueFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- MedTherapyStmtReviewIssueHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
