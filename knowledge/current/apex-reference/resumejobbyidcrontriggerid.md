---
title: "resumeJobById(cronTriggerId)"
domain: apex-reference
topic: resumejobbyidcrontriggerid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.928Z
keywords: [resumeJobById, cronTriggerId, Resume, paused, scheduled, Apex, job, specified, its, CronTrigger, ID., Signature, Parameters, Return, Value, Usage]
---

# resumeJobById(cronTriggerId)

> Resume a paused scheduled Apex job specified by its CronTrigger ID.

### resumeJobById(cronTriggerId)

Resume a paused scheduled Apex job specified by its CronTrigger ID.

#### Signature

public static void resumeJobById(String cronTriggerId)

#### Parameters

cronTriggerId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The scheduled job ID.

#### Return Value

Type: void

#### Usage

If you resume a paused scheduled job, the job immediately runs one time. Subsequent executions of the job run according to the established schedule. Any scheduled executions that were missed while the job was paused don’t run.