---
title: "Checking the Status of a Task"
domain: daas
topic: checking-the-status-of-a-task
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:24.052Z
estimatedTokens: 377
keywords: [Checking, Status, Task, Ant, Migration, Tool, retired, Spring, ’24, continues, function, future, API, versions, isn’t]
---

# Checking the Status of a Task

> The Ant Migration Tool is retired with Spring ’24. The tool continues to
    function for future API versions but isn’t updated with new functionality and isn’t supported.
    To manage metadata changes, switch to Salesforce CLI for a modern, supported developer
    experience.

# Checking the Status of a Task

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

When you run a target, the Ant Migration Tool outputs the request ID for each deploy or retrieve task included in the target. You can use the request ID to check the status of a deploy or retrieve task. This is particularly useful if a client is running for a long time and there is a network issue that breaks the connectivity between the Ant Migration Tool on your machine and Salesforce.

To check the status of a run target, use the following command:

```

```

Use the requestID that was printed out when you ran the target. For example, if you run the deployZip target, you can run the following command to check the status of the retrieval:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

You should not use this command with targets that contain multiple retrieve or deploy tasks. You should not use this command with the bulkRetrieve task also as this task batches retrievals in multiple requests.

To track the status of deployments from within Salesforce, from Setup, enter Deployment in the Quick Find box, then select **Deployment Status**.

## Code Examples

```
ant -Dsf.asyncRequestId=requestID targetName
```

```
ant -Dsf.asyncRequestId=04sx00000002aGuAAI deployZip
```
