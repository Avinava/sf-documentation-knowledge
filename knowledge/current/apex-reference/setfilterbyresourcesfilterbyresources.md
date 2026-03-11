---
title: "setFilterByResources(filterByResources)"
domain: apex-reference
topic: setfilterbyresourcesfilterbyresources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.533Z
keywords: [setFilterByResources, filterByResources, Enables, filtering, resources, comma-separated, list, service, resource, IDs., Signature, Parameters, Return, Value]
---

# setFilterByResources(filterByResources)

> Enables filtering resources using a comma-separated list of service
      resource IDs.

### setFilterByResources(filterByResources)

Enables filtering resources using a comma-separated list of service resource IDs.

#### Signature

public lxscheduler.GetAppointmentCandidatesInputBuilder setFilterByResources(List<String\> filterByResources)

#### Parameters

filterByResources

Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Gets only eligible resources that are both in the list and in the selected service territory sorted by the order in which the resource IDs are passed. This field is available in API version 51.0 and later.

#### Return Value

Type: [LxScheduler.GetAppointmentCandidatesInputBuilder](#apex_class_lxscheduler_GetAppointmentCandidatesInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentCandidatesInput class.")