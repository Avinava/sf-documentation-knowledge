---
title: "Queueable Apex"
domain: apex-guide
topic: queueable-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.891Z
estimatedTokens: 3018
keywords: [Queueable, Apex, Take, control, asynchronous, processes, Salesforce, recommends, instead, future, Queueables, cases, offer, extra, benefits]
---

# Queueable Apex

> Take control of your asynchronous Apex processes by using the
            Queueable interface. Salesforce recommends that
        you use Queueable Apex instead of Apex future methods. Queueables have the same use cases as
        future methods but offer extra benefits, including job IDs, support for non-primitive types,
        and job chaining.

# Queueable Apex

Take control of your asynchronous Apex processes by using the Queueable interface. Salesforce recommends that you use Queueable Apex instead of Apex future methods. Queueables have the same use cases as future methods but offer extra benefits, including job IDs, support for non-primitive types, and job chaining.

Apex processes that run for a long time, such as extensive database operations or external web service callouts, can be run asynchronously by implementing the Queueable interface and adding a job to the Apex job queue. In this way, your asynchronous Apex job runs in the background in its own thread and doesn’t delay the execution of your main Apex logic. Each queued job runs when system resources become available. A benefit of using the Queueable interface methods is that some governor limits are higher than for synchronous Apex, such as heap size limits.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

If an Apex transaction rolls back, any queueable jobs queued for execution by the transaction aren’t processed.

Queueable jobs are similar to future methods in that they’re both queued for execution, but they provide you with these additional benefits.

-   Getting an ID for your job: When you submit your job by invoking the System.enqueueJob method, the method returns the ID of the new job. This ID corresponds to the ID of the AsyncApexJob record. Use this ID to identify and monitor your job, either through the Salesforce UI (Apex Jobs page), or programmatically by querying your record from AsyncApexJob.
-   Using non-primitive types: Your queueable class can contain member variables of non-primitive data types, such as sObjects or custom Apex types. Those objects can be accessed when the job executes.
-   Chaining jobs: You can chain one job to another job by starting a second job from a running job. Chaining jobs is useful if your process depends on another process to have run first.

You can set a maximum stack depth of chained Queueable jobs, overriding the default limit of five in Developer and Trial Edition organizations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Variables that are declared transient are ignored by serialization and deserialization and the value is set to null in Queueable Apex.

## Adding a Queueable Job to the Asynchronous Execution Queue

This example implements the Queueable interface. The execute method in this example inserts a new account. The System.enqueueJob(queueable) method is used to add the job to the queue.

```

```

To add this class as a job on the queue, call this method:

```

```

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

When you call System.enqueueJob, Salesforce adds the process to the queue. Actual execution can be delayed based on service availability.

After you submit your queueable class for execution, the job is added to the queue and will be processed when system resources become available. You can monitor the status of your job programmatically by querying AsyncApexJob or through the user interface in Setup by entering Apex Jobs in the Quick Find box, then selecting **Apex Jobs**.

To query information about your submitted job, perform a SOQL query on AsyncApexJob by filtering on the job ID that the System.enqueueJob method returns. This example uses the jobID variable that was obtained in the previous example.

```

```

Similar to future jobs, queueable jobs don’t process batches, and so the number of processed batches and the number of total batches are always zero.

## Adding a Queueable Job with a Specified Minimum Delay

Use the System.enqueueJob(queueable, delay) method to add queueable jobs to the asynchronous execution queue with a specified minimum delay (0–10 minutes). The delay is ignored during Apex testing.

See [System.enqueueJob(queueable, delay)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_enqueueJob_2 "HTML (New Window)") in the Apex Reference Guide.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexcode)

#### Warning

When you set the delay to 0 (zero), the queueable job is run as quickly as possible. With chained queueable jobs, implement a mechanism to slow down or halt the job if necessary. Without such a fail-safe mechanism in place, you can rapidly reach the daily async Apex limit.

In the following cases, it would be beneficial to adjust the timing before the queueable job is run.

