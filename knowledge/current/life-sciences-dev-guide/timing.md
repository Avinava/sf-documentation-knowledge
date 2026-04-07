---
title: "Timing"
domain: life-sciences-dev-guide
topic: timing
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:58.452Z
estimatedTokens: 796
keywords: [Timing, FHIR, resource, maps, ActivityTiming​, Salesforce, V4.0, Clinical, Model, Mapping]
---

> The Timing FHIR resource maps to the ActivityTiming​ object in Salesforce.

# Timing

The Timing FHIR resource maps to the ActivityTiming​ object in Salesforce.

## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for [Timing](https://www.hl7.org/fhir/datatypes.html#Timing) map to the fields in Salesforce.

| Timing Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| event | Event.​Activity​Date | Object | 0.M | timing.event is stored in Event.​Activity​Date. This event record then references the ActivityTiming record using its WhatId field. |
| repeat​.bounds​.bounds​Duration | Activity​Timing​.Period​Length | Int | 0.1 | Because Salesforce doesn’t support a native duration data type, repeat​.bounds​.bounds​Duration is flattened to a set of length and unit fields. |
| Activity​Timing​.Period​Length​UnitId | Lookup: UnitOf​Measure | 0.1 |
| repeat​.bounds​.bounds​Range | Activity​Timing​.Period​Length​Lower​Limit | Double | 0.1 | Because Salesforce doesn’t support a native duration data type, repeat​.bounds​.bounds​Range is flattened to a set of lower limit, upper limit, and unit fields. |
| Activity​Timing​.Period​Length​Upper​Limit | Double | 0.1 |
| Activity​Timing​.Period​Length​UnitId | Lookup: UnitOf​Measure | 0.1 |
| repeat​.bounds​.bounds​Period | Activity​Timing​.Period​Start​Date​Time | DateTime | 0.1 | Because Salesforce doesn’t support a native period data type, repeat​.bounds​.bounds​Period is flattened to a set of start and end date fields. |
| Activity​Timing​.Period​End​Date​Time | DateTime | 0.1 |
| repeat​.count | Activity​Timing​.Count​In​Period | Int | 0.1 | N/A |
| repeat​.count​Max | Activity​Timing​.Max​Count​In​Period | Int | 0.1 | N/A |
| repeat​.duration | Activity​Timing​.Activity​Duration | Double | 0.1 | N/A |
| repeat​.duration​Max | Activity​Timing​.Max​Activity​Duration | Double | 0.1 | N/A |
| repeat​.duration​Unit | Activity​Timing​.Activity​Duration​UnitId | Lookup: UnitOf​Measure | 0.1 | N/A |
| repeat​.frequency | Activity​Timing​.Activity​Count​Per​Repetition | Double | 0.1 | N/A |
| repeat​.frequency​Max | Activity​Timing​.Max​Activity​Count​Per​Repetition | Int | 0.1 | N/A |
| repeat​.period | Activity​Timing​.Repetition​Cycle​Length | Double | 0.1 | N/A |
| repeat​.period​Max | Activity​Timing​.Max​Repetition​Cycle​Length | Double | 0.1 | N/A |
| repeat​.period​Unit | Activity​Timing​.Repetition​Cycle​​UnitId | Lookup: UnitOf​Measure | 0.1 | N/A |
| repeat​.dayOf​Week | Activity​Timing​.Weekly​Activity​​TimeId | Lookup: Operating​Hours | 0.M | While FHIR defines repeat​.dayOf​Week as a code value, the Salesforce implementation uses a reference to OperatingHours. A record in OperatingHours can have multiple values for days in a week and time. |
| repeat​.timeOf​Day | Activity​Timing​.Weekly​Activity​​TimeId | Lookup: Operating​Hours | 0.M | N/A |
| repeat​.when | Activity​Timing​.​Activity​​Time | Picklist | 0.1 | While FHIR defines repeat​.when as a zero-to-many code, the Salesforce implementation is a zero-to-one picklist. |
| repeat​.offset | Activity​Timing​.​Activity​​Time​Offset | Int | 0.1 | N/A |
| code | Activity​Timing​.Timing​CodeId | Lookup: CodeSet​Bundle | 0.1 |  |
