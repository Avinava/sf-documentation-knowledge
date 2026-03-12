---
title: "System Class"
domain: apex-reference
topic: system-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:31.397Z
estimatedTokens: 15856
namespace: System
keywords: [System, Adds, job, Apex, queue, corresponds, queueable, abortJob, jobId, Usage, assert, condition, msg, assertEquals, expected]
---

# System Class

> Adds a job to the Apex job queue that corresponds to the specified
   queueable class and returns the job ID.

**Namespace:** `System`

# System Class

Contains methods for system operations, such as writing debug messages and scheduling jobs.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## System Methods

The following are methods for System. All methods are static.

-   **[abortJob(jobId)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_abortJob)**
    Stops the specified job. If the job is currently executing, the stopped job is still visible in the job queue in the Salesforce user interface. The specified job is stopped, but any code that is in progress will continue to execute until it completes.
-   **[assert(condition, msg)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_assert)**
    Asserts that the specified condition is true. If it isn’t , a fatal error is returned that causes code execution to halt.
-   **[assertEquals(expected, actual, msg)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_assertEquals)**
    Asserts that the first two arguments are the same. If they aren’t, a fatal error is returned that causes code execution to halt.
-   **[assertNotEquals(expected, actual, msg)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_assertNotEquals)**
    Asserts that the first two arguments are different. If they’re the same, a fatal error is returned that causes code execution to halt.
-   **[currentPageReference()](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_currentPageReference)**
    Returns a reference to the current page. This is used with Visualforce pages.
-   **[currentTimeMillis()](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_currentTimeMillis)**
    Returns the current time in milliseconds, which is expressed as the difference between the current time and midnight, January 1, 1970 UTC.
-   **[debug(msg)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_debug)**
    Writes the specified message, in string format, to the execution debug log. The DEBUG log level is used.
-   **[debug(logLevel, msg)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_debug_2)**
    Writes the specified message, in string format, to the execution debug log with the specified log level.
-   **[enqueueJob(queueableObj)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_enqueueJob)**
    Adds a job to the Apex job queue that corresponds to the specified queueable class and returns the job ID.
-   **[enqueueJob(queueable, delay)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_system_enqueueJob_2)**
    Adds a job to the Apex job queue that corresponds to the specified queueable class and returns the job ID. The job is scheduled with a specified minimum delay (0–10 minutes). The delay is ignored during Apex testing.
-   **[enqueueJob(queueable, asyncOptions)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_system_enqueueJob)**
    Adds a job to the Apex job queue that corresponds to the specified queueable class and returns the job ID. Specify a unique signature for your queueable job, the maximum stack depth or the minimum queue delay in the asyncOptions parameter.
-   **[equals(obj1, obj2)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_equals)**
    Returns true if both arguments are equal. Otherwise, returns false.
-   **[getApplicationReadWriteMode()](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_getApplicationReadWriteMode)**
    Returns the read write mode set for an organization during Salesforce.com upgrades and downtimes.
