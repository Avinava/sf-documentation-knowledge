---
title: "CronTrigger"
domain: object-reference
topic: crontrigger
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.590Z
estimatedTokens: 720
keywords: [CronTrigger, schedule, scheduled, job, similar, cron, UNIX, systems, API, version, 17.0, later, Calls, Usage]
---

# CronTrigger

> Contains schedule information for a scheduled
    job. CronTrigger is similar to a cron job on UNIX systems. This object is available in API
   version 17.0 and later.

# CronTrigger

Contains schedule information for a scheduled job. CronTrigger is similar to a cron job on UNIX systems. This object is available in API version 17.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| CronExpression | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe cron expression used to initiate the schedule.Syntax:Seconds Minutes Hours Day_of_month Month Day_of_week Optional_yearSee schedule(jobName, cronExpression, schedulableClass) in the Apex Reference Guide. |
| CronJobDetailId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the CronJobDetail record containing more details about this scheduled job.This is a relationship field.Relationship NameCronJobDetailRelationship TypeLookupRefers ToCronJobDetail |
| EndTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the job either finished or will finish. |
| NextFireTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe next date and time the job is scheduled to run. null if the job is not scheduled to run again. |
| OwnerId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionOwner of the job. |
| PreviousFireTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date and time the job ran. null if the job has not run before current local time. |
| StartTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the most recent iteration of the scheduled job started. |
| State | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe current state of the job. The job state is managed by the system. Possible values are:WAITING—The job is waiting for execution.ACQUIRED—The job has been picked up by the system and is about to execute.EXECUTING—The job is executing.COMPLETE—The trigger has fired and is not scheduled to fire again.ERROR—The trigger definition has an error.DELETED—The job has been deleted.PAUSED—A job can have this state during patch and major releases. After the release has finished, the job state is automatically set to WAITING or another state.BLOCKED—Execution of a second instance of the job is attempted while one instance is running. This state lasts until the first job instance is completed.PAUSED_BLOCKED—A job has this state due to a release occurring. When the release has finished and no other instance of the job is running, the job’s status is set to another state. |
| TimesTriggered | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of times this job has been triggered. |
| TimeZoneSidKey | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionReturns the timezone ID. For example, America/Los_Angeles. |

## Usage

Use this object to query scheduled jobs in your organization.
