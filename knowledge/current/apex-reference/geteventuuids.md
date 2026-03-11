---
title: "getEventUuids()"
domain: apex-reference
topic: geteventuuids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.789Z
keywords: [getEventUuids, Returns, list, EventUuid, field, values, platform, event, included, EventBus.EventPublishSuccessCallback., Signature, Return, Value]
---

# getEventUuids()

> Returns a list of EventUuid field values of each
        platform event that is included in the EventBus.EventPublishSuccessCallback.

### getEventUuids()

Returns a list of EventUuid field values of each platform event that is included in the EventBus.EventPublishSuccessCallback.

#### Signature

public List<String> getEventUuids()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>