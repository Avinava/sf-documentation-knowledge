---
title: "SvcInfoRespCoverageDetail"
domain: health-cloud-object-reference
topic: svcinforespcoveragedetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:38.146Z
estimatedTokens: 991
keywords: [SvcInfoRespCoverageDetail, additional, coverage, service, API, version, 63.0, later, Calls, Associated, Objects]
---

# SvcInfoRespCoverageDetail

> Represents additional coverage details about a service information response.
       This object is available in API version 63.0 and later.

# SvcInfoRespCoverageDetail

Represents additional coverage details about a service information response. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdditionalInformation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe additional information for the detail added to the service information response coverage. |
| DetailCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code representing the detail added to the service information response coverage.This field is a polymorphic relationship field.Relationship NameDetailCodeRefers ToCodeSet, CodeSetBundle |
| DetailType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of detail added to the service information response coverage.Possible values are:ASSERTION_DETAIL—Assertion DetailBILLING_CODE—Billing Code |
| DetailValue | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe value of the detail type when the detail type is Assertion Identifier. |
| DetailValueDataType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe data type of the detail value.Possible values are:DT_BOOLEAN—BooleanDT_DATE—DateDT_DOUBLE—DoubleDT_STRING—StringDT_URL—URL |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| ServiceInfoResponseCoverageId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe service information response coverage that the additional details are captured for.This field is a relationship field.Relationship NameServiceInfoResponseCoverageRelationship TypeMaster-detailRefers ToServiceInfoResponseCoverage (the master object) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SvcInfoRespCoverageDetailChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[SvcInfoRespCoverageDetailFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[SvcInfoRespCoverageDetailHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- SvcInfoRespCoverageDetailChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- SvcInfoRespCoverageDetailFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- SvcInfoRespCoverageDetailHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
