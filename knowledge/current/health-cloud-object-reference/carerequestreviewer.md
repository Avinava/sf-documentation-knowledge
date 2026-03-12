---
title: "CareRequestReviewer"
domain: health-cloud-object-reference
topic: carerequestreviewer
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.690Z
estimatedTokens: 1016
keywords: [CareRequestReviewer, care, reviewer, including, status, end, review, reviewer’s, notes, date, item, drug, diagnosis, associated, API]
---

# CareRequestReviewer

> Represents the details of a care request reviewer including name, reviewer
         type, status of the care request at the end of the review, the reviewer’s notes, and date
         of review. A care request, care request item, care request drug, or care diagnosis can be
         associated with a care request reviewer. This object is available in API version 52.0
      and later.

# CareRequestReviewer

Represents the details of a care request reviewer including name, reviewer type, status of the care request at the end of the review, the reviewer’s notes, and date of review. A care request, care request item, care request drug, or care diagnosis can be associated with a care request reviewer. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CareRequestCaseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe case related to the care request.This is a relationship field.Relationship NameCareRequestCaseRelationship TypeLookupRefers ToCase |
| CareRequestReferenceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe care request, care request item, care request drug, or care diagnosis associated with the care request reviewer.This is a polymorphic relationship field.Relationship NameCareRequestReferenceRelationship TypeLookupRefers ToCareDiagnosis, CareRequest, CareRequestDrug, CareRequestItem |
| ContentDocumentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe content document that's attached to the reviewer note.This field is a relationship field.Relationship NameContentDocumentRelationship TypeLookupRefers ToContentDocumentThis field is available in API version 56.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name associated with the record. |
| ReviewDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the care request was reviewed. |
| ReviewerId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the user who reviewed the care request.This is a polymorphic relationship field.Relationship NameReviewerRelationship TypeLookupRefers ToHealthcareProvider, User |
| ReviewerNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe notes related to the review. |
| ReviewerType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the reviewer who reviewed the care request.Possible values are:Medical Director ReviewPeer ReviewPhysician ReviewRegistered Nurse ReviewThe default value is 'Registered Nurse Review'. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the care request.Possible values are:ApprovedDeniedIn processThe default value is 'Approved'. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareRequestReviewerChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API Version 62.0)

Change events are available for the object.

[CareRequestReviewerFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[CareRequestReviewerHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
