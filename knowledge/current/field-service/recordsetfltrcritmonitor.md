---
title: "RecordsetFltrCritMonitor"
domain: field-service
topic: recordsetfltrcritmonitor
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:12.819Z
keywords: [RecordsetFltrCritMonitor, Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# RecordsetFltrCritMonitor

# RecordsetFltrCritMonitor

Monitors whether the value of an asset attribute is within the threshold of a recordset filter criteria (RFC). You can monitor one or more RFCs for an Asset. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the asset to link the RFC to.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the RFC associated with the recordset filter criteria monitor. |
| IsWithinThreshold | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the value of the asset attribute is within the threshold of the RFC.The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the recordset filter criteria monitor. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the value was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the value was last viewed. |
| RecordsetFilterCriteriaId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the recordset filter criteria.This field is a relationship field.Relationship NameRecordsetFilterCriteriaRelationship TypeLookupRefers ToRecordsetFilterCriteria |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

RecordsetFltrCritMonitorChangeEvent

Change events are available for the object.

RecordsetFltrCritMonitorHistory

History is available for tracked fields of the object.