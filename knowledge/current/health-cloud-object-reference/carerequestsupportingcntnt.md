---
title: "CareRequestSupportingCntnt"
domain: health-cloud-object-reference
topic: carerequestsupportingcntnt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.698Z
estimatedTokens: 1139
keywords: [CareRequestSupportingCntnt, supporting, content, care, assessments, documents, API, version, 63.0, later, Calls, Associated, Objects]
---

# CareRequestSupportingCntnt

> Represents details about supporting content of a care request such as
         assessments or content documents. This object is available in API version 63.0 and
      later.

# CareRequestSupportingCntnt

Represents details about supporting content of a care request such as assessments or content documents. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CareRequestId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe care request that the supporting content is captured for.This field is a relationship field.Relationship NameCareRequestRelationship TypeMaster-detailRefers ToCareRequest (the master object) |
| CategoryCodeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe code representing the category that the supporting content belongs to.This field is a relationship field.Relationship NameCategoryCodeRefers ToCodeSetBundle |
| InformationTypeCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code respresenting the type of supporting content added to the care request.This field is a relationship field.Relationship NameInformationTypeCodeRefers ToCodeSetBundle |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| ReasonCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code representing the reason why the supporting content is required.This field is a relationship field.Relationship NameReasonCodeRefers ToCodeSetBundle |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe assessment or content document used as the supporting content.This field is a polymorphic relationship field.Relationship NameReferenceRecordRefers ToAssessment, ContentDocument |
| RequestedDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the supporting content was requested. |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sequence number of the content when multiple contents are available. |
| SubmissionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the channel that's used to submit the supporting content.Possible values are:CDexFaxOtherPortalX12 |
| SubmittedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the supporting content was submitted. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareRequestSupportingCntntChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[CareRequestSupportingCntntFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareRequestSupportingCntntHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CareRequestSupportingCntntChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- CareRequestSupportingCntntFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CareRequestSupportingCntntHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
