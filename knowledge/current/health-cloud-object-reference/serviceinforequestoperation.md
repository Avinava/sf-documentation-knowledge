---
title: "ServiceInfoRequestOperation"
domain: health-cloud-object-reference
topic: serviceinforequestoperation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:38.034Z
estimatedTokens: 917
keywords: [ServiceInfoRequestOperation, system, operation, performed, service, session, launch, questionnaire, package, API, version, 63.0, later, Calls, Associated]
---

# ServiceInfoRequestOperation

> Represents the system operation performed for a service information request
         such as a session launch or a questionnaire package operation. This object is
      available in API version 63.0 and later.

# ServiceInfoRequestOperation

Represents the system operation performed for a service information request such as a session launch or a questionnaire package operation. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| InitiatedDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the operation was initiated. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OperationType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe system operation performed for the service information request. |
| QuestionnaireUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe canonical URL of the questionnaire associated with the service information request operation. |
| ResponseDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the response for the operation was sent. |
| ResponseStatusCode | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status code of the response. |
| ServiceInformationRequestId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe service information request associated with the operation.This field is a relationship field.Relationship NameServiceInformationRequestRelationship TypeMaster-detailRefers ToServiceInformationRequest (the master object) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ServiceInfoRequestOperationChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ServiceInfoRequestOperationFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ServiceInfoRequestOperationHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ServiceInfoRequestOperationChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- ServiceInfoRequestOperationFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ServiceInfoRequestOperationHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
