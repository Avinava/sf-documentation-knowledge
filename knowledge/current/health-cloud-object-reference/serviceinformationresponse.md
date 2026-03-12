---
title: "ServiceInformationResponse"
domain: health-cloud-object-reference
topic: serviceinformationresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:38.100Z
estimatedTokens: 1312
keywords: [ServiceInformationResponse, service, API, version, 63.0, later, Calls, Associated, Objects]
---

# ServiceInformationResponse

> Represents a response to a service information request. This object is
      available in API version 63.0 and later.

# ServiceInformationResponse

Represents a response to a service information request. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdditionalNote | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information related to the response. |
| FocusType | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the types of data the response focuses on.Possible values are:MedicationRequestServiceRequest |
| Identifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identifier of the response. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| ReferenceSourceCategoryCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code of the category that the reference source belongs to.This field is a polymorphic relationship field.Relationship NameReferenceSourceCategoryCodeRefers ToCodeSet |
| ReferenceSourceIconUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe URL to the icon representing the source of information of the response. The icon should be a 100x100 pixel PNG image without any transparent region. |
| ReferenceSourceName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source of information for the response. |
| ReferenceSourceUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe URL to the source of information for the response. |
| ResponseEngagementStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the engagement status of the response. |
| ResponseSubtype | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the subtype of service information response. For example, coverage info, cost, network, etc. |
| ResponseType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of service information response. For example, card or system action.Possible values are:CardSystemAction—System Action |
| ServiceInformationRequestId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe service information request for which the response is sent.This field is a relationship field.Relationship NameServiceInformationRequestRelationship TypeMaster-detailRefers ToServiceInformationRequest (the master object) |
| SuggestionSelectionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of selection to be made for the suggestions in the response. |
| Summary | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe summary of the response. |
| UrgencyIndicator | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates how urgent the content of the response is.Possible values are:infowarning |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ServiceInformationResponseChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ServiceInformationResponseFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ServiceInformationResponseHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ServiceInformationResponseChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- ServiceInformationResponseFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ServiceInformationResponseHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
