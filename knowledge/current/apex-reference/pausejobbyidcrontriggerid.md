---
title: "pauseJobById(cronTriggerId)"
domain: apex-reference
topic: pausejobbyidcrontriggerid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.928Z
keywords: [pauseJobById, cronTriggerId, Pause, scheduled, Apex, job, specified, its, CronTrigger, ID., Signature, Parameters, Return, Value]
---

# pauseJobById(cronTriggerId)

> Pause a scheduled Apex job specified by its CronTrigger ID.

### pauseJobById(cronTriggerId)

Pause a scheduled Apex job specified by its CronTrigger ID.

#### Signature

public static void pauseJobById(String cronTriggerId)

#### Parameters

cronTriggerId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The scheduled job ID.

#### Return Value

Type: void