-   If the external system is rate-limited and can be overloaded by chained queueable jobs that are making rapid callouts.
-   When polling for results, and executing too fast can cause wasted usage of the daily async Apex limits.

This example adds a job for delayed asynchronous execution by passing in an instance of your class implementation of the Queueable interface for execution. There’s a minimum delay of 5 minutes before the job is executed.

```

```

Admins can define a default org-wide delay (1–600 seconds) in scheduling queueable jobs that were scheduled without a delay parameter. Use the delay setting as a mechanism to slow default queueable job execution. If the setting is omitted, Apex uses the standard queueable timing with no added delay.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Using the System.enqueueJob(queueable, delay) method ignores any org-wide enqueue delay setting.

Define the org-wide delay in one of these ways.

-   From Setup, in the Quick Find box, enter Apex Settings, and then enter a value (1–600 seconds) for **Default minimum enqueue delay (in seconds) for queueable jobs that do not have a delay parameter**
-   To enable this feature programmatically with Metadata API, see [ApexSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_apexsettings.htm) in the Metadata API Developer Guide.

## Adding a Queueable Job with a Specified Stack Depth

Use the System.enqueueJob(queueable, asyncOptions) method where you can specify the maximum stack depth and the minimum queue delay in the asyncOptions parameter.

The [System.AsyncInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_AsyncOptions.htm "HTML (New Window)") class properties contain the current and maximum stack depths and the minimum queueable delay.

The [System.AsyncInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_AsyncInfo.htm "HTML (New Window)") class has methods to help you determine if maximum stack depth is set in your Queueable request and to get the stack depths and queue delay for your queueables that are currently running. Use information about the current queueable execution to make decisions on adjusting delays on subsequent calls.

These are methods in the System.AsyncInfo class.

-   hasMaxStackDepth()
-   getCurrentQueueableStackDepth()
-   getMaximumQueueableStackDepth()
-   getMinimumQueueableDelayInMinutes()

This example uses stack depth to terminate a chained job and prevent it from reaching the daily maximum number of asynchronous Apex method executions.

```

```

## Testing Queueable Jobs

This example shows how to test the execution of a queueable job in a test method. A queueable job is an asynchronous process. To make sure that this process runs within the test method, the job is submitted to the queue between the Test.startTest and Test.stopTest block. The system executes all asynchronous processes started in a test method synchronously after the Test.stopTest statement. Next, the test method verifies the results of the queueable job by querying the account that the job created.

```

```

## Chaining Jobs

To run a job after some other processing is done first by another job, you can chain queueable jobs. To chain a job to another job, submit the second job from the execute() method of your queueable class. You can add only one job from an executing job, which means that only one child job can exist for each parent job. For example, if you have a second class called SecondJob that implements the Queueable interface, you can add this class to the queue in the execute() method as follows:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Apex allows HTTP and web service callouts from queueable jobs, if they implement the Database.AllowsCallouts marker interface. In queueable jobs that implement this interface, callouts are also allowed in chained queueable jobs.

