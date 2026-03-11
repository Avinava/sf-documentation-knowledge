---
title: "Queueable Example Implementation"
domain: apex-reference
topic: queueable-example-implementation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.500Z
keywords: [Queueable, Example, Implementation, Testing, Jobs, Note]
---

# Queueable Example Implementation

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