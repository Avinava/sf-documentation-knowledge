---
title: "InteropTopicSubcrFilter"
domain: health-cloud-object-reference
topic: interoptopicsubcrfilter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.593Z
estimatedTokens: 1031
keywords: [InteropTopicSubcrFilter, subscriber's, criteria, filtering, interoperability, topic, subscription, event, API, version, 64.0, later, Calls, Associated, Objects]
---

# InteropTopicSubcrFilter

> Represents the subscriber's criteria for filtering the interoperability topic
         subscription event. This object is available in API version 64.0 and
      later.

# InteropTopicSubcrFilter

Represents the subscriber's criteria for filtering the interoperability topic subscription event. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| InteropTopicFilterId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe associated interoperability topic filter.This field is a relationship field.Relationship NameInteropTopicFilterRefers ToInteropTopicFilter |
| InteropTopicSubscriptionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe interoperability topic subscription to which the filter is applied.This field is a relationship field.Relationship NameInteropTopicSubscriptionRelationship TypeMaster-detailRefers ToInteropTopicSubscription (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the interoperability topic subscription filter record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the interoperability topic subscription filter record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the interoperability topic subscription filter record. |
| OperatorType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of operator that applies to the filter.Possible values are:APPROXIMATELY—ApproximatelyENDS_BEFORE—Ends BeforeEQUALS—EqualsGREATER_OR_EQUALS—Greater or EqualsGREATER_THAN—Greater ThanLESS_OR_EQUALS—Less or EqualsLESS_THAN—Less ThanNOT_EQUALS—Not EqualsSTARTS_AFTER—Starts After |
| QueryOperatorType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of query operator that applies to the filter.Possible values are:ABOVE—AboveBELOW—BelowCODE_TEXT—Code TextCONTAINS—ContainsEXACT—ExactIDENTIFIER—IdentifierIN—InITERATE—IterateMISSING—MissingNOT—NotNOT_IN—Not InOF_TYPE—Of TypeTEXT—TextTEXT_ADVANCED—Text AdvancedTYPE—Type |
| Value | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe value of the filter. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InteropTopicSubcrFilterChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[InteropTopicSubcrFilterFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InteropTopicSubcrFilterHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- InteropTopicSubcrFilterChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- InteropTopicSubcrFilterFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- InteropTopicSubcrFilterHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
