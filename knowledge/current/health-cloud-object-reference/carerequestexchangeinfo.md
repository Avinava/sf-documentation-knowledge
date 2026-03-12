---
title: "CareRequestExchangeInfo"
domain: health-cloud-object-reference
topic: carerequestexchangeinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.616Z
estimatedTokens: 994
keywords: [CareRequestExchangeInfo, care, exchange, API, version, 63.0, later, Calls, Associated, Objects]
---

# CareRequestExchangeInfo

> Represents information about a care request exchange. This object is
      available in API version 63.0 and later.

# CareRequestExchangeInfo

Represents information about a care request exchange. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CareRequestId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe care request that the exchange details are captured for.This field is a relationship field.Relationship NameCareRequestRelationship TypeMaster-detailRefers ToCareRequest (the master object) |
| ExchangeMode | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the mode of exchange. For example, X12 is the standard mode of exchange between an intermediary and a payer.Possible values are:direct—Directihe—IHEother—Otherrestful—RESTfulx12—X12 |
| ExchangeTargetType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the target of the care request exchange.Possible values are:IntermediaryPayerProvider |
| ExchangeType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of care request exchange.Possible values are:cancel—Cancelinitial—InitialinitialDocToPayer—Initial Doc To Payerquery—Querysubsequent—Subsequentupdate—Update |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| RequestDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the request was sent or received. |
| ResponseDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the response to the request was sent or received. |
| ResponseStatusCode | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status code of the response. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareRequestExchangeInfoChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[CareRequestExchangeInfoFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareRequestExchangeInfoHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CareRequestExchangeInfoChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- CareRequestExchangeInfoFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CareRequestExchangeInfoHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
