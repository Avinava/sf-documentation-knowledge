---
title: "getJob"
domain: field-service
topic: getjob
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.072Z
keywords: [getJob, Passes, scheduled, job, thesetTerritory, method, which, modifies, territories., Signature, Parameters, Return, Value, Usage]
---

# getJob

> Passes a scheduled job to thesetTerritory method,
    which modifies the territories.

### getJob

Passes a scheduled job to thesetTerritory method, which modifies the territories.

#### Signature

global static ScheduleJobsApi getJob(String jobName)

#### Parameters

jobName

Type: [String](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_string.htm)

Required. The name of the job to update for service territory. The job name is case-sensitive.

#### Return Value

Type: ScheduleJobsApi(validateJobId(jobId))

#### Usage

This method passes a job to [setTerritory](#apex_FSL_ScheduleJobsApi_setTerritory "Sets territories for a job returned by getJob and performs various validation checks."), which updates the Territory tab. See [setTerritory](#apex_FSL_ScheduleJobsApi_setTerritory "Sets territories for a job returned by getJob and performs various validation checks.") for sample code.