You can test chained queueable jobs by using appropriate stack depths, but be aware of applicable Apex governor limits. See [Adding a Queueable Job with a Specified Stack Depth](#QueueablesStackDepth).

## Queueable Apex Limits

-   The execution of a queued job counts one time against the shared limit for asynchronous Apex method executions. See [Lightning Platform Apex Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.").
-   You can add up to 50 jobs to the queue with System.enqueueJob in a single transaction. In asynchronous transactions (for example, from a batch Apex job), you can add only one job to the queue with System.enqueueJob. To check how many queueable jobs have been added in one transaction, call [Limits.getQueueableJobs()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_limits.htm).
-   Because no limit is enforced on the depth of chained jobs, you can chain one job to another. You can repeat this process with each new child job to link it to a new child job. For Developer Edition and Trial organizations, the maximum stack depth for chained jobs is 5, which means that you can chain jobs four times. The maximum number of jobs in the chain is 5, including the initial parent queueable job.
-   When chaining jobs with System.enqueueJob, you can add only one job from an executing job. Only one child job can exist for each parent queueable job. Starting multiple child jobs from the same queueable job isn’t supported.

-   **[Detecting Duplicate Queueable Jobs](atlas.en-us.apexcode.meta/apexcode/apex_dedupe_queueable.htm)**
    Reduce resource contention and race conditions by enqueuing only a single instance of your async Queueable job based on its signature. Attempting to add more than one Queueable job to the processing queue with the same signature results in a DuplicateMessageException when you try to enqueue subsequent jobs.
-   **[Transaction Finalizers](atlas.en-us.apexcode.meta/apexcode/apex_transaction_finalizers.htm)**
    The Transaction Finalizers feature enables you to attach actions, using the System.Finalizer interface, to asynchronous Apex jobs that use the Queueable framework. A specific use case is to design recovery actions when a Queueable job fails.
-   **[Transaction Finalizers Error Messages](atlas.en-us.apexcode.meta/apexcode/apex_transaction_finalizers_error_messages.htm)**
    Troubleshoot both semantic and run-time issues by analyzing these error messages.

#### See Also

-   [*Apex Reference Guide*: Queueable Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_Queueable.htm "Apex Reference Guide: Queueable Interface - HTML (New Window)")

-   [*Apex Reference Guide*: QueueableContext Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_system_queueablecontext.htm "Apex Reference Guide: QueueableContext Interface - HTML (New Window)")

## Code Examples

```apex
public with sharing class AsyncExecutionExample implements Queueable {
    public void execute(QueueableContext context) {
        Account a = new Account(Name='Acme',Phone='(415) 555-1212');
        insert as user a;        
    }
}
```

```apex
ID jobID = System.enqueueJob(new AsyncExecutionExample());
```

```
AsyncApexJob jobInfo = [SELECT Status,NumberOfErrors FROM AsyncApexJob WHERE Id = :jobID WITH USER_MODE];
```

```apex
Integer delayInMinutes = 5;
ID jobID = System.enqueueJob(new MyQueueableClass(), delayInMinutes);
```

```apex
// Fibonacci
public with sharing class FibonacciDepthQueueable implements Queueable {
   
    private long nMinus1, nMinus2;
       
    public static void calculateFibonacciTo(integer depth) {
        AsyncOptions asyncOptions = new AsyncOptions();
        asyncOptions.MaximumQueueableStackDepth = depth;
        System.enqueueJob(new FibonacciDepthQueueable(null, null), asyncOptions);
    }
       
    private FibonacciDepthQueueable(long nMinus1param, long nMinus2param) {
        nMinus1 = nMinus1param;
        nMinus2 = nMinus2param;
    }
   
    public void execute(QueueableContext context) {
       
        integer depth = AsyncInfo.getCurrentQueueableStackDepth();
       
        // Calculate step
        long fibonacciSequenceStep;
        switch on (depth) {
            when 1, 2 {
                fibonacciSequenceStep = 1;
            }
            when else {
                fibonacciSequenceStep = nMinus1 + nMinus2;
            }
        }
       
        System.debug('depth: ' + depth + ' fibonacciSequenceStep: ' + fibonacciSequenceStep);
       
        if(System.AsyncInfo.hasMaxStackDepth() &&
           AsyncInfo.getCurrentQueueableStackDepth() >= 
           AsyncInfo.getMaximumQueueableStackDepth()) {
            // Reached maximum stack depth
            Fibonacci__c result = new Fibonacci__c(
                Depth__c = depth,
                Result = fibonacciSequenceStep
                );
            insert as user result;
        } else {
            System.enqueueJob(new FibonacciDepthQueueable(fibonacciSequenceStep, nMinus1));
        }
    }
}
```

## Related Topics

- Lightning Platform Apex Limits (atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm)
- Detecting Duplicate Queueable Jobs (atlas.en-us.apexcode.meta/apexcode/apex_dedupe_queueable.htm)
- Transaction Finalizers (atlas.en-us.apexcode.meta/apexcode/apex_transaction_finalizers.htm)
- Transaction Finalizers Error Messages (atlas.en-us.apexcode.meta/apexcode/apex_transaction_finalizers_error_messages.htm)
