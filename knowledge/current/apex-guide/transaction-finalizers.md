---
title: "Transaction Finalizers"
domain: apex-guide
topic: transaction-finalizers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.690Z
keywords: [Transaction, Finalizers, System.Finalizer, Interface, System.FinalizerContext, Implementation, Details, Logging, Finalizer, Example, Retry, Queueable, Considerations, Best, Practices]
---

# Transaction Finalizers

# Transaction Finalizers

The Transaction Finalizers feature enables you to attach actions, using the System.Finalizer interface, to asynchronous Apex jobs that use the Queueable framework. A specific use case is to design recovery actions when a Queueable job fails.

The Transaction Finalizers feature provides a direct way for you to specify actions to be taken when asynchronous jobs succeed or fail. Before Transaction Finalizers, you could only take these two actions for asynchronous job failures:

-   Poll the status of AsyncApexJob using a SOQL query and re-enqueue the job if it fails
-   Fire BatchApexErrorEvents when a batch Apex method encounters an unhandled exception

With transaction finalizers, you can attach a post-action sequence to a Queueable job and take relevant actions based on the job execution result.

A Queueable job that failed due to an unhandled exception can be successively re-enqueued five times by a transaction finalizer. This limit applies to a series of consecutive Queueable job failures. The counter is reset when the Queueable job completes without an unhandled exception.

Finalizers can be implemented as an inner class. Also, you can implement both Queueable and Finalizer interfaces with the same class.

The Queueable job and the Finalizer run in separate Apex and Database transactions. For example, the Queueable can include DML, and the Finalizer can include REST callouts. Using a finalizer doesn’t count as an extra execution against your daily Async Apex limit. Synchronous governor limits apply for the Finalizer transaction, except in these cases where asynchronous limits apply:

-   Total heap size
-   Maximum number of Apex jobs added to the queue with System.enqueueJob
-   Maximum number of methods with the future annotation allowed per Apex invocation

For more information on governor limits, see [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.").

## System.Finalizer Interface

The System.Finalizer interface includes the execute method:

```

```

This method is called on the provided FinalizerContext instance for every enqueued job with a finalizer attached. Within the execute method, you can define the actions to be taken at the end of the Queueable job. An instance of System.FinalizerContext is injected by the Apex runtime engine as an argument to the execute method.

## System.FinalizerContext Interface

The System.FinalizerContext interface contains four methods.

-   getAsyncApexJobId method:
    
    ```
    
    ```
    
    Returns the ID of the Queueable job for which this finalizer is defined.
-   getRequestId method:
    
    ```
    
    ```
    
    Returns the request ID, a string that uniquely identifies the request, and can be correlated with Event Monitoring logs. To correlate with the AsyncApexJob table, use the getAsyncApexJobId method instead. The Queueable job and the Finalizer execution both share the (same) request ID.
-   getResult method:
    
    ```
    
    ```
    
    Returns the System.ParentJobResult enum, which represents the result of the parent asynchronous Apex Queueable job to which the finalizer is attached. The enum takes these values: SUCCESS, UNHANDLED\_EXCEPTION.
-   getException method:
    
    ```
    
    ```
    
    Returns the exception with which the Queueable job failed when getResult is UNHANDLED\_EXCEPTION, null otherwise.

Attach the finalizer to your Queueable jobs using the System.attachFinalizer method.

1.  Define a class that implements the System.Finalizer interface.
2.  Attach a finalizer within a Queueable job’s execute method. To attach the finalizer, invoke the System.attachFinalizer method, using as argument the instantiated class that implements the System.Finalizer interface.
    
    ```
    
    ```
    

## Implementation Details

-   Only one finalizer instance can be attached to any Queueable job.
-   You can enqueue a single asynchronous Apex job (Queueable, Future, or Batch) in the finalizer’s implementation of the execute method.
-   Callouts are allowed in finalizer implementations.
-   The Finalizer framework uses the state of the Finalizer object (if attached) at the end of Queueable execution. Mutation of the Finalizer state, after it’s attached, is therefore supported.
-   Variables that are declared transient are ignored by serialization and deserialization, and therefore don’t persist in the Transaction Finalizer.

## Logging Finalizer Example

This example demonstrates the use of Transaction Finalizers in logging messages from a Queueable job, regardless of whether the job succeeds or fails. The LoggingFinalizer class here implements both Queueable and Finalizer interfaces. The Queueable implementation instantiates the finalizer, attaches it, and then invokes the addLog() method to buffer log messages. The Finalizer implementation of LoggingFinalizer includes the addLog(message, source) method that allows buffering log messages from the Queueable job into finalizer's state. When the Queueable job completes, the finalizer instance commits the buffered log. The finalizer state is preserved even if the Queueable job fails, and can be accessed for use in DML in finalizer implementation or execution.

```

```

## Retry Queueable Example

This example demonstrates how to re-enqueue a failed Queueable job in its finalizer. It also shows that jobs can be re-enqueued up to a queueable chaining limit of 5 retries.

```

```

## Considerations

If a job request is terminated unexpectedly, such as a database shutdown during system upgrade, the transaction finalizer can fail to execute.

## Best Practices

We urge ISVs to exercise caution in using global Finalizers with state-mutating methods in packages. If a subscriber org’s implementation invokes such methods in the global Finalizer, it can result in unexpected behavior. Examine all state-mutating methods to see how they affect the finalizer state and overall behavior.