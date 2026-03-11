---
title: "setTerritoryIds(territoryIds)"
domain: apex-reference
topic: setterritoryidsterritoryids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.553Z
keywords: [setTerritoryIds, territoryIds, Sets, IDs, service, territories., Signature, Parameters, Return, Value]
---

# setTerritoryIds(territoryIds)

> Sets the IDs of service territories.

### setTerritoryIds(territoryIds)

Sets the IDs of service territories.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setTerritoryIds(List<String\> territoryIds)

#### Parameters

territoryIds

Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of IDs of service territories, where the work that is being requested is performed. This is a required field.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")