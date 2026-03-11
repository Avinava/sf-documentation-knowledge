---
title: "abortJob(jobId)"
domain: apex-reference
topic: abortjobjobid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.927Z
keywords: [abortJob, jobId, Stops, specified, job., job, currently, executing, stopped, still, visible, queue, Salesforce, user, interface., any, code, progress, continue, execute]
---

# abortJob(jobId)

> Stops the specified job. If the job is currently executing, the stopped job is still
  visible in the job queue in the Salesforce user interface. The specified job is stopped, but any
  code that is in progress will continue to execute until it completes.

### abortJob(jobId)

Stops the specified job. If the job is currently executing, the stopped job is still visible in the job queue in the Salesforce user interface. The specified job is stopped, but any code that is in progress will continue to execute until it completes.

#### Signature

public static Void abortJob(String jobId)

#### Parameters

jobId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The jobId is the ID associated with an [AsyncApexJob](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_asyncapexjob.htm "HTML (New Window)") ID for batch or future Apex jobs, or a [CronTrigger](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_crontrigger.htm "HTML (New Window)") ID for scheduled Apex jobs. You can't abort a scheduled Apex job using an AsyncApexJob ID.

#### Return Value

Type: Void

#### Usage

The following methods return the job ID that can be passed to abortJob.

-   [System.schedule method](#apex_System_System_schedule "Use schedule with an Apex class that implements the Schedulable interface to schedule the class to run at the time specified by a Cron expression.")—returns the CronTrigger object ID associated with the scheduled job as a string.
-   [SchedulableContext.getTriggerId method](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_scheduler.htm)—returns the CronTrigger object ID associated with the scheduled job as a string.
-   [getJobId method](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_batch_interface.htm)—returns the AsyncApexJob object ID associated with the batch job as a string.
-   [Using Batch Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_batch_interface.htm)[Database.executeBatch method](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_batch_interface.htm)—returns the AsyncApexJob object ID associated with the batch job as a string.