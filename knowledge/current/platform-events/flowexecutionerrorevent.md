---
title: "FlowExecutionErrorEvent"
domain: platform-events
topic: flowexecutionerrorevent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:28.621Z
estimatedTokens: 1008
namespace: Type
keywords: [FlowExecutionErrorEvent, Notifies, subscribers, errors, screen, flow, executions, API, version, 47.0, later, Calls, Event, Delivery, Allocation]
---

# FlowExecutionErrorEvent

> Notifies subscribers of errors related to screen flow executions.
		This object is available in API version 47.0 and later.

**Namespace:** `Type`

# FlowExecutionErrorEvent

Notifies subscribers of errors related to screen flow executions. This object is available in API version 47.0 and later.

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

## Event Delivery Allocation Enforced

Yes

## Fields

| Field | Details |
| --- | --- |
| ContextObject | DescriptionReserved for future use. |
| ContextRecordId | DescriptionReserved for future use. |
| ElementApiName | TypestringPropertiesNillableDescriptionThe API name of the flow element that was executed when the flow execution error occurred. |
| ElementType | TypestringPropertiesNillableDescriptionThe type of flow element. |
| ErrorId | TypestringPropertiesNillableDescriptionThe ID of the error. |
| ErrorMessage | TypestringPropertiesNillableDescriptionThe message about the error that occurred. |
| EventDate | TypedateTimePropertiesNoneDescriptionRequired. The date and time when the error occurred. This field always contains a value. |
| EventIdentifier | TypestringPropertiesNoneDescriptionRequired. The unique ID of the event, which is shared with the corresponding storage object. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. Use this field to correlate the event with its storage object. This field always contains a value. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| EventType | TypestringPropertiesNoneDescriptionRequired. The type of flow event. Valid value is Error—An event that occurs when a flow execution generates an error. This field always contains a value. |
| ExtendedErrorCode | TypestringPropertiesNillableDescriptionThe code that references more details about the error. |
| FlowApiName | TypestringPropertiesNoneDescriptionRequired. The API name of the flow that the error occurred for. This field always contains a value. |
| FlowExecutionEndDate | DescriptionReserved for future use. |
| FlowExecutionStartDate | TypedateTimePropertiesNillableDescriptionThe date and time when the error-generating flow execution starts. |
| FlowNamespace | TypestringPropertiesNillableDescriptionThe namespace of the error-generating flow. |
| FlowVersionId | TypestringPropertiesNoneDescriptionRequired. The ID of the error-generating flow version. This field always contains a value. |
| InterviewBatchId | DescriptionReserved for future use. |
| InterviewGuid | TypestringPropertiesNoneDescriptionRequired. The globally unique identifier of the error-generating flow interview. This field always contains a value. |
| InterviewRequestId | DescriptionReserved for future use. |
| InterviewStartDate | TypedateTimePropertiesNoneDescriptionRequired. The date and time when the error-generating flow interview starts. This field always contains a value. |
| InterviewStartedById | TypereferencePropertiesNoneDescriptionRequired. The ID of the flow interview when it was started. This field always contains a value. |
| ProcessType | TypestringPropertiesNillableDescriptionThe type of the flow. Valid value is:Flow—A flow that requires user interaction because it contains one or more screens or local actions, choices, or dynamic choices. In the UI and Salesforce Help, it’s a screen flow. Screen flows can be launched from the UI, such as with a flow action, Lightning page, or web tab. |
| RelatedRecordId | DescriptionReserved for future use. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| StageQualifiedApiName | DescriptionReserved for future use. |