-   **[getQuiddityShortCode(QuiddityValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_getQuiddityShortCode)**
    Returns the short code for the Quiddity value of the current Request object.
-   **[hashCode(obj)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_system_system_hashcode)**
    Returns the hash code of the specified object.
-   **[isBatch()](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_isBatch)**
    Returns true if a batch Apex job invoked the executing code, or false if not. In API version 35.0 and earlier, also returns true if a queueable Apex job invoked the code.
-   **[isFunctionCallback()](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_isFunctionCallback)**
    Returns true if an asynchronous Salesforce Function callback invoked the executing code, or false if not. Available in API version 51.0 and later.
-   **[isFuture()](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_isFuture)**
    Returns true if the currently executing code is invoked by code contained in a method annotated with future; false otherwise.
-   **[isQueueable()](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_system_isQueueable)**
    Returns true if a queueable Apex job invoked the executing code. Returns false if not, including if a batch Apex job or a future method invoked the code.
-   **[isRunningElasticCompute()](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_system_isRunningElasticCompute)**
    Reserved for future use.
-   **[isScheduled()](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_isScheduled)**
    Returns true if the currently executing code is invoked by a scheduled Apex job; false otherwise.
-   **[movePassword(targetUserId,sourceUserId)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_movePassword)**
    Moves the specified user’s password to a different user.
-   **[now()](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_now)**
    Returns the current date and time in the GMT time zone.
-   **[pauseJobById(cronTriggerId)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_system_pauseJobById)**
    Pause a scheduled Apex job specified by its CronTrigger ID.
-   **[pauseJobByName(jobName)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_system_pauseJobByName)**
    Pause a scheduled Apex job specified by its name.
-   **[process(workItemIds, action, comments, nextApprover)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_process)**
    Processes the list of work item IDs.
-   **[purgeOldAsyncJobs(dt)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_purgeOldAsyncJobs)**
    Deletes asynchronous Apex job records for jobs that have finished execution before the specified date with a Completed, Aborted, or Failed status, and returns the number of records deleted.
-   **[purgeOldAsyncJobs(dt, numOfJobs)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_purgeOldAsyncJobs_2)**
    Deletes asynchronous Apex job records for the specified number of jobs that finished before the specified date and have a Completed, Aborted, or Failed status. Returns the number of records deleted.
-   **[requestVersion()](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_requestVersion)**
    Returns a two-part version that contains the major and minor version numbers of a package. Applies to first-generation managed packages.
-   **[resetPassword(userId, sendUserEmail)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_resetPassword)**
    Resets the password for the specified user.
-   **[resetPasswordWithEmailTemplate(userId, sendUserEmail, emailTemplateName)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_system_resetPasswordWithEmailTemplate)**
    Resets the user's password and sends an email to the user with their new password. You specify the email template that is sent to the specified user. Use this method for external users of Experience Cloud sites.
-   **[resumeJobById(cronTriggerId)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_system_resumeJobById)**
    Resume a paused scheduled Apex job specified by its CronTrigger ID.
-   **[resumeJobByName(jobName)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_system_resumeJobByName)**
    Resumes a paused scheduled Apex job specified by its name.
-   **[runAs(version)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_runAs)**
    Changes the current package version to the package version specified in the argument.
-   **[runAs(userSObject)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_runAs_2)**
    Changes the current user to the specified user.
-   **[schedule(jobName, cronExpression, schedulableClass)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_schedule)**
    Use schedule with an Apex class that implements the Schedulable interface to schedule the class to run at the time specified by a Cron expression.
-   **[scheduleBatch(batchable, jobName, minutesFromNow)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_scheduleBatch)**
    Schedules a batch job to run once in the future after the specified time interval and with the specified job name.
-   **[scheduleBatch(batchable, jobName, minutesFromNow, scopeSize)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_scheduleBatch_2)**
    Schedules a batch job to run once in the future after the specified the time interval, with the specified job name and scope size. Returns the scheduled job ID (CronTrigger ID).
-   **[setPassword(userId, password)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_setPassword)**
    Sets the password for the specified user.
-   **[submit(workItemIds, comments, nextApprover)](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_submit)**
    Submits the processed approvals. The current user is the submitter and the entry criteria is evaluated for all processes applicable to the current user.
-   **[today()](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_today)**
    Returns the current date in the current user's time zone.

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

### assert(condition, msg)

Asserts that the specified condition is true. If it isn’t , a fatal error is returned that causes code execution to halt.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

We recommend that you use the methods of the [Assert Class](atlas.en-us.apexref.meta/apexref/apex_class_System_Assert.htm#apex_class_System_Assert "Contains methods to assert various conditions with test methods, such as whether two values are the same, a condition is true, or a variable is null.") rather than this method. The System.Assert class provides methods that handle all types of logical assertions and comparisons, which improve the clarity of your Apex code.

#### Signature

public static Void assert(Boolean condition, Object msg)

#### Parameters

condition

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

msg

Type: Object

(Optional) Custom message returned as part of the error message.

#### Return Value

Type: Void

#### Usage

You can’t catch an assertion failure using a try/catch block even though it’s logged as an exception.

### assertEquals(expected, actual, msg)

Asserts that the first two arguments are the same. If they aren’t, a fatal error is returned that causes code execution to halt.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

We recommend that you use the methods of the [Assert Class](atlas.en-us.apexref.meta/apexref/apex_class_System_Assert.htm#apex_class_System_Assert "Contains methods to assert various conditions with test methods, such as whether two values are the same, a condition is true, or a variable is null.") rather than this method. The System.Assert class provides methods that handle all types of logical assertions and comparisons, which improve the clarity of your Apex code.

#### Signature

public static Void assertEquals(Object expected, Object actual, Object msg)

#### Parameters

expected

Type: Object

Specifies the expected value.

actual

Type: Object

Specifies the actual value.

msg

Type: Object

(Optional) Custom message returned as part of the error message.

#### Return Value

Type: Void

#### Usage

You can’t catch an assertion failure using a try/catch block even though it’s logged as an exception.

### assertNotEquals(expected, actual, msg)

Asserts that the first two arguments are different. If they’re the same, a fatal error is returned that causes code execution to halt.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

We recommend that you use the methods of the [Assert Class](atlas.en-us.apexref.meta/apexref/apex_class_System_Assert.htm#apex_class_System_Assert "Contains methods to assert various conditions with test methods, such as whether two values are the same, a condition is true, or a variable is null.") rather than this method. The System.Assert class provides methods that handle all types of logical assertions and comparisons, which improve the clarity of your Apex code.

#### Signature

public static Void assertNotEquals(Object expected, Object actual, Object msg)

#### Parameters

expected

Type: Object

Specifies the expected value.

actual

Type: Object

Specifies the actual value.

msg

Type: Object

(Optional) Custom message returned as part of the error message.

#### Return Value

Type: Void

#### Usage

You can’t catch an assertion failure using a try/catch block even though it’s logged as an exception.

### currentPageReference()

Returns a reference to the current page. This is used with Visualforce pages.

#### Signature

public static System.PageReference currentPageReference()

#### Return Value

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

#### Usage

For more information, see [PageReference Class](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.").

### currentTimeMillis()

Returns the current time in milliseconds, which is expressed as the difference between the current time and midnight, January 1, 1970 UTC.

#### Signature

public static Long currentTimeMillis()

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

### debug(msg)

Writes the specified message, in string format, to the execution debug log. The DEBUG log level is used.

#### Signature

public static Void debug(Object msg)

#### Parameters

msg

Type: Object

#### Return Value

Type: Void

#### Usage

If the msg argument is not a string, the debug method calls String.valueOf to convert it into a string. The String.valueOf method calls the toString method on the argument, if available, or any overridden toString method if the argument is a user-defined type. Otherwise, if no toString method is available, it returns a string representation of the argument.

If the log level for Apex Code is set to DEBUG or higher, the message of this debug statement will be written to the debug log.

Note that when a map or set is printed, the output is sorted in key order and is surrounded with square brackets (\[\]). When an array or list is printed, the output is enclosed in parentheses (()).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Calls to System.debug are not counted as part of Apex code coverage.Calls to System.debug are not counted as part of Apex code coverage.

For more information on log levels, see [Debug Log Levels](https://help.salesforce.com/s/articleView?id=platform.code_setting_debug_log_levels.htm&type=5&language=en_US) in the Salesforce online help.

### debug(logLevel, msg)

Writes the specified message, in string format, to the execution debug log with the specified log level.

#### Signature

public static Void debug(LoggingLevel logLevel, Object msg)

#### Parameters

logLevel

Type: [LoggingLevel Enum](atlas.en-us.apexref.meta/apexref/apex_enum_System_LoggingLevel.htm "Specifies the logging level for the System.debug method.")

The logging level to set for this method.

msg

Type: Object

The message or object to write in string format to the execution debug log.

#### Return Value

Type: Void

#### Usage

If the msg argument is not a string, the debug method calls String.valueOf to convert it into a string. The String.valueOf method calls the toString method on the argument, if available, or any overridden toString method if the argument is a user-defined type. Otherwise, if no toString method is available, it returns a string representation of the argument.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Calls to System.debug are not counted as part of Apex code coverage.

For more information on log levels, see [Debug Log Levels](https://help.salesforce.com/s/articleView?id=platform.code_setting_debug_log_levels.htm&type=5&language=en_US) in the Salesforce online help.

### enqueueJob(queueableObj)

Adds a job to the Apex job queue that corresponds to the specified queueable class and returns the job ID.

#### Signature

public static ID enqueueJob(Object queueableObj)

#### Parameters

queueableObj

Type: Object

An instance of the class that implements the [Queueable Interface](atlas.en-us.apexref.meta/apexref/apex_class_System_Queueable.htm#apex_class_System_Queueable "Enables the asynchronous execution of Apex jobs that can be monitored.").

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The job ID, which corresponds to the ID of an AsyncApexJob record.

#### Usage

To add a job for asynchronous execution, call System.enqueueJob by passing in an instance of your class implementation of the Queueable interface for execution as follows:

```

```

For more information about Queueable Apex, including information about limits, see [Queueable Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_queueing_jobs.htm).

### enqueueJob(queueable, delay)

Adds a job to the Apex job queue that corresponds to the specified queueable class and returns the job ID. The job is scheduled with a specified minimum delay (0–10 minutes). The delay is ignored during Apex testing.

#### Signature

public static Id enqueueJob(Object queueable, Integer delay)

#### Parameters

queueable

Type: Object

An instance of the class that implements the [Queueable Interface](atlas.en-us.apexref.meta/apexref/apex_class_System_Queueable.htm#apex_class_System_Queueable "Enables the asynchronous execution of Apex jobs that can be monitored.").

delay

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The minimum delay (0–10 minutes) before the queueable job is scheduled for execution.

The delay is ignored during Apex testing.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexref)

#### Warning

When you set the delay to 0 (zero), the Queueable job is run as quickly as possible. With chained queueable jobs, implement a mechanism to slow down or halt the job if necessary. Without such a fail-safe mechanism in place, you can rapidly reach the daily async Apex limit.

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The job ID, which corresponds to the ID of an AsyncApexJob record.

#### Example

This example adds a job for delayed asynchronous execution by passing in an instance of your class implementation of the Queueable interface for execution. There’s a minimum delay of 5 minutes before the job is executed.

Integer delayInMinutes = 5; ID jobID = System.enqueueJob(new MyQueueableClass(), delayInMinutes);

For more information about Queueable Apex, including information about limits, see [Queueable Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_queueing_jobs.htm).

### enqueueJob(queueable, asyncOptions)

Adds a job to the Apex job queue that corresponds to the specified queueable class and returns the job ID. Specify a unique signature for your queueable job, the maximum stack depth or the minimum queue delay in the asyncOptions parameter.

#### Signature

public static Id enqueueJob(Object queueable, Object asyncoptions)

#### Parameters

queueable

Type: Object

An instance of the class that implements the [Queueable Interface](atlas.en-us.apexref.meta/apexref/apex_class_System_Queueable.htm#apex_class_System_Queueable "Enables the asynchronous execution of Apex jobs that can be monitored.").

asyncoptions

Type: [AsyncOptions](atlas.en-us.apexref.meta/apexref/apex_class_System_AsyncOptions.htm#apex_class_System_AsyncOptions "Contains maximum stack depths for queueable transactions and the minimum queueable delay in minutes. Passed as parameter to the System.enqueueJob() method to define a unique queueable job signature, the maximum stack depth for queueable transactions and the minimum queueable delay in minutes.")

Specify a unique signature for your queueable job, the maximum stack depth, or a minimum queue delay in the AsyncOptions class properties.

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The job ID, which corresponds to the ID of an AsyncApexJob record.

#### Usage

The [System.AsyncInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_AsyncInfo.htm "HTML (New Window)") class methods help you determine if maximum stack depth is set in your Queueable request and get the stack depths and queue delay for queueables that are currently running. Use information about the current queueable execution to make decisions on adjusting delays on subsequent calls.

These are methods in the System.AsyncInfo class.

-   hasMaxStackDepth()
-   getCurrentQueueableStackDepth()
-   getMaximumQueueableStackDepth()
-   getMinimumQueueableDelayInMinutes()

For more information about Queueable Apex, including information about limits, see [Queueable Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_queueing_jobs.htm).

### equals(obj1, obj2)

Returns true if both arguments are equal. Otherwise, returns false.

#### Signature

public static Boolean equals(Object obj1, Object obj2)

#### Parameters

obj1

Type: Object

Object being compared.

obj2

Type: Object

Object to compare with the first argument.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

obj1 and obj2 can be of any type. They can be values, or object references, such as sObjects and user-defined types.

The comparison rules for System.equals are identical to the ones for the \== operator. For example, string comparison is case insensitive. For information about the comparison rules, see [the == operator](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_expressions_operators_understanding.htm).

### getApplicationReadWriteMode()

Returns the read write mode set for an organization during Salesforce.com upgrades and downtimes.

#### Signature

public static System.ApplicationReadWriteMode getApplicationReadWriteMode()

#### Return Value

Type: [System.ApplicationReadWriteMode](#AppReadWriteModeMethod)

Valid values are:

-   DEFAULT
-   READ\_ONLY

#### Using the System.ApplicationReadWriteMode Enum

Use the System.ApplicationReadWriteMode enum returned by the getApplicationReadWriteMode to programmatically determine if the application is in read-only mode during Salesforce upgrades and downtimes.

Valid values for the enum are:

-   DEFAULT
-   READ\_ONLY

Example:

```

```

### getQuiddityShortCode(QuiddityValue)

Returns the short code for the Quiddity value of the current Request object.

#### Signature

public String getQuiddityShortCode(System.Quiddity QuiddityValue)

#### Parameters

QuiddityValue

Type: [System.Quiddity](atlas.en-us.apexref.meta/apexref/apex_enum_System_Quiddity.htm "Specifies a Quiddity value used by the methods in the System.Request class")

The Quiddity enum value that has an associated short code. This short code is used in Event Monitoring logs. For more information, see [Apex Execution Event Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apexexecution.htm "HTML (New Window)").

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### hashCode(obj)

Returns the hash code of the specified object.

#### Signature

public static Integer hashCode(Object obj)

#### Parameters

obj

Type: Object

The object to get the hash code for. This parameter can be of any type, including values or object references, such as sObjects or user-defined types.

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Versioned Behavior Changes

In API version 51.0 and later, the hashCode() method returns the same hashCode for identical Id values. In API version 50.0 and earlier, identical Id values didn’t always generate the same hashCode value.

### isBatch()

Returns true if a batch Apex job invoked the executing code, or false if not. In API version 35.0 and earlier, also returns true if a queueable Apex job invoked the code.

#### Signature

public static Boolean isBatch()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

A batch Apex job can’t invoke a future method. Before invoking a future method, use isBatch() to check whether the executing code is a batch Apex job.

### isFunctionCallback()

Returns true if an asynchronous Salesforce Function callback invoked the executing code, or false if not. Available in API version 51.0 and later.

#### Signature

public static Boolean isFunctionCallback()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

Use this method to determine if the Apex code is being invoked as part of a callback from an asynchronous Salesforce Functions invocation. For more details on invoking Salesforce Functions from Apex, see [Functions Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_functions.htm "The Functions namespace provides classes and methods used to invoke and manage Salesforce Functions.")

### isFuture()

Returns true if the currently executing code is invoked by code contained in a method annotated with future; false otherwise.

#### Signature

public static Boolean isFuture()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

Since a future method can't be invoked from another future method, use this method to check if the current code is executing within the context of a future method before you invoke a future method.

### isQueueable()

Returns true if a queueable Apex job invoked the executing code. Returns false if not, including if a batch Apex job or a future method invoked the code.

#### Signature

public static Boolean isQueueable()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

```

```

```

```

### isRunningElasticCompute()

Reserved for future use.

#### Signature

public static Boolean isRunningElasticCompute()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isScheduled()

Returns true if the currently executing code is invoked by a scheduled Apex job; false otherwise.

#### Signature

public static Boolean isScheduled()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### movePassword(targetUserId,sourceUserId)

Moves the specified user’s password to a different user.

#### Signature

public static Void movePassword(ID targetUserId, ID sourceUserId)

#### Parameters

targetUserId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The user that the password is moved to.

sourceUserId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The user that the password is moved from.

#### Return Value

Type: Void

#### Usage

Moving a password simplifies converting a user to another type of user, such as when converting an external user to a user with less restrictive access. If you require access to the movePassword method, contact Salesforce.

Keep in mind these requirements.

-   The targetUserId, sourceUserId, and user performing the move operation must all belong to the same Salesforce org.
-   The targetUserId and the sourceUserId cannot be the same as the user performing the move operation.
-   A user without a password can’t be specified as the sourceUserId. For example, a source user who has already had their password moved is left without a password. That user can’t be a source user again.

After the password is moved:

-   The target user can log in with the password.
-   The source user no longer has a password. To enable logins for this user, a password reset is required.

### now()

Returns the current date and time in the GMT time zone.

#### Signature

public static Datetime now()

#### Return Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

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

### pauseJobByName(jobName)

Pause a scheduled Apex job specified by its name.

#### Signature

public static void pauseJobByName(String jobName)

#### Parameters

jobName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### process(workItemIds, action, comments, nextApprover)

Processes the list of work item IDs.

#### Signature

public static List<Id> process(List<Id> workItemIds, String action, String comments, String nextApprover)

#### Parameters

workItemIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\>

action

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

comments

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

nextApprover

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\>

### purgeOldAsyncJobs(dt)

Deletes asynchronous Apex job records for jobs that have finished execution before the specified date with a Completed, Aborted, or Failed status, and returns the number of records deleted.

#### Signature

public static Integer purgeOldAsyncJobs(Date dt)

#### Parameters

dt

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

Specifies the date up to which old records are deleted. The date comparison is based on the CompletedDate field of AsyncApexJob, which is in the GMT time zone.

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

Asynchronous Apex job records are records in [AsyncApexJob](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_asyncapexjob.htm "HTML (New Window)").

The system cleans up asynchronous job records for jobs that have finished execution and are older than seven days. You can use this method to further reduce the size of AsyncApexJob by cleaning up more records.

Each execution of this method counts as a single row against the governor limit for DML statements.

#### Example

This example shows how to delete all job records for jobs that have finished before today’s date.

```

```

### purgeOldAsyncJobs(dt, numOfJobs)

Deletes asynchronous Apex job records for the specified number of jobs that finished before the specified date and have a Completed, Aborted, or Failed status. Returns the number of records deleted.

#### Signature

public static Integer purgeOldAsyncJobs(Date dt, Integer numOfJobs)

#### Parameters

dt

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

Specifies the date up to which old records are deleted. The date comparison is based on the CompletedDate field of AsyncApexJob, which is in the GMT time zone.

numOfJobs

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the maximum number of async jobs to delete, starting from the oldest job that finished before the specified date.

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

Asynchronous Apex job records are records in [AsyncApexJob](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_asyncapexjob.htm "HTML (New Window)").

The system purges asynchronous job records for jobs that have finished execution and are older than seven days. You can use this method to further reduce the size of AsyncApexJob by purging more records.

Each execution of this method counts as a single row against the governor limit for DML statements.

#### Example

This example shows how to delete up to 1000 job records for jobs that finished before today’s date.

Integer maximumNumberOfJobsToDelete = 1000; Integer count = System.purgeOldAsyncJobs( Date.today(), maximumNumberOfJobsToDelete ); System.debug('Deleted ' + count + ' old jobs.');

### requestVersion()

Returns a two-part version that contains the major and minor version numbers of a package. Applies to first-generation managed packages.

#### Signature

public static System.Version requestVersion()

#### Return Value

Type: [System.Version](atlas.en-us.apexref.meta/apexref/apex_methods_system_version.htm#apex_methods_system_version "Use the Version methods to get the version of a first-generation managed package (1GP) or a migrated second-generation managed package (2GP), and to compare package versions.")

#### Usage

Using this method, you can determine the version of an installed instance of your package from which the calling code is referencing your package. Based on the version that the calling code has, you can customize the behavior of your package code. See [Version Apex Code Behavior](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_manpkgs_behavior.htm "HTML (New Window)") in the Apex Developer Guide.

The requestVersion method isn’t supported for unmanaged packages. If you call it from an unmanaged package, an exception will be thrown.

### resetPassword(userId, sendUserEmail)

Resets the password for the specified user.

#### Signature

public static System.ResetPasswordResult resetPassword(ID userId, Boolean sendUserEmail)

#### Parameters

userId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

sendUserEmail

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: System.ResetPasswordResult

#### Usage

When the user logs in with the new password, they are prompted to enter a new password, and to select a security question and answer if they haven't already. If you specify true for sendUserEmail, the user is sent an email notifying them that their password was reset. A link to sign onto Salesforce using the new password is included in the email. Use [setPassword(userId, password)](#apex_System_System_setPassword "Sets the password for the specified user.") if you don't want the user to be prompted to enter a new password when they log in.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexref)

#### Warning

Be careful with this method, and do not expose this functionality to end-users.

### resetPasswordWithEmailTemplate(userId, sendUserEmail, emailTemplateName)

Resets the user's password and sends an email to the user with their new password. You specify the email template that is sent to the specified user. Use this method for external users of Experience Cloud sites.

#### Signature

public static System.ResetPasswordResult resetPasswordWithEmailTemplate(Id userId, Boolean sendUserEmail, String emailTemplateName)

#### Parameters

userId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the user whose password was reset.

sendUserEmail

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

emailTemplateName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the email template.

#### Return Value

Type: [System.ResetPasswordResult](atlas.en-us.apexref.meta/apexref/apex_class_System_ResetPasswordResult.htm#apex_class_System_ResetPasswordResult "Represents the result of a password reset.")

#### Usage

If you specify true for sendUserEmail, specify the email template that is sent to the user notifying them that their password was reset. When the user logs in with the new password in the email, they are prompted to enter a new password. A link to sign onto Salesforce using the new password is included in the email. Use [setPassword(userId, password)](#apex_System_System_setPassword "Sets the password for the specified user.") if you don't want the user to be prompted to enter a new password when they log in.

The password reset process doesn't verify an external user's email address.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexref)

#### Warning

Be careful with this method, and do not expose this functionality to end-users.

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

### runAs(version)

Changes the current package version to the package version specified in the argument.

#### Signature

public static Void runAs(System.Version version)

#### Parameters

version

Type: [System.Version](atlas.en-us.apexref.meta/apexref/apex_methods_system_version.htm#apex_methods_system_version "Use the Version methods to get the version of a first-generation managed package (1GP) or a migrated second-generation managed package (2GP), and to compare package versions.")

#### Return Value

Type: Void

#### Usage

A package developer can use [Version methods](atlas.en-us.apexref.meta/apexref/apex_methods_system_version.htm#apex_methods_system_version "Use the Version methods to get the version of a first-generation managed package (1GP) or a migrated second-generation managed package (2GP), and to compare package versions.") to continue to support existing behavior in classes and triggers in previous package versions while continuing to evolve the code. Apex classes and triggers are saved with the version settings for each installed managed package that the class or trigger references.

This method is used for testing your component behavior in different package versions that you upload to the AppExchange. This method effectively sets a two-part version consisting of major and minor numbers in a test method so that you can test the behavior for different package versions.

You can only use runAs in a test method. There is no limitation to the number of calls to this method in a transaction. For sample usage of this method, see [Testing Behavior in Package Versions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_manpkgs_behavior_testing.htm).

### runAs(userSObject)

Changes the current user to the specified user.

#### Signature

public static Void runAs(User userSObject)

#### Parameters

userSObject

Type: User

#### Return Value

Type: Void

#### Usage

All of the specified user's record sharing is enforced during the execution of runAs. You can only use runAs in a test method. For more information, see [Using the runAs() Method](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_testing_tools_runas.htm).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

The runAs method ignores user license limits. You can create new users with runAs even if your organization has no additional user licenses.

The runAs method implicitly inserts the user that is passed in as parameter if the user has been instantiated, but not inserted yet.

You can also use runAs to perform mixed DML operations in your test by enclosing the DML operations within the runAs block. In this way, you bypass the mixed DML error that is otherwise returned when inserting or updating setup objects together with other sObjects. See [sObjects That Cannot Be Used Together in DML Operations](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dml_non_mix_sobjects.htm).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Every call to runAs counts against the total number of DML statements issued in the process.

### schedule(jobName, cronExpression, schedulableClass)

Use schedule with an Apex class that implements the Schedulable interface to schedule the class to run at the time specified by a Cron expression.

#### Signature

public static String schedule(String jobName, String cronExpression, Object schedulableClass)

#### Parameters

jobName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

cronExpression

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

schedulableClass

Type: Object

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Returns the scheduled job ID (CronTrigger ID).

#### Usage

Use extreme care if you’re planning to schedule a class from a trigger. You must be able to guarantee that the trigger won’t add more scheduled classes than the limit. In particular, consider API bulk updates, import wizards, mass record changes through the user interface, and all cases where more than one record can be updated at a time. Use the abortJob method to stop the job after it has been scheduled.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Salesforce schedules the class for execution at the specified time. Actual execution may be delayed based on service availability.

#### Using the System.Schedule Method

After you implement a class with the Schedulable interface, use the System.Schedule method to execute it. The scheduler runs as system—all classes are executed, whether or not the user has permission to execute the class.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Use extreme care if you’re planning to schedule a class from a trigger. You must be able to guarantee that the trigger won’t add more scheduled classes than the limit. In particular, consider API bulk updates, import wizards, mass record changes through the user interface, and all cases where more than one record can be updated at a time.

The System.Schedule method takes three arguments: a name for the job, an expression used to represent the time and date the job is scheduled to run, and the name of the class. This expression has the following syntax:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Salesforce schedules the class for execution at the specified time. Actual execution may be delayed based on service availability.

The System.Schedule method uses the user's timezone for the basis of all schedules.

The following are the values for the expression:

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
| ? | Specifies no specific value. This is only available for Day_of_month and Day_of_week, and is generally used when specifying a value for one and not the other. |
| / | Specifies increments. The number before the slash specifies when the intervals will begin, and the number after the slash is the interval amount. For example, if you specify 1/5 for Day_of_month, the Apex class runs every fifth day of the month, starting on the first of the month. |
| L | Specifies the end of a range (last). This is only available for Day_of_month and Day_of_week. When used with Day of month, L always means the last day of the month, such as January 31, February 29 for leap years, and so on. When used with Day_of_week by itself, it always means 7 or SAT. When used with a Day_of_week value, it means the last of that type of day in the month. For example, if you specify 2L, you are specifying the last Monday of the month. Do not use a range of values with L as the results might be unexpected. |
| W | Specifies the nearest weekday (Monday-Friday) of the given day. This is only available for Day_of_month. For example, if you specify 20W, and the 20th is a Saturday, the class runs on the 19th. If you specify 1W, and the first is a Saturday, the class does not run in the previous month, but on the third, which is the following Monday.TipUse the L and W together to specify the last weekday of the month. |
| # | Specifies the nth day of the month, in the format weekday#day_of_month. This is only available for Day_of_week. The number before the # specifies weekday (SUN-SAT). The number after the # specifies the day of the month. For example, specifying 2#1 means the class runs on the first Monday of every month. |

The following are some examples of how to use the expression.

| Expression | Description |
| --- | --- |
| 0 0 13 * * ? | Class runs every day at 1 PM. |
| 0 0 22 ? * 6L | Class runs the last Friday of every month at 10 PM. |
| 0 0 10 ? * MON-FRI | Class runs Monday through Friday at 10 AM. |
| 0 0 20 * * ? 2010 | Class runs every day at 8 PM during the year 2010. |

In the following example, the class proschedule implements the Schedulable interface. The class is scheduled to run at 8 AM, on the 13 February.

```

```

### scheduleBatch(batchable, jobName, minutesFromNow)

Schedules a batch job to run once in the future after the specified time interval and with the specified job name.

#### Signature

public static String scheduleBatch(Database.Batchable batchable, String jobName, Integer minutesFromNow)

#### Parameters

batchable

Type: [Database.Batchable](atlas.en-us.apexref.meta/apexref/apex_interface_database_batchable.htm#apex_interface_database_batchable "The class that implements this interface can be executed as a batch Apex job.")

An instance of a class that implements the Database.Batchable interface.

jobName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the job that this method will start.

minutesFromNow

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The time interval in minutes after which the job should start executing. This argument must be greater than zero.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The scheduled job ID (CronTrigger ID).

#### Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Some things to note about System.scheduleBatch:

-   When you call System.scheduleBatch, Salesforce schedules the job for execution at the specified time. Actual execution occurs at or after that time, depending on service availability.
-   The scheduler runs as system—all classes are executed, whether the user has permission to execute the class or not.
-   When the job’s schedule is triggered, the system queues the batch job for processing. If Apex flex queue is enabled in your org, the batch job is added at the end of the flex queue. For more information, see Holding Batch Jobs in the Apex Flex Queue.
-   All scheduled Apex limits apply for batch jobs scheduled using System.scheduleBatch. After the batch job is queued (with a status of Holding or Queued), all batch job limits apply and the job no longer counts toward scheduled Apex limits.
-   After calling this method and before the batch job starts, you can use the returned scheduled job ID to abort the scheduled job using the [System.abortJob](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_system.htm) method.

For an example, see [Using Batch Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_batch_interface.htm).

### scheduleBatch(batchable, jobName, minutesFromNow, scopeSize)

Schedules a batch job to run once in the future after the specified the time interval, with the specified job name and scope size. Returns the scheduled job ID (CronTrigger ID).

#### Signature

public static String scheduleBatch(Database.Batchable batchable, String jobName, Integer minutesFromNow, Integer scopeSize)

#### Parameters

batchable

Type: [Database.Batchable](atlas.en-us.apexref.meta/apexref/apex_interface_database_batchable.htm#apex_interface_database_batchable "The class that implements this interface can be executed as a batch Apex job.")

The batch class that implements the Database.Batchable interface.

jobName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the job that this method will start.

minutesFromNow

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The time interval in minutes after which the job should start executing.

scopeSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The number of records that should be passed to the batch execute method.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Some things to note about System.scheduleBatch:

-   When you call System.scheduleBatch, Salesforce schedules the job for execution at the specified time. Actual execution occurs at or after that time, depending on service availability.
-   The scheduler runs as system—all classes are executed, whether the user has permission to execute the class or not.
-   When the job’s schedule is triggered, the system queues the batch job for processing. If Apex flex queue is enabled in your org, the batch job is added at the end of the flex queue. For more information, see Holding Batch Jobs in the Apex Flex Queue.
-   All scheduled Apex limits apply for batch jobs scheduled using System.scheduleBatch. After the batch job is queued (with a status of Holding or Queued), all batch job limits apply and the job no longer counts toward scheduled Apex limits.
-   After calling this method and before the batch job starts, you can use the returned scheduled job ID to abort the scheduled job using the [System.abortJob](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_system.htm) method.

For an example, see [Using the System.scheduleBatch Method](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_batch_interface.htm).

### setPassword(userId, password)

Sets the password for the specified user.

#### Signature

public static Void setPassword(ID userId, String password)

#### Parameters

userId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

password

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

#### Usage

-   If a security question hasn't been previously configured, a user who logs in with a new password that was set using setPassword() is redirected to the "Change Your Password" page.
-   Use [resetPassword(userId, sendUserEmail)](#apex_System_System_resetPassword "Resets the password for the specified user.") if you want the user to go through the reset process and create their own password.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexref)

#### Warning

Be careful with this method, and don’t expose this functionality to end users.

### submit(workItemIds, comments, nextApprover)

Submits the processed approvals. The current user is the submitter and the entry criteria is evaluated for all processes applicable to the current user.

#### Signature

public static List<ID\> submit(List<ID\> workItemIds, String comments, String nextApprover)

#### Parameters

workItemIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\>

comments

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

nextApprover

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\>

#### Usage

For enhanced submit and evaluation features, see the [ProcessSubmitRequest](atlas.en-us.apexref.meta/apexref/apex_ProcessSubmitRequest.htm#apex_ProcessSubmitRequest "Use the ProcessSubmitRequest class to submit a record for approval.") class.

### today()

Returns the current date in the current user's time zone.

#### Signature

public static Date today()

#### Return Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

## Code Examples

```apex
public class myClass {
  public static void execute() {
    ApplicationReadWriteMode mode = System.getApplicationReadWriteMode();

    if (mode == ApplicationReadWriteMode.READ_ONLY) {
      // Do nothing. If DML operaton is attempted in readonly mode, 
      // InvalidReadOnlyUserDmlException will be thrown.  
    } else if (mode == ApplicationReadWriteMode.DEFAULT) {
      Account account = new Account(name = 'my account');
      insert account;
    }
  }
}
```

```apex
public class SimpleQueueable implements Queueable {

    String name;

    public SimpleQueueable(String name) {
        this.name = name;
        System.assert(!System.isQueueable());    //Should return false
    }

    public void execute(QueueableContext ctx) {
        Account testAccount  = new Account();
        testAccount.name = 'testAcc';
        insert(testAccount);
        System.assert(System.isQueueable());    //Should return true
    }
}
```

```apex
global class ComplexBatch implements Database.Batchable<SObject> {
    
    global Database.QueryLocator start(Database.BatchableContext info) {
        System.assert(!System.isQueueable());    //Should return false
        return Database.getQueryLocator([SELECT Id, Name FROM Account LIMIT 1]);
    }
    
    global void execute(Database.BatchableContext info, SObject[] scope) {
        System.assert(!System.isQueueable());    //Should return false
        System.enqueueJob(new SimpleQueueable('CallingFromComplexBatch'));
        System.assert(!System.isQueueable());    //Should return false
    }
    
    global void finish(Database.BatchableContext info) {
        System.assert(!System.isQueueable());    //Should return false
    }
}
```

```apex
Integer count = System.purgeOldAsyncJobs
   (Date.today());
System.debug('Deleted ' + 
   count + ' old jobs.');
```

```
Seconds Minutes Hours Day_of_month Month Day_of_week Optional_year
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- abortJob(jobId) (atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm)
- assert(condition, msg) (atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm)
- assertEquals(expected, actual, msg) (atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm)
- assertNotEquals(expected, actual, msg) (atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm)
- currentPageReference() (atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm)
- currentTimeMillis() (atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm)
- debug(msg) (atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm)
- debug(logLevel, msg) (atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm)
- enqueueJob(queueableObj) (atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm)
