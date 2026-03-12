---
title: "DataObjectDataChgEvent"
domain: sfFieldRef
topic: dataobjectdatachgevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.738Z
estimatedTokens: 457
keywords: [DataObjectDataChgEvent, Notifies, subscribers, action, Data, Cloud, API, version, 53.0, later]
---

# DataObjectDataChgEvent

> Notifies subscribers of an action within Data Cloud. This object
		is available in API version 53.0 and later.

# DataObjectDataChgEvent

Notifies subscribers of an action within Data Cloud. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see DataObjectDataChgEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionDeveloperName | Action identifier | string |  | 4000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventCreationDateTime | Event creation time | datetime |  |  |  |  |
| EventPrompt | Trigger (Insert/Update/Delete/Action) that caused this event | picklist |  | 255 |  |  |
| EventPublishDateTime | Event published time | datetime |  |  |  |  |
| EventSchemaVersion | Schema version | string |  | 4000 |  |  |
| EventType | Type of Data Cloud Event | string |  | 4000 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| Offset | Event offset for the events triggered per action configured per tenant | string |  | 4000 |  |  |
| PayloadCurrentValue | Current data | textarea |  | 128000 |  |  |
| PayloadMetadata | Metadata JSON with additional information about the payload | textarea |  | 128000 |  |  |
| PayloadPrevValue | Previous data | textarea |  | 128000 |  |  |
| PayloadSchema | Schema for event payload | textarea |  | 128000 |  |  |
| ProfileIdValue | ProfileId in the event | string |  | 4000 |  |  |
| ReplayId | Replay Id | string |  | 1000 |  |  |
| SourceObjectDeveloperName | Source entity developer name | string |  | 4000 |  |  |
| TraceIdValue | TraceId of the request | string |  | 4000 |  |  |
| TriggerEntity | Triggering entity | textarea |  | 128000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
