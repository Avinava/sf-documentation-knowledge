---
title: "AcademicTermGpaCalcEvent"
domain: platform-events
topic: academictermgpacalcevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.177Z
estimatedTokens: 278
keywords: [AcademicTermGpaCalcEvent, resources, execution, academic, term, GPA, calculation, policy, rule, API, version, 63.0, later, Calls]
---

# AcademicTermGpaCalcEvent

> Represents the resources required for the execution of the academic term GPA
         calculation policy rule. This object is available in API version 63.0 and later.

# AcademicTermGpaCalcEvent

Represents the resources required for the execution of the academic term GPA calculation policy rule. This object is available in API version 63.0 and later.

## Supported Calls

create(), describeSObjects()

## Fields

| Field | Details |
| --- | --- |
| AcademicTerm | TypestringPropertiesCreateDescriptionRepresents the resources required for the execution of the academic term GPA calculation policy rule. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| PolicyRuleApiName | TypestringPropertiesCreateDescriptionThe developer name of the policy rule used to calculate the academic term grade point average. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
