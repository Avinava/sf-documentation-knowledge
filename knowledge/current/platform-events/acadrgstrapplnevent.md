---
title: "AcadRgstrApplnEvent"
domain: platform-events
topic: acadrgstrapplnevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.180Z
estimatedTokens: 240
keywords: [AcadRgstrApplnEvent, resources, apply, academic, term, registration, timeline, enrollment, API, version, 65.0, later, Calls]
---

# AcadRgstrApplnEvent

> Represents the resources required to apply an academic term registration
         timeline on an academic term enrollment. This object is available in API version 65.0
      and later.

# AcadRgstrApplnEvent

Represents the resources required to apply an academic term registration timeline on an academic term enrollment. This object is available in API version 65.0 and later.

## Supported Calls

create(), describeSObjects()

## Fields

| Field | Details |
| --- | --- |
| BatchJob | TypestringPropertiesCreateDescriptionThe identifier of the batch job for the Academic Registration Timeline Eligibility Criteria Run Event. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
