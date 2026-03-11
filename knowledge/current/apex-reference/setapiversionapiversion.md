---
title: "setApiVersion(apiVersion)"
domain: apex-reference
topic: setapiversionapiversion
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.553Z
keywords: [setApiVersion, apiVersion, Sets, API, version, business, logic, getAppointmentSlots, method., Signature, Parameters, Usage, Note, Return, Value]
---

# setApiVersion(apiVersion)

> Sets the API version of the business logic for the getAppointmentSlots method.

### setApiVersion(apiVersion)

Sets the API version of the business logic for the getAppointmentSlots method.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setApiVersion(Double apiVersion)

#### Parameters

apiVersion

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Usage

The specified parameter must use the correct API version. For example, if API version is set to 45.0 and primaryResourceId is set (which is available in API version 48.0 and later), then this field is ignored. If no API version or incorrect API version is passed in the request body, by default the latest version is used.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

The API is available since version 45.0.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")