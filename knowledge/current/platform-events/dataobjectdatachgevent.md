---
title: "DataObjectDataChgEvent"
domain: platform-events
topic: dataobjectdatachgevent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:28.523Z
estimatedTokens: 789
keywords: [DataObjectDataChgEvent, Notifies, subscribers, action, Data, Cloud, API, version, 53.0, later, Calls, Subscription, Channel, Special, Access]
---

# DataObjectDataChgEvent

> Notifies subscribers of an action within Data Cloud. This object
		is available in API version 53.0 and later.

# DataObjectDataChgEvent

Notifies subscribers of an action within Data Cloud. This object is available in API version 53.0 and later.

## Supported Calls

describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Pub/Sub API |  |
| Streaming API (CometD) |  |

## Subscription Channel

/event/DataObjectDataChgEvent

## Special Access Rules

DataObjectDataChgEvent is available only if Data Cloud is enabled.

## Event Delivery Allocation Enforced

Yes

## Fields

| Field | Details |
| --- | --- |
| ActionDeveloperName | TypestringPropertiesNillableDescriptionThe developer name associated with this action. |
| EventCreationDateTime | TypedateTimePropertiesNillableDescriptionThe date and time when the event occurred. |
| EventPrompt | TypepicklistPropertiesNillable, Restricted PicklistDescriptionThe data manipulation language action that triggered this event.Possible values are:DELETEINSERTUPDATE |
| EventPublishDateTime | TypedateTimePropertiesNillableDescriptionThe date and time when the event was published. |
| EventSchemaVersion | TypestringPropertiesNillableDescriptionThe version of the event schema. |
| EventType | TypestringPropertiesNillableDescriptionThe type of event that occurred. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| Offset | TypestringPropertiesNillableDescriptionThe number of rows to skip before starting to return. |
| PayloadCurrentValue | TypetextareaPropertiesNillableDescriptionCurrent data values with enriched fields. This field has a 125,000 character limit. |
| PayloadPrevValue | TypetextareaPropertiesNillableDescriptionPrevious data values with enriched fields. This field is optional depending on the source object and has a 125,000 character limit. |
| PayloadSchema | TypetextareaPropertiesNillableDescriptionThe schema for the event payload. |
| ProfileIdValue | TypestringPropertiesNillableDescriptionUnified identifier for the event profile that is created by Data Cloud as part of identity resolution. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| SourceObjectDeveloperName | TypestringPropertiesNillableDescriptionThe developer name of the object that triggered the data change event. |
| TraceIdValue | TypestringPropertiesNillableDescriptionUnique identifier of the request. The ID can be used to track an event after it appears in Data Cloud. It can be provided in a support ticket to help with the investigation of an issue. |
| TriggerEntity | TypetextareaPropertiesNillableDescriptionTriggering entity that initiated the data graph flow. This record identifies the data model object on which primary conditions were added as part of the automation that triggered the flow. |
