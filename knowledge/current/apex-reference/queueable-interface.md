---
title: "Queueable Interface"
domain: apex-reference
topic: queueable-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.734Z
estimatedTokens: 957
namespace: System
keywords: [Queueable, asynchronous, execution, Apex, jobs, monitored, Usage, execute, context, Implementation, Testing]
---

# Queueable Interface

> Enables the asynchronous execution of Apex jobs that can be
            monitored.

**Namespace:** `System`

# Queueable Interface

Enables the asynchronous execution of Apex jobs that can be monitored.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

To execute Apex as an asynchronous job, implement the Queueable interface and add the processing logic in your implementation of the execute method.

To implement the Queueable interface, you must first declare a class with the implements keyword as follows:

```

```

Next, your class must provide an implementation for the following method:

```

```

Your class and method implementation must be declared as public or global.

To submit your class for asynchronous execution, call the System.enqueueJob by passing it an instance of your class implementation of the Queueable interface as follows:

```

```

-   **[Queueable Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_Queueable.htm#apex_System_Queueable_methods)**

-   **[Queueable Example Implementation](atlas.en-us.apexref.meta/apexref/apex_class_System_Queueable.htm#apex_Queueable_example)**


#### See Also

-   [*Apex Developer Guide*: Queueable Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_queueing_jobs.htm "Apex Developer Guide: Queueable Apex - HTML (New Window)")


## Queueable Methods

The following are methods for Queueable.

-   **[execute(context)](atlas.en-us.apexref.meta/apexref/apex_class_System_Queueable.htm#apex_System_Queueable_execute)**
    Executes the queueable job.

### execute(context)

Executes the queueable job.

#### Signature

public void execute(QueueableContext context)

#### Parameters

context

Type: [QueueableContext](atlas.en-us.apexref.meta/apexref/apex_interface_system_queueablecontext.htm#apex_interface_system_queueablecontext "Represents the parameter type of the execute() method in a class that implements the Queueable interface and contains the job ID. This interface is implemented internally by Apex.")

Contains the job ID.

#### Return Value

Type: Void

## Queueable Example Implementation

This example is an implementation of the Queueable interface. The execute method in this example inserts a new account.

```

```

To add this class as a job on the queue, call this method:

```

```

After you submit your queueable class for execution, the job is added to the queue and will be processed when system resources become available. You can monitor the status of your job programmatically by querying AsyncApexJob or through the user interface in Setup by entering Apex Jobs in the Quick Find box, then selecting **Apex Jobs**.

To query information about your submitted job, perform a SOQL query on AsyncApexJob by filtering on the job ID that the System.enqueueJob method returns. This example uses the jobID variable that was obtained in the previous example.

```

```

Similar to future jobs, queueable jobs don’t process batches, and so the number of processed batches and the number of total batches are always zero.

### Testing Queueable Jobs

This example shows how to test the execution of a queueable job in a test method. A queueable job is an asynchronous process. To ensure that this process runs within the test method, the job is submitted to the queue between the Test.startTest and Test.stopTest block. The system executes all asynchronous processes started in a test method synchronously after the Test.stopTest statement. Next, the test method verifies the results of the queueable job by querying the account that the job created.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

The ID of a queueable Apex job isn’t returned in test context—System.enqueueJob returns null in a running test.

## Code Examples

```apex
public class MyQueueableClass implements Queueable {
```

```apex
public void execute(QueueableContext context) {
    // Your code here
}
```

```apex
ID jobID = System.enqueueJob(new MyQueueableClass());
```

```apex
public class AsyncExecutionExample implements Queueable {
    public void execute(QueueableContext context) {
        Account a = new Account(Name='Acme',Phone='(415) 555-1212');
        insert a;        
    }
}
```

```apex
ID jobID = System.enqueueJob(new AsyncExecutionExample());
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- Queueable Methods (atlas.en-us.apexref.meta/apexref/apex_class_System_Queueable.htm)
- Queueable Example Implementation (atlas.en-us.apexref.meta/apexref/apex_class_System_Queueable.htm)
- execute(context) (atlas.en-us.apexref.meta/apexref/apex_class_System_Queueable.htm)
- QueueableContext (atlas.en-us.apexref.meta/apexref/apex_interface_system_queueablecontext.htm)
