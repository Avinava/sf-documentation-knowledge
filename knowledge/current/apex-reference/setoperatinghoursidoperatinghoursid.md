---
title: "setOperatingHoursId(operatingHoursId)"
domain: apex-reference
topic: setoperatinghoursidoperatinghoursid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.605Z
keywords: [setOperatingHoursId, operatingHoursId, Sets, overlap, operating, hours., Signature, Parameters, Return, Value]
---

# setOperatingHoursId(operatingHoursId)

> Sets the overlap of operating hours.

### setOperatingHoursId(operatingHoursId)

Sets the overlap of operating hours.

#### Signature

public lxscheduler.WorkTypeBuilder setOperatingHoursId(String operatingHoursId)

#### Parameters

operatingHoursId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The overlap of all operating hours from the account, work type, service territory, and service territory member are considered while determining time slots.

#### Return Value

Type: [lxscheduler.WorkTypeBuilder](#apex_class_lxscheduler_WorkTypeBuilder "Contains methods to build an instance of the lxscheduler.WorkType class.")