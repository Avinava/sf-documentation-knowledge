---
title: "DataObjectMetadataChgEvent"
domain: sfFieldRef
topic: dataobjectmetadatachgevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.749Z
estimatedTokens: 329
keywords: [DataObjectMetadataChgEvent, Notifies, subscribers, metadata, change, Data, Cloud, objects, Lake, Model, Calculated, Insight, API, version, 53.0]
---

# DataObjectMetadataChgEvent

> Notifies subscribers of a metadata change within Data Cloud for these
			objects: Data Lake, Data Model, and Calculated Insight. This object is available in
		API version 53.0 and later.

# DataObjectMetadataChgEvent

Notifies subscribers of a metadata change within Data Cloud for these objects: Data Lake, Data Model, and Calculated Insight. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see DataObjectMetadataChgEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrentValue | Current metadata | textarea |  | 128000 |  |  |
| EventCreationDate | Event creation time | datetime |  |  |  |  |
| EventPublishDate | Event published time | datetime |  |  |  |  |
| EventType | Type of Data Cloud Event | string |  | 4000 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| PreviousValue | Previous metadata | textarea |  | 128000 |  |  |
| ReplayId | Replay Id | string |  | 1000 |  |  |
| SchemaVersion | Schema version | string |  | 4000 |  |  |
| SourceTableDeveloperName | Source entity developer name | string |  | 4000 |  |  |
| Trigger | Trigger (Insert/Update/Delete) that caused this event | string |  | 4000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
