---
title: "ServiceInfoResponseCoverage"
domain: health-cloud-object-reference
topic: serviceinforesponsecoverage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:38.054Z
estimatedTokens: 1439
keywords: [ServiceInfoResponseCoverage, coverage, service, additional, documentation, provided, API, version, 63.0, later, Calls, Associated, Objects]
---

# ServiceInfoResponseCoverage

> Represents coverage details about a service information response. For
         example, if additional information or documentation is required for the coverage to be
         provided. This object is available in API version 63.0 and later.

# ServiceInfoResponseCoverage

Represents coverage details about a service information response. For example, if additional information or documentation is required for the coverage to be provided. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssertionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the coverge assertion was made. |
| CoverageAssertionIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the coverage assertion. |
| CoverageIndicator | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies if the requested service is covered under the insurance plan.Possible values are:conditionalcoverednot-covered |
| CoveragePlanTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of plan the coverage assertion falls under.This field is a polymorphic relationship field.Relationship NameCoveragePlanTypeRefers ToCodeSet, CodeSetBundle, PurchaserPlan |
| DocRequiredReason | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies why the additional documentation is required for coverage to be provided. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last viewed. |
| MemberPlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe member plan associated with the service information response coverage.This field is a relationship field.Relationship NameMemberPlanRefers ToMemberPlan |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PreapprovalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the preapproval, if satisfied. |
| PreapprovalRequirementInd | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies if preapproval is required for coverage to be provided. |
| ReferenceUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe URL of the reference used for determining the coverage information. |
| RequiredAddlInfoType | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the type of additional information required for coverage to be provided. For example, the performer and location of the service. |
| RequiredDocumentationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of additional documentation required for coverage to be provided.Possible values are:adminclinicalconditional |
| ServiceInformationResponseId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe associated service information response.This field is a polymorphic relationship field.Relationship NameServiceInformationResponseRefers ToServiceInformationResponse |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ServiceInfoResponseCoverageChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ServiceInfoResponseCoverageFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ServiceInfoResponseCoverageHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ServiceInfoResponseCoverageShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ServiceInfoResponseCoverageChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- ServiceInfoResponseCoverageFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ServiceInfoResponseCoverageHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ServiceInfoResponseCoverageShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
