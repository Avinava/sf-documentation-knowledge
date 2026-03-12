---
title: "RecordsetFltrCritMonitor"
domain: object-reference
topic: recordsetfltrcritmonitor
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.074Z
estimatedTokens: 1026
keywords: [RecordsetFltrCritMonitor, Monitors, whether, asset, attribute, threshold, recordset, filter, criteria, RFC, monitor, RFCs, API, version, 57.0]
---

# RecordsetFltrCritMonitor

> Monitors whether the value of an asset attribute is within the
         threshold of a recordset filter criteria (RFC). You can monitor one or more RFCs for
      an Asset. This object is available in API version 57.0 and later.

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

[RecordsetFltrCritMonitorChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[RecordsetFltrCritMonitorHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

#### See Also

-   [AssetAttribute](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_assetattribute.htm "Stores asset attributes to track and analyze asset conditions to improve their uptime. This object is available in API version 57.0 and later.")

-   [AttributeDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attributedefinition.htm "Represents a product, asset, or object attribute, for example, a hardward specification or software detail. This object is available in API version 57.0 and later.")

-   [AttributePicklist](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attributepicklist.htm "Represents a custom picklist for an asset attribute. This object is available in API version 57.0 and later.")

-   [AttributePicklistValue](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attributepicklistvalue.htm "Represents the values of an asset attribute picklist. This object is available in API version 57.0 and later.")

## Related Topics

- RecordsetFltrCritMonitorChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- RecordsetFltrCritMonitorHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- AssetAttribute (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_assetattribute.htm)
- AttributeDefinition (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attributedefinition.htm)
- AttributePicklist (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attributepicklist.htm)
- AttributePicklistValue (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attributepicklistvalue.htm)
