---
title: "FlowRecordElement"
domain: object-reference
topic: flowrecordelement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.437Z
estimatedTokens: 441
keywords: [FlowRecordElement, element, flow, version, API, 58.0, later, Calls]
---

# FlowRecordElement

> Represents a single element within a flow version. This object is
         available in API version 58.0 and later.

# FlowRecordElement

Represents a single element within a flow version. This object is available in API version 58.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| ElementName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the flow element. |
| FlowRecordVersionId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the flow version the flow element is part of.This field is a relationship field.Relationship NameFlowRecordVersionRelationship TypeMaster-detailRefers ToFlowRecordVersion (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the flow element was last used. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the flow element was last viewed. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe label of the flow element. |

[FlowRecordElementChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

## Related Topics

- FlowRecordElementChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
