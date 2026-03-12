---
title: "ActionableOrchSourceEvent"
domain: automotive-cloud
topic: actionableorchsourceevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.937Z
estimatedTokens: 398
keywords: [ActionableOrchSourceEvent, event, actions, taken, orchestration, process, API, version, 62.0, later, Calls]
---

# ActionableOrchSourceEvent

> Represents information about an event on which actions are taken by the
         orchestration process. This object is available in API version 62.0 and
      later.

# ActionableOrchSourceEvent

Represents information about an event on which actions are taken by the orchestration process. This object is available in API version 62.0 and later.

## Supported Calls

create(), describeSObjects()

## Fields

| Field | Details |
| --- | --- |
| AdditionalCriteria | TypetextareaPropertiesCreate, NillableDescriptionThe additional criteria that customers want to share about an actionable event. |
| Category | TypestringPropertiesCreate, NillableDescriptionThe category of the actionable event. |
| EventData | TypetextareaPropertiesCreate, NillableDescriptionThe data about an actionable event, such as the faults, signals, or other input details. |
| EventUuid | TypestringPropertiesNillableDescriptionA universal unique identifier (UUID) that identifies a platform event message. This field is available in API version 62.0 and later. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| SourceSystemIdentifier | TypestringPropertiesCreate, NillableDescriptionThe unique identifier of an event in the source system where the event originates. |
| Subtype | TypestringPropertiesCreate, NillableDescriptionThe subtype of the actionable event. |
| Type | TypestringPropertiesCreateDescriptionThe type of the actionable event. |
