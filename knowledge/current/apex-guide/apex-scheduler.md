---
title: "Apex Scheduler"
domain: apex-guide
topic: apex-scheduler
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:33.969Z
estimatedTokens: 4298
keywords: [Apex, Scheduler, delay, execution, run, classes, specified, time., ideal, daily, weekly, maintenance, tasks, Batch, Apex., Important, Implementing, Schedulable, Tip, Tracking]
---

# Apex Scheduler

> Use the Apex Scheduler to delay execution so that you can run Apex classes at a
        specified time. This is ideal for daily or weekly maintenance tasks using Batch
        Apex.

# Apex Scheduler

Use the Apex Scheduler to delay execution so that you can run Apex classes at a specified time. This is ideal for daily or weekly maintenance tasks using Batch Apex.

To invoke Apex classes to run at specific times, first implement the Schedulable interface for the class, then specify the schedule using either the Schedule Apex page in the Salesforce user interface, or the System.schedule method.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

Salesforce schedules the class for execution at the specified time. Actual execution can be delayed based on service availability.

You can only have 100 scheduled Apex jobs at one time. You can evaluate your current count by viewing the Scheduled Jobs page in Salesforce and creating a custom view with a type filter equal to “Scheduled Apex”. You can also programmatically query the CronTrigger and CronJobDetail objects to get the count of Apex scheduled jobs.

Use extreme care if you’re planning to schedule a class from a trigger. You must be able to guarantee that the trigger won’t add more scheduled classes than the limit. In particular, consider API bulk updates, import wizards, mass record changes through the user interface, and all cases where more than one record can be updated at a time.

If there are one or more active scheduled jobs for an Apex class, you can’t update the class or any classes referenced by this class through the Salesforce user interface. However, you can enable deployments to update the class with active scheduled jobs by using the Metadata API (for example, when using the Salesforce extensions for Visual Studio Code). See “Deployment Connections for Change Sets” in Salesforce Help.

## Implementing the Schedulable Interface

To schedule an Apex class to run at regular intervals, first write an Apex class that implements the Salesforce-provided interface Schedulable.

The scheduler runs as system—all classes are executed, whether the user has permission to execute the class or not.

To monitor or stop the execution of a scheduled Apex job using the Salesforce user interface, from Setup, enter Scheduled Jobs in the Quick Find box, then select **Scheduled Jobs**.

The Schedulable interface contains one execute method that must be implemented.

```

```

The implemented method must be declared as global or public.

Use this method to instantiate the class you want to schedule.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

Though it’s possible to do additional processing in the execute method, we recommend that all processing take place in a separate class.

This example implements the Schedulable interface for a class called MergeNumbers:

```

```

To schedule the class, execute this example in the Developer Console.

```

```

You can also use the Schedulable interface with batch Apex classes. The following example illustrates how to implement the Schedulable interface for a batch Apex class called Batchable:

```

```

