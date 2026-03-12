---
title: "ServiceInformationRequest"
domain: health-cloud-object-reference
topic: serviceinformationrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:38.088Z
estimatedTokens: 1883
keywords: [ServiceInformationRequest, service, date, time, submitted, requested, API, version, 63.0, later, Calls, Associated, Objects]
---

# ServiceInformationRequest

> Represents information about a service information request, such as the date
         and time when the request was submitted and the type of service requested. This object
      is available in API version 63.0 and later.

# ServiceInformationRequest

Represents information about a service information request, such as the date and time when the request was submitted and the type of service requested. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccessTokenUsageStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the usage status of the access token that was sent with the request. |
| ApplicationUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe URL of the application used by the requester. |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case associated with the service information request.This field is a relationship field.Relationship NameCaseRefers ToCase |
| ClientSourceSysIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn identifier of the client's source system that sent the request. |
| ContextType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the context from which the service information request was launched. |
| DocRequiredReasonType | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionIndicates the reason why the documentation is required. For example, it may be required to be submitted with a prior-auhtorization or claim. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RecipientOrgIdentifierId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique identifier of the organization to whom the request was sent.This field is a polymorphic relationship field.Relationship NameRecipientOrgIdentifierRefers ToIdentifier |
| RequestDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the request was recieved. |
| RequestPayload | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe input payload sent as part of the request. |
| RequesterExternalIdentifier | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe identifier of the user who sent the request, as recorded in an external system.This field is available in API version 64.0 and later. |
| RequesterOrgExtlIdentifier | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe identifier of the organization that sent the request, as recorded in an external system.This field is available in API version 64.0 and later. |
| RequesterOrgStdIdentifierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique standard identifier of the organization that sent the request.This field is a polymorphic relationship field.Relationship NameRequesterOrgStdIdentifierRefers ToIdentifier |
| RequesterStandardIdentifierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique standard identifier of the user who sent the request.This field is a polymorphic relationship field.Relationship NameRequesterStandardIdentifierRefers ToIdentifier |
| ResponseCode | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe status code returned in response to the request. |
| ResponseDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the response to the request was sent. |
| ServiceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of service that was requested.Possible values are:order-echoorder-sign |
| SourceType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of system that captured the request.Possible values are:payer-sourcedprovider-sourced |
| SvcRqstInvocationIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identifier of the service request invocation. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage type of the service information request. For example, Coverage Requirement Discovery (CRD) or Documentation Templates and Rules (DTR).Possible values are:CRDDTROther |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ServiceInformationRequestChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ServiceInformationRequestFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ServiceInformationRequestHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ServiceInformationRequestOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ServiceInformationRequestShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ServiceInformationRequestChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- ServiceInformationRequestFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ServiceInformationRequestHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ServiceInformationRequestOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ServiceInformationRequestShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
