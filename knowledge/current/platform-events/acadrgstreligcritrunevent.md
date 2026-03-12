---
title: "AcadRgstrEligCritRunEvent"
domain: platform-events
topic: acadrgstreligcritrunevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.184Z
estimatedTokens: 351
keywords: [AcadRgstrEligCritRunEvent, resources, run, eligibility, criteria, expression, calculation, academic, term, enrollment, registration, timeline, API, version, 65.0]
---

# AcadRgstrEligCritRunEvent

> Represents the resources required to run an eligibility criteria (expression
         set) calculation on an academic term enrollment for an academic term registration
         timeline. This object is available in API version 65.0 and later.

# AcadRgstrEligCritRunEvent

Represents the resources required to run an eligibility criteria (expression set) calculation on an academic term enrollment for an academic term registration timeline. This object is available in API version 65.0 and later.

## Supported Calls

create(), describeSObjects()

## Fields

| Field | Details |
| --- | --- |
| AcademicTerm | TypestringPropertiesCreateDescriptionThe identifier of the academic term on which the eligibility criteria calculation is run. |
| AcademicTermRegstrnTimeline | TypestringPropertiesCreateDescriptionThe identifier of the Academic Term Registration Timeline for which the eligibility criteria calculation is run. |
| EligibilityCriteriaApiName | TypestringPropertiesCreateDescriptionThe developer name of the eligibility criteria (expression set) used to calculate the academic term registration timeline for students. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