An easier way to schedule a batch job is to call the [System.scheduleBatch](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_batch_interface.htm#apex_batch_scheduleBatch_section "HTML (New Window)") method without having to implement the Schedulable interface.

Use the SchedulableContext object to track the scheduled job when it's scheduled. The SchedulableContext getTriggerID method returns the ID of the [CronTrigger](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_crontrigger.htm "HTML (New Window)") object associated with this scheduled job as a string. You can query CronTrigger to track the progress of the scheduled job.

To stop execution of a job that was scheduled, use the System.abortJob method with the ID returned by the getTriggerID method.

## Tracking the Progress of a Scheduled Job Using Queries

After the Apex job has been scheduled, you can obtain more information about it by running a SOQL query on CronTrigger. You can retrieve the number of times the job has run, and the date and time when the job is scheduled to run again, as shown in this example.

```

```

The previous example assumes you have a jobID variable holding the ID of the job. The System.schedule method returns the job ID. If you’re performing this query inside the execute method of your schedulable class, you can obtain the ID of the current job by calling getTriggerId on the SchedulableContext argument variable. Assuming this variable name is sc, the modified example becomes:

```

```

You can also get the job’s name and the job’s type from the CronJobDetail record associated with the CronTrigger record. To do so, use the CronJobDetail relationship when performing a query on CronTrigger. This example retrieves the most recent CronTrigger record with the job name and type from CronJobDetail.

```

```

Alternatively, you can query CronJobDetail directly to get the job’s name and type. This next example gets the job’s name and type for the CronTrigger record queried in the previous example. The corresponding CronJobDetail record ID is obtained by the CronJobDetail.Id expression on the CronTrigger record.

```

```

To obtain the total count of all Apex scheduled jobs, excluding all other scheduled job types, perform the this query. Note the value '7' is specified for the job type, which corresponds to the scheduled Apex job type.

```

```

## Testing the Apex Scheduler

Here’s an example of how to test using the Apex scheduler.

The System.schedule method starts an asynchronous process. When you test scheduled Apex, you must ensure that the scheduled job is finished before testing against the results. Use the Test methods startTest and stopTest around the System.schedule method to ensure it finishes before continuing your test. All asynchronous calls made after the startTest method are collected by the system. When stopTest is executed, all asynchronous processes are run synchronously. If you don’t include the System.schedule method within the startTest and stopTest methods, the scheduled job executes at the end of your test method for Apex saved using Salesforce API version 25.0 and later, but not in earlier versions.

This example defines a class to be tested.

```

```

This code tests the class:

```

```

## Using the System.schedule Method

After you implement a class with the Schedulable interface, use the System.schedule method to execute it. The scheduler runs as system—all classes are executed, whether the user has permission to execute the class or not.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Use extreme care if you’re planning to schedule a class from a trigger. You must be able to guarantee that the trigger won’t add more scheduled classes than the limit. In particular, consider API bulk updates, import wizards, mass record changes through the user interface, and all cases where more than one record can be updated at a time.

The System.schedule method takes three arguments: a name for the job, a cron expression used to represent the time and date the job is scheduled to run, and the name of the class.

The name for the job must be unique among the jobs scheduled for execution. If you attempt to schedule another job with the same name, you see the error System.AsyncException: The Apex job named "jobName" is already scheduled for execution.

The cron expression has this syntax:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Salesforce schedules the class for execution at the specified time. Actual execution can be delayed based on service availability.

The System.schedule method uses the user's time zone as the basis of all schedules.

These are the values for the expression:

| Name | Values | Special Characters |
| --- | --- | --- |
| Seconds | 0–59 | None |
| Minutes | 0–59 | None |
| Hours | 0–23 | , - * / |
| Day_of_month | 1–31 | , - * ? / L W |
| Month | 1–12 or the following:JANFEBMARAPRMAYJUNJULAUGSEPOCTNOVDEC | , - * / |
| Day_of_week | 1–7 or the following:SUNMONTUEWEDTHUFRISAT | , - * ? / L # |
| optional_year | null or 1970–2099 | , - * / |

The special characters are defined as follows:

| Special Character | Description |
| --- | --- |
| , | Delimits values. For example, use JAN, MAR, APR to specify more than one month. |
| - | Specifies a range. For example, use JAN-MAR to specify more than one month. |
| * | Specifies all values. For example, if Month is specified as *, the job is scheduled for every month. |
| ? | Specifies no specific value. This option is only available for Day_of_month and Day_of_week. It’s typically used when specifying a value for one and not the other. |
| / | Specifies increments. The number before the slash specifies when the intervals will begin, and the number after the slash is the interval amount. For example, if you specify 1/5 for Day_of_month, the Apex class runs every fifth day of the month, starting on the first of the month. |
| L | Specifies the end of a range (last). This option is only available for Day_of_month and Day_of_week. When used with Day of month, L always means the last day of the month, such as January 31, February 29 (for leap years), and so on. When used with Day_of_week by itself, it always means 7 or SAT. When used with a Day_of_week value, it means the last of that type of day in the month. For example, if you specify 2L, you’re specifying the last Monday of the month. Don’t use a range of values with L as the results can be unexpected. |
| W | Specifies the nearest weekday (Monday-Friday) of the given day. This option is only available for Day_of_month. For example, if you specify 20W, and the 20th is a Saturday, the class runs on the 19th. If you specify 1W, and the first is a Saturday, the class doesn’t run in the previous month, but on the third, which is the following Monday.TipUse the L and W together to specify the last weekday of the month. |
| # | Specifies the nth day of the month, in the format weekday#day_of_month. This option is only available for Day_of_week. The number before the # specifies weekday (SUN-SAT). The number after the # specifies the day of the month. For example, specifying 2#1 means the class runs on the first Monday of every month. |

The following are some examples of how to use the expression.

| Expression | Description |
| --- | --- |
| 0 0 13 * * ? | The class runs every day at 1 PM. |
| 0 5 * * * ? | The class runs every hour at 5 minutes past the hour.NoteApex doesn’t allow for a job to be scheduled more than once an hour. |
| 0 0 22 ? * 6L | The class runs on the last Friday of every month at 10 PM. |
| 0 0 10 ? * MON-FRI | The class runs Monday through Friday at 10 AM. |
| 0 0 20 * * ? 2010 | The class runs every day at 8 PM during the year 2010. |

In the following example, the class Proschedule implements the Schedulable interface. The class is scheduled to run at 8 AM on the 13 February.

```

```

## Using the System.scheduleBatch Method for Batch Jobs

You can call the System.scheduleBatch method to schedule a batch job to run one time at a specified time in the future. This method is available only for batch classes and doesn’t require the implementation of the Schedulable interface. It’s therefore easy to schedule a batch job for one execution. For more details on how to use the System.scheduleBatch method, see [Using the System.scheduleBatch Method](atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm#apex_batch_scheduleBatch_section).

## Apex Scheduler Limits

-   You can only have 100 scheduled Apex jobs at one time. You can evaluate your current count by viewing the Scheduled Jobs page in Salesforce and creating a custom view with a type filter equal to “Scheduled Apex”. You can also programmatically query the CronTrigger and CronJobDetail objects to get the count of Apex scheduled jobs.

-   The maximum number of scheduled Apex executions per a 24-hour period is 250,000 or the number of user licenses in your organization multiplied by 200, whichever is greater. This limit is for your entire org and is shared with all asynchronous Apex: Batch Apex, Queueable Apex, scheduled Apex, and future methods. To check how many asynchronous Apex executions are available, make a request to REST API limits resource. See [List Organization Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_limits.htm "HTML (New Window)") in the REST API Developer Guide. If the number of asynchronous Apex executions needed by a job exceeds the available number that’s calculated using the 24-hour rolling limit, an exception is thrown. For example, if your async job requires 10,000 method executions and the available 24-hour rolling limit is 9,500, you get AsyncApexExecutions Limit exceeded exception. The license types that count toward this limit include full Salesforce and Salesforce Platform user licenses, App Subscription user licenses, Chatter Only users, Identity users, and Company Communities users.

## Apex Scheduler Notes and Best Practices

-   Salesforce schedules the class for execution at the specified time. Actual execution can be delayed based on service availability.
-   Use extreme care if you’re planning to schedule a class from a trigger. You must be able to guarantee that the trigger won’t add more scheduled classes than the limit. In particular, consider API bulk updates, import wizards, mass record changes through the user interface, and all cases where more than one record can be updated at a time.
-   Though it's possible to do additional processing in the execute method, we recommend that all processing must take place in a separate class.
-   Synchronous Web service callouts aren’t supported from scheduled Apex. To make asynchronous callouts, use [Queueable Apex](atlas.en-us.apexcode.meta/apexcode/apex_queueing_jobs.htm "Take control of your asynchronous Apex processes by using the Queueable interface. Salesforce recommends that you use Queueable Apex instead of Apex future methods. Queueables have the same use cases as future methods but offer extra benefits, including job IDs, support for non-primitive types, and job chaining."), implementing the Database.AllowsCallouts marker interface. If your scheduled Apex executes a batch job using the Database.AllowsCallouts marker interface, callouts are supported from the batch class. See [Using Batch Apex](atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm "To use batch Apex, write an Apex class that implements the Salesforce-provided interface Database.Batchable and then invoke the class programmatically. To monitor or stop the execution of the batch Apex job, from Setup, enter Apex Jobs in the Quick Find box and then select Apex Jobs.").
-   Apex jobs scheduled to run during a Salesforce service maintenance downtime will be scheduled to run after the service comes back up, when system resources become available. If a scheduled Apex job was running when downtime occurred, the job is rolled back and scheduled again after the service comes back up. After major service upgrades, there can be longer delays than usual for starting scheduled Apex jobs because of system usage spikes.
-   When you refresh a sandbox, scheduled jobs from the source org aren't copied. You must reschedule any jobs that you need in the refreshed sandbox.
-   Scheduled job objects, along with their member variables and properties, persist from initialization to subsequent scheduled runs. The object state at the time of invocation of System.schedule() persists in subsequent job executions.

    With Batch Apex, it’s possible to force a new serialized state for new jobs by usingDatabase.Stateful. With Scheduled Apex, use the transient keyword so that member variables and properties aren’t persisted. See [Using the transient Keyword](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_transient.htm)..

-   If you attempt to deploy changes to a class or its dependent code when the class is scheduled for execution, you see the error This schedulable class has jobs pending or in progress - CronTrigger IDs (ids). You can also see the message You can bypass this error by allowing deployments with Apex jobs in the Deployment Settings page in Setup. If you enable this setting, be aware that the job can fail. Instead, we recommend that you first delete the scheduled job, and then deploy your changes. After deployment, create a new scheduled job with the updated class.
-   If you resume a paused scheduled job, the job immediately runs one time. Subsequent executions of the job run according to the established schedule. Any scheduled executions that were missed while the job was paused don’t run.

#### See Also

-   [*Apex Reference Guide*: Schedulable Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_system_schedulable.htm "Apex Reference Guide: Schedulable Interface - HTML (New Window)")

## Code Examples

```apex
public void execute(SchedulableContext sc){}
```

```apex
public with sharing class ScheduledMerge implements Schedulable {
   public void execute(SchedulableContext SC) {
      MergeNumbers M = new MergeNumbers(); 
   }
}
```

```apex
ScheduledMerge m = new ScheduledMerge();
String sch = '20 30 8 10 2 ?';
String jobID = System.schedule('Merge Job', sch, m);
```

```apex
public with sharing class ScheduledBatchable implements Schedulable {
   global void execute(SchedulableContext sc) {
      Batchable b = new Batchable(); 
      Database.executeBatch(b);
   }
}
```

```
CronTrigger ct = 
    [SELECT TimesTriggered, NextFireTime
    FROM CronTrigger WHERE Id = :jobID WITH USER_MODE];
```

## Related Topics

- Using the System.scheduleBatch Method (atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm)
- Queueable Apex (atlas.en-us.apexcode.meta/apexcode/apex_queueing_jobs.htm)
- Using Batch Apex (atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm)
- Using the transient Keyword (atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_transient.htm)
