---
title: "ActionableOrchResponseEvent"
domain: automotive-cloud
topic: actionableorchresponseevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.931Z
estimatedTokens: 428
keywords: [ActionableOrchResponseEvent, internal, external, event, actions, taken, orchestration, process, recorded, API, version, 62.0, later, Calls]
---

# ActionableOrchResponseEvent

> Represents information about an internal or external event after actions are
         taken by the orchestration process and the response is recorded. This object is
      available in API version 62.0 and later.

# ActionableOrchResponseEvent

Represents information about an internal or external event after actions are taken by the orchestration process and the response is recorded. This object is available in API version 62.0 and later.

## Supported Calls

describeSObjects()

## Fields

| Field | Details |
| --- | --- |
| ActionableOrchSourceEvent | TypestringPropertiesDescriptionThe actionable source event related to the response event. |
| ErrorInformation | TypetextareaPropertiesNillableDescriptionThe error codes and error messages related to an actionable event that failed to be processed. |
| EventUuid | TypestringPropertiesNillableDescriptionA universal unique identifier (UUID) that identifies a platform event message. This field is available in API version 62.0 and later. |
| ExecutedAction | TypetextareaPropertiesNillableDescriptionThe details about the action taken for an actionable event as executed by the actionable event orchestration framework. |
| ProcessingStatus | TypepicklistPropertiesRestricted picklistDescriptionSpecifies the processing status of the actionable event for which the response is published.Possible values are:FailureSuccess |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| SourceSystemIdentifier | TypestringPropertiesNillableDescriptionThe unique identifier of the event in the source system where the actionable event originated. |
