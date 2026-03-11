---
title: "resumeJobByName(jobName)"
domain: apex-reference
topic: resumejobbynamejobname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.928Z
keywords: [resumeJobByName, jobName, Resumes, paused, scheduled, Apex, job, specified, its, name., Signature, Parameters, Return, Value, Usage]
---

# resumeJobByName(jobName)

> Resumes a paused scheduled Apex job specified by its name.

### resumeJobByName(jobName)

Resumes a paused scheduled Apex job specified by its name.

#### Signature

public static void resumeJobByName(String jobName)

#### Parameters

jobName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

#### Usage

If you resume a paused scheduled job, the job immediately runs one time. Subsequent executions of the job run according to the established schedule. Any scheduled executions that were missed while the job was paused don’t run.