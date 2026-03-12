---
title: "CareProcessingError"
domain: health-cloud-object-reference
topic: careprocessingerror
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.376Z
estimatedTokens: 1222
keywords: [CareProcessingError, Stores, processing, errors, sent, payer, provider, member’s, authorization, API, version, 58.0, later, Calls, Usage]
---

# CareProcessingError

> Stores information on processing errors sent from payer to provider on a
         member’s authorization request. This object is available in API version 58.0 and
      later.

# CareProcessingError

Stores information on processing errors sent from payer to provider on a member’s authorization request. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code that's associated with the resolution of the error that occurred when processing an authorization request.This field is a polymorphic relationship field.Relationship NameActionCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| Description | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe description of the error. |
| ErrorCodeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe code that's associated with the error that occurred when processing an authorization request.This field is a polymorphic relationship field.Relationship NameErrorCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| LastModifiedById | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe ID of the user who last updated the record. |
| LastModifiedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user updated the record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the care processing error. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ReferenceObjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe object that's associated with the error.This field is a polymorphic relationship field.Relationship NameReferenceObjectRelationship TypeLookupRefers ToCareDiagnosis, CareRequest, CareRequestDrug, CareRequestItem |

## Usage

When payer receives an authorization request from the provider, they review and validate the request details. If an error occurs during the request processing, payer must create appropriate care processing error records with reference to the care request record. This error information is sent to the provider as part of the request response. Alternatively, payers can also automate the record creation by configuring a flow that’s triggered whenever an authorization request is received in the payer system. The flow validates the care request record, identifies any error, and creates appropriate care processing error records to be sent to the provider.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareProcessingErrorChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 63.0)

Change events are available for the object.

[CareProcessingErrorFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareProcessingErrorHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CareProcessingErrorShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CareProcessingErrorChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- CareProcessingErrorFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CareProcessingErrorHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CareProcessingErrorShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
