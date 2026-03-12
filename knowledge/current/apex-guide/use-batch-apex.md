---
title: "Use Batch Apex"
domain: apex-guide
topic: use-batch-apex
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:32.253Z
estimatedTokens: 8392
keywords: [Batch, Apex, batch, write, implements, Salesforce-provided, Database.Batchable, then, invoke, programmatically., monitor, stop, execution, job, Setup, enter, Jobs, Quick, Find, box]
---

# Use Batch Apex

> To use batch Apex, write an Apex class that implements the Salesforce-provided
        interface Database.Batchable and then invoke the
        class programmatically. To monitor or stop the execution of the batch Apex job, from Setup,
        enter Apex Jobs in the Quick Find box and then select Apex
            Jobs.

# Use Batch Apex

To use batch Apex, write an Apex class that implements the Salesforce-provided interface Database.Batchable and then invoke the class programmatically. To monitor or stop the execution of the batch Apex job, from Setup, enter Apex Jobs in the Quick Find box and then select **Apex Jobs**.

## Implement the Database.Batchable Interface

The Database.Batchable interface contains three methods that must be implemented.

-   start method:

    ```

    ```

    The start method is called at the beginning of a batch Apex job. In the start method, you can include code that collects records or objects to pass to the interface method execute. This method returns either a Database.QueryLocator object or an iterable that contains the records or objects passed to the job.

    When you’re using a simple query (SELECT) to generate the scope of objects in the batch job, use the Database.QueryLocator object. If you use a QueryLocator object, the governor limit for the total number of records retrieved by SOQL queries is bypassed. For example, a batch Apex job for the Account object can return a QueryLocator for all account records (up to 50 million records) in an org. Another example is a sharing recalculation for the Contact object that returns a QueryLocator for all account records in an org.

    Use the iterable to create a complex scope for the batch job. You can also use the iterable to create your own custom process for iterating through the list.

    ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

    #### Important

    If you use an iterable, the governor limit for the total number of records retrieved by SOQL queries is still enforced. For more information on using iterables for batch jobs, see [Batch Apex Considerations and Best Practices](#batch_apex_bp_section).

-   execute method:

    ```

    ```

    The execute method is called for each batch of records that you pass to it and takes these parameters.

    -   A reference to the Database.BatchableContext object.
    -   A list of sObjects, such as List<sObject>, or a list of parameterized types. If you’re using a Database.QueryLocator, use the returned list.

    Batches of records tend to execute in the order in which they’re received from the start method. However, the order in which batches of records execute depends on various factors. The order of execution isn’t guaranteed.

-   finish method:

    ```

    ```

    The finish method is called after all batches are processed and can be used to send confirmation emails or execute post-processing operations.


Each execution of a batch Apex job is considered a discrete transaction. For example, a batch Apex job that contains 1,000 records and is executed without the optional scope parameter from Database.executeBatch is considered five transactions of 200 records each. The Apex governor limits are reset for each transaction. If the first transaction succeeds but the second fails, the database updates made in the first transaction aren’t rolled back.

## Use Database.BatchableContext

All the methods in the Database.Batchable interface require a reference to a Database.BatchableContext object. Use this object to track the progress of the batch job.

The following is the instance method with the Database.BatchableContext object:

| Name | Arguments | Returns | Description |
| --- | --- | --- | --- |
| getJobID |  | ID | Returns the ID of the AsyncApexJob object associated with this batch job as a string. Use this method to track the progress of records in the batch job. You can also use this ID with the System.abortJob method. |

The following example uses the Database.BatchableContext to query the AsyncApexJob associated with the batch job.

```

```

## Using Database.QueryLocator to Define Scope

The start method can return either a Database.QueryLocator object that contains the records to use in the batch job or an iterable.

The following example uses a Database.QueryLocator:

```

```

## Using an Iterable in Batch Apex to Define Scope

The start method can return either a Database.QueryLocator object that contains the records to use in the batch job or an iterable. Use an iterable to step through the returned items more easily.

```

```

## Using the Database.executeBatch Method to Submit Batch Jobs

You can use the Database.executeBatch method to programmatically begin a batch job.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

When you call Database.executeBatch, Salesforce adds the process to the queue. Actual execution can be delayed based on service availability.

The Database.executeBatch method takes two parameters:

-   An instance of a class that implements the Database.Batchable interface.
-   An optional parameter scope. This parameter specifies the number of records to pass into the execute method. Use this parameter when you have many operations for each record being passed in and are running into governor limits. By limiting the number of records, you’re limiting the operations per transaction. This value must be greater than zero. If the start method of the batch class returns a QueryLocator, the optional scope parameter of Database.executeBatch can have a maximum value of 2,000. If set to a higher value, Salesforce chunks the records returned by the QueryLocator into smaller batches of up to records. If the start method of the batch class returns an iterable, the scope parameter value has no upper limit. However, if you use a high number, you can run into other limits. The optimal scope size is a factor of 2000, for example, 100, 200, 400 and so on.

The Database.executeBatch method returns the ID of the AsyncApexJob object, which you can use to track the progress of the job. For example:

```

```

You can also use this ID with the [System.abortJob](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_system.htm) method.

For more information, see [AsyncApexJob](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_asyncapexjob.htm "HTML (New Window)") in the Object Reference for Salesforce.

## Holding Batch Jobs in the Apex Flex Queue

With the Apex flex queue, you can submit up to 100 batch jobs.

The outcome of Database.executeBatch is as follows.

-   The batch job is placed in the Apex flex queue, and its status is set to Holding.
-   If the Apex flex queue has the maximum number of 100 jobs, Database.executeBatch throws a LimitException and doesn't add the job to the queue.
-   If your org doesn’t have Apex flex queue enabled, Database.executeBatch adds the batch job to the batch job queue with the Queued status. If the concurrent limit of queued or active batch jobs has been reached, a LimitException is thrown, and the job isn’t queued.
-   It is possible that the number of jobs in the Apex flex queue sometimes exceeds the maximum limit, resulting from parallel requests to enqueue batch Apex jobs. Further attempts to enqueue batch jobs will encounter a LimitException until the queue size drops below the maximum limit.

**Reordering Jobs in the Apex Flex Queue**

While submitted jobs have a status of Holding, you can reorder them in the Salesforce user interface to control which batch jobs are processed first. To do so, from Setup, enter Apex Flex Queue in the Quick Find box, then select **Apex Flex Queue**.

Alternatively, you can use Apex methods to reorder batch jobs in the flex queue. To move a job to a new position, call one of the [System.FlexQueue methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_flexqueue.htm). Pass the method the job ID and, if applicable, the ID of the job next to the moved job’s new position. For example:

```

```

You can reorder jobs in the Apex flex queue to prioritize jobs. For example, you can move a batch job up to the first position in the holding queue to be processed first when resources become available. Otherwise, jobs are processed “first-in, first-out”—in the order in which they’re submitted.

When system resources become available, the system picks up the next job from the top of the Apex flex queue and moves it to the batch job queue. The system can process up to five queued or active jobs simultaneously for each organization. The status of these moved jobs changes from Holding to Queued. Queued jobs get executed when the system is ready to process new jobs. You can monitor queued jobs on the Apex Jobs page.

## Batch Job Statuses

The following table lists all possible statuses for a batch job along with a description of each.

| Status | Description |
| --- | --- |
| Holding | Job has been submitted and is held in the Apex flex queue until system resources become available to queue the job for processing. |
| Queued | Job is awaiting execution. |
| Preparing | The start method of the job has been invoked. This status can last a few minutes depending on the size of the batch of records. |
| Processing | Job is being processed. |
| Aborted | Job aborted by a user. |
| Completed | Job completed with or without failure. |
| Failed | Job experienced a system failure. |

## Using the System.scheduleBatch Method

You can use the System.scheduleBatch method to schedule a batch job to run once at a future time.

The System.scheduleBatch method takes these parameters.

-   An instance of a class that implements the Database.Batchable interface.
-   The job name.
-   The time interval, in minutes, after which the job starts executing.
-   An optional scope value. This parameter specifies the number of records to pass into the execute method. Use this parameter when you have many operations for each record being passed in and are running into governor limits. By limiting the number of records, you’re limiting the operations per transaction. This value must be greater than zero.If the start method of the batch class returns a QueryLocator, the optional scope parameter of Database.executeBatch can have a maximum value of . If set to a higher value, Salesforce chunks the records returned by the QueryLocator into smaller batches of up to 2,000 records. If the start method of the batch class returns an iterable, the scope parameter value has no upper limit. However, if you use a high number, you can run into other limits. The optimal scope size is a factor of 2000, for example, 100, 200, 400 and so on.

The System.scheduleBatch method returns the scheduled job ID (CronTrigger ID).

This example schedules a batch job to run 60 minutes from now by calling System.scheduleBatch. The example passes this method an instance of a batch class (the reassign variable), a job name, and a time interval of 60 minutes. The optional scope parameter has been omitted. The method returns the scheduled job ID, which is used to query CronTrigger to get the status of the corresponding scheduled job.

```

```

For more information, see [CronTrigger](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_crontrigger.htm "HTML (New Window)") in the Object Reference for Salesforce.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Some things to note about System.scheduleBatch:

-   When you call System.scheduleBatch, Salesforce schedules the job for execution at the specified time. Actual execution occurs at or after that time, depending on service availability.
-   The scheduler runs as system—all classes are executed, whether the user has permission to execute the class or not.
-   When the job’s schedule is triggered, the system queues the batch job for processing. If Apex flex queue is enabled in your org, the batch job is added at the end of the flex queue. For more information, see [Holding Batch Jobs in the Apex Flex Queue](#Flex_Queue).
-   All scheduled Apex limits apply for batch jobs scheduled using System.scheduleBatch. After the batch job is queued (with a status of Holding or Queued), all batch job limits apply and the job no longer counts toward scheduled Apex limits.
-   After calling this method and before the batch job starts, you can use the returned scheduled job ID to abort the scheduled job using the [System.abortJob](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_system.htm) method.

## Batch Apex Examples

The following example uses a Database.QueryLocator:

```

```

You can use this code to call the previous class.

```

```

To exclude accounts or invoices that were deleted but are still in the Recycle Bin, include isDeleted=false in the SOQL query WHERE clause, as shown in these modified samples.

```

```

```

```

The following class uses batch Apex to reassign all accounts owned by a specific user to a different user.

```

```

Use this code to execute the OwnerReassignment class in the previous example.

```

```

The following is an example of a batch Apex class for deleting records.

```

```

This code calls the BatchDelete batch Apex class to delete old documents. The specified query selects documents to delete for all documents that are in a specified folder and that are older than a specified date. Next, the sample invokes the batch job.

```

```

## Using Callouts in Batch Apex

To use a [callout](atlas.en-us.apexcode.meta/apexcode/apex_callouts.htm) in batch Apex, specify Database.AllowsCallouts in the class definition. For example:

```

```

Callouts include HTTP requests and methods defined with the webservice keyword.

## Using State in Batch Apex

Each execution of a batch Apex job is considered a discrete transaction. For example, a batch Apex job that contains 1,000 records and is executed without the optional scope parameter is considered five transactions of 200 records each.

If you specify Database.Stateful in the class definition, you can maintain state across these transactions. When using Database.Stateful, only instance member variables retain their values between transactions. Static member variables don’t retain their values and are reset between transactions. Maintaining state is useful for counting or summarizing records as they’re processed. For example, suppose your job processes opportunity records. You can define a method in execute to aggregate the totals of the opportunity amounts as they are processed.

If you don’t specify Database.Stateful, all static and instance member variables are set back to their original values.

The following example summarizes a custom field total\_\_c as the records are processed.

```

```

In addition, you can specify a variable to access the initial state of the class. You can use this variable to share the initial state with all instances of the Database.Batchable methods. For example:

```

```

The initialState stores only the *initial* state of the class. You can’t use it to pass information between instances of the class during execution of the batch job. For example, if you change the value of initialState in execute, the second chunk of processed records can’t access the new value. Only the initial value is accessible.

## Testing Batch Apex

When testing your batch Apex, you can test only one execution of the execute method. Use the scope parameter of the executeBatch method to limit the number of records passed into the execute method to ensure that you aren’t running into governor limits.

The executeBatch method starts an asynchronous process. When you test batch Apex, make certain that the asynchronously processed batch job is finished before testing against the results. Use the Test methods startTest and stopTest around the executeBatch method to ensure that it finishes before continuing your test. All asynchronous calls made after the startTest method are collected by the system. When stopTest is executed, all asynchronous processes are run synchronously. If you don’t include the executeBatch method within the startTest and stopTest methods, the batch job executes at the end of your test method. This execution order applies for Apex saved using API version 25.0 and later, but not for earlier versions.

For Apex saved using API version 22.0 and later, exceptions that occur during the execution of a batch Apex job invoked by a test method are passed to the calling test method. As a result, these exceptions cause the test method to fail. If you want to handle exceptions in the test method, enclose the code in try and catch statements. Place the catch block after the stopTest method. However, with Apex saved using Apex version 21.0 and earlier, such exceptions don’t get passed to the test method and don’t cause test methods to fail.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Asynchronous calls, such as @future or executeBatch, called in a startTest, stopTest block, don’t count against your limits for the number of queued jobs.

The following example tests the OwnerReassignment class.

```

```

Use the System.Test.enqueueBatchJobs and System.Test.getFlexQueueOrder methods to enqueue and reorder no-operation jobs within the context of tests.

## Batch Apex Limitations

Keep in mind these governor limits and other limitations for batch Apex.

-   Up to 5 batch jobs can be queued or active concurrently.
-   Up to 100 Holding batch jobs can be held in the Apex flex queue.
-   In a running test, you can submit a maximum of 5 batch jobs.
-   The maximum number of batch Apex method executions per 24-hour period is 250,000, or the number of user licenses in your org multiplied by 200—whichever is greater. Method executions include executions of the start, execute, and finish methods. This limit is for your entire org and is shared with all asynchronous Apex: Batch Apex, Queueable Apex, scheduled Apex, and future methods. To check how many asynchronous Apex executions are available, make a request to REST API limits resource. See [List Organization Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_limits.htm "HTML (New Window)") in the [REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/ "HTML (New Window)"). If the number of asynchronous Apex executions needed by a job exceeds the available number that’s calculated using the 24-hour rolling limit, an exception is thrown. Batch Apex preemptively checks the required asynchronous job capacity when Database.executeBatch is called and the start method has returned the workload. The batch won’t start unless there is sufficient capacity for the entire job available. For example, if the batch requires 10,000 executions and the remaining asynchronous limit is 9,500 executions, an AsyncApexExecutions Limit exceeded exception is thrown, and the remaining executions are left unchanged. The license types that count toward this limit include full Salesforce and Salesforce Platform user licenses, App Subscription user licenses, Chatter Only users, Identity users, and Company Communities users.
-   A maximum of 50 million records can be returned in the Database.QueryLocator object. If more than 50 million records are returned, the batch job is immediately terminated and marked as Failed.
-   If the start method of the batch class returns a QueryLocator, the optional scope parameter of Database.executeBatch can have a maximum value of 2,000. If set to a higher value, Salesforce chunks the records returned by the QueryLocator into smaller batches of up to 2,000 records. If the start method of the batch class returns an iterable, the scope parameter value has no upper limit. However, if you use a high number, you can run into other limits. The optimal scope size is a factor of 2000, for example, 100, 200, 400 and so on.
-   If no size is specified with the optional scope parameter of Database.executeBatch, Salesforce chunks the records returned by the start method into batches of 200 records. The system then passes each batch to the execute method. Apex governor limits are reset for each execution of execute.
-   The start, execute, and finish methods can implement up to 100 callouts each.
-   Only one batch Apex job's start method can run at a time in an org. Batch jobs that haven’t started yet remain in the queue until they're started. This limit doesn’t cause any batch job to fail and execute methods of batch Apex jobs still run in parallel if more than one job is running.
-   Enqueued batch Apex jobs are processed when system resources become available. There’s no guarantee on how long it takes to start, execute, and finish the queued jobs. You can use the Apex flex queue to prioritize jobs.
-   Using FOR UPDATE in SOQL queries to lock records during update isn’t applicable to Batch Apex.
-   Database.QueryLocator objects and related query results are available for 2 days, including results in nested queries. For more information, see [API Query Cursor Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_apicursors.htm).

## Batch Apex Considerations and Best Practices

-   Use extreme caution if you’re planning to invoke a batch job from a trigger. You must be able to guarantee that the trigger doesn’t add more batch jobs than the limit. In particular, consider API bulk updates, import wizards, mass record changes through the user interface, and all cases where more than one record can be updated at a time.
-   When you call Database.executeBatch, Salesforce only places the job in the queue. Actual execution can be delayed based on service availability and flex queue priority.
-   When testing your batch Apex, you can test only one execution of the execute method. Use the scope parameter of the executeBatch method to limit the number of records passed into the execute method to ensure that you aren’t running into governor limits.
-   The executeBatch method starts an asynchronous process. When you test batch Apex, make certain that the asynchronously processed batch job is finished before testing against the results. Use the Test methods startTest and stopTest around the executeBatch method to ensure that it finishes before continuing your test.
-   Use Database.Stateful with the class definition if you want to share instance member variables or data across job transactions. Otherwise, all member variables are reset to their initial state at the start of each transaction.
-   Methods declared as future aren’t allowed in classes that implement the Database.Batchable interface.
-   Methods declared as future can’t be called from a batch Apex class.
-   When a batch Apex job is run, email notifications are sent to the user who submitted the batch job. If the code is included in a managed package and the subscribing org is running the batch job, notifications are sent to the recipient listed in the Apex Exception Notification Recipient field.
-   Each method execution uses the standard governor limits anonymous block, Visualforce controller, or WSDL method.
-   Each batch Apex invocation creates an AsyncApexJob record. To construct a SOQL query to retrieve the job’s status, number of errors, progress, and submitter, use the AsyncApexJob record’s ID. For more information about the AsyncApexJob object, see [AsyncApexJob](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_asyncapexjob.htm "HTML (New Window)") in the Object Reference for Salesforce.
-   For each 10,000 AsyncApexJob records, Apex creates an AsyncApexJob record of type BatchApexWorker for internal use. When querying for all AsyncApexJob records, we recommend that you filter out records of type BatchApexWorker using the JobType field. Otherwise, the query returns one more record for every 10,000 AsyncApexJob records. For more information about the AsyncApexJob object, see [AsyncApexJob](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_asyncapexjob.htm "HTML (New Window)") in the Object Reference for Salesforce.
-   All implemented Database.Batchable interface methods must be defined as public or global.
-   For a sharing recalculation, we recommend that the execute method delete and then re-create all Apex managed sharing for the records in the batch. This process ensures that sharing is accurate and complete.
-   Batch jobs queued before a Salesforce service maintenance downtime remain in the queue. After service downtime ends and when system resources become available, the queued batch jobs are executed. If a batch job is running when downtime occurred, the batch execution is rolled back and restarted after the service comes back up. Because execute methods can therefore run multiple times, any non-transactional operations, such as callouts, can be retried. All non-transactional operations must follow [Idempotent Design Considerations](https://developer.salesforce.com/docs/atlas.en-us.260.0.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_remote_process_invocation_state.htm#idempotent_design_header) to maintain data integrity.
-   Minimize the number of batches, if possible. Salesforce uses a queue-based framework to handle asynchronous processes from such sources as future methods and batch Apex. This queue is used to balance request workload across organizations. If more than 2,000 unprocessed requests from a single organization are in the queue, any additional requests from the same organization are delayed while the queue handles requests from other organizations.
-   Salesforce recommends that you design your asynchronous Apex jobs to handle variations in processing time. For example, to handle potential processing overlaps, consider [chaining batch jobs](#batch_apex_chaining_section) instead of scheduling jobs at fixed intervals.
-   Ensure that batch jobs execute as fast as possible. To ensure fast execution of batch jobs, minimize Web service callout times and tune the queries used in your batch Apex code. The longer the batch job executes, the more likely other queued jobs are delayed when many jobs are in the queue.
-   If you use batch Apex with Database.QueryLocator to access external objects via an OData adapter for Salesforce Connect:

    -   Enable Request Row Counts on the external data source, and each response from the external system must include the total row count of the result set.
    -   We recommend enabling Server-Driven Pagination on the external data source and having the external system determine page sizes and batch boundaries for large result sets. Typically, server-driven paging can adjust batch boundaries to accommodate changing datasets more effectively than client-driven paging.

        When Server-Driven Pagination is disabled on the external data source, the OData adapter controls the paging behavior (client-driven). If external object records are added to the external system while a job runs, other records can be processed twice. If external object records are deleted from the external system while a job runs, other records can be skipped.

    -   When Server-Driven Pagination is enabled on the external data source, the batch size at runtime is the smaller of these two sizes:
        -   Batch size specified in the scope parameter of Database.executeBatch. The default is 200 records.
        -   Page size returned by the external system. We recommend that you set up your external system to return page sizes of 200 or fewer records.
-   Batch Apex jobs run faster when the start method returns a QueryLocator object that doesn't include related records via a subquery. Avoiding relationship subqueries in a QueryLocator allows batch jobs to run using a faster, chunked implementation. If the start method returns an iterable or a QueryLocator object with a relationship subquery, the batch job uses a slower, non-chunking, implementation. For example, if this query is used in the QueryLocator, the batch job uses a slower implementation because of the relationship subquery:

    ```

    ```

    A better strategy is to perform the subquery separately, from within the execute method, which allows the batch job to run using the faster, chunking implementation.
-   To implement record locking as part of the batch job, you can requery records inside the execute method, using FOR UPDATE. Requerying records in this manner ensures that conflicting updates aren’t overwritten by DML in the batch job. To requery records, simply select the Id field in the batch job's main query locator.
-   The Salesforce Platform's flow control mechanism and fair-usage algorithm can cause a delay in running batch jobs.

## Chaining Batch Jobs

Starting with API version 26.0, you can start another batch job from an existing batch job to chain jobs together. Chaining enforces strict sequential execution, ensuring that one job fully completes before the next one starts. This sequencing prevents situations where multiple batch jobs attempt to concurrently process the same records, which can lead to race conditions or data inconsistencies. Use chained batch jobs if you require sequential execution and batch processing, such as processing large data volumes. Otherwise, if batch processing isn’t needed, consider using [Queueable Apex](atlas.en-us.apexcode.meta/apexcode/apex_queueing_jobs.htm "Take control of your asynchronous Apex processes by using the Queueable interface. Salesforce recommends that you use Queueable Apex instead of Apex future methods. Queueables have the same use cases as future methods but offer extra benefits, including job IDs, support for non-primitive types, and job chaining.").

You can chain a batch job by calling Database.executeBatch or System.scheduleBatch from the finish method of the current batch class. The new batch job starts after the current batch job finishes.

A potential failure point in chained batch jobs is an unhandled exception within the job’s finish method. The unhandled exception prevents the next job from being enqueued and breaks the sequence. To safeguard against this point of failure, consider implementing a separate scheduled Apex job that periodically checks the status of the chain. The scheduled job queries the AsyncApexJob object for records where the JobType is 'BatchApex' and the ApexClass.Name matches the class expected to be currently running or queued within the chain. If this query returns no results, the expected job is neither running nor queued, which signifies that the chain has been unexpectedly interrupted. The scheduled job then restarts the entire batch chain, which prevents unprocessed records from accumulating and possibly reaching governor limits.

When creating a long chain of batch jobs, account for workload variations. If there's currently no further work to perform either in the current job’s finish method or because your business is entering an off-peak period, use System.scheduleBatch to add a delay before the execution of next chained batch job. This delay optimizes the usage of available batch jobs and the flex queue by preventing jobs that don't have any work from repeatedly starting.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

For API version 25.0 and earlier, you can’t call Database.executeBatch or System.scheduleBatch from any batch Apex method.

The API version that’s used is the version of the running batch class that starts or schedules another batch job. If the finish method in the running batch class calls a method in a helper class to start the next batch job, the API version of the helper class doesn’t matter.

#### See Also

-   [*Apex Reference Guide*: Batchable Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_database_batchable.htm "Apex Reference Guide: Batchable Interface - HTML (New Window)")

-   [*Apex Reference Guide*:FlexQueue Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_FlexQueue.htm "Apex Reference Guide:FlexQueue Class - HTML (New Window)")

-   [*Apex Reference Guide*: Test.enqueueBatchJobs()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_test.htm "Apex Reference Guide: Test.enqueueBatchJobs() - HTML (New Window)")

-   [*Apex Reference Guide*: Test.getFlexQueueOrder()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_test.htm "Apex Reference Guide: Test.getFlexQueueOrder() - HTML (New Window)")

-   [*Salesforce Help*: Client-driven and Server-driven Paging for Salesforce Connect—OData 2.0 and 4.0 Adapters](https://help.salesforce.com/articleView?id=odata_paging.htm&language=en_US "Salesforce Help: Client-driven and Server-driven Paging for
    Salesforce Connect—OData 2.0 and 4.0 Adapters - HTML (New Window)")

-   [*Salesforce Help*: Define an External Data Source for Salesforce Connect—OData 2.0 or 4.0 Adapter](https://help.salesforce.com/articleView?id=platform_connect_add_external_data_source.htm&language=en_US "Salesforce Help: Define an External Data Source for
    Salesforce Connect—OData 2.0 or 4.0 Adapter - HTML (New Window)")

## Code Examples

```apex
public (Database.QueryLocator | Iterable<sObject>) start(Database.BatchableContext bc) {}
```

```apex
public void execute(Database.BatchableContext bc, list<P>){}
```

```apex
public void finish(Database.BatchableContext bc){}
```

```apex
public void finish(Database.BatchableContext bc){
   // Get the ID of the AsyncApexJob representing this batch job
   // from Database.BatchableContext.
   // Query the AsyncApexJob object to retrieve the current job's information.
   AsyncApexJob a = [SELECT Id, Status, NumberOfErrors, JobItemsProcessed,
      TotalJobItems, CreatedBy.Email
      FROM AsyncApexJob WHERE Id =
      :bc.getJobId() WITH USER_MODE];
   // Send an email to the Apex job's submitter notifying of job completion.
   Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
   String[] toAddresses = new String[] {a.CreatedBy.Email};
   mail.setToAddresses(toAddresses);
   mail.setSubject('Apex Sharing Recalculation ' + a.Status);
   mail.setPlainTextBody
   ('The batch Apex job processed ' + a.TotalJobItems +
   ' batches with '+ a.NumberOfErrors + ' failures.');
   Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
}
```

```apex
public with sharing class SearchAndReplace implements Database.Batchable<sObject>{

   public final String Query;
   public final String Entity;
   public final String Field;
   public final String Value;

   public SearchAndReplace(String q, String e, String f, String v){

      Query=q; Entity=e; Field=f;Value=v;
   }

   public Database.QueryLocator start(Database.BatchableContext bc){
      return Database.getQueryLocator(query, AccessLevel.USER_MODE);
   }

   public void execute(Database.BatchableContext bc, List<sObject> scope){
     for(sobject s : scope){
     s.put(Field,Value); 
     }
     update as user scope;
    }

   public void finish(Database.BatchableContext bc){
   }
}
```

## Related Topics

- callout (atlas.en-us.apexcode.meta/apexcode/apex_callouts.htm)
- Queueable Apex (atlas.en-us.apexcode.meta/apexcode/apex_queueing_jobs.htm)
