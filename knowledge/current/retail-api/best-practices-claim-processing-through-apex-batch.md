---
title: "Best Practices: Claim Processing Through Apex Batch"
domain: retail-api
topic: best-practices-claim-processing-through-apex-batch
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:41.035Z
estimatedTokens: 731
keywords: [Best, Practices, Claim, Processing, Apex, Batch, processes, Consumer, Goods, Cloud, Trade, Promotion, Management, TPM, user]
---

# Best Practices: Claim Processing Through Apex Batch

> Claim processes in Consumer Goods Cloud Trade Promotion Management (TPM) is done through
  user interface.

# Best Practices: Claim Processing Through Apex Batch

Claim processes in Consumer Goods Cloud Trade Promotion Management (TPM) is done through user interface.

However, if there are a large number of claims, then it is necessary to process claims in batches. In TPM, Apex batches are used to process a large number of claims.

## Considerations for Apex Batch Processing

An Apex Batch class implements three methods:

-   start
    -   Defines the scope of the apex batch. This method returns every record that the Apex Batch processes.
    -   The result is partitioned into lists of up to <batchsize> records.
    -   The object cgcloud\_\_Payment\_\_c records are selected and returned.
-   execute
    -   Processes one of the lists of items provided by the start method.
    -   Here the main logic of the Apex Batch is executed.
    -   This method is called for each partition.
-   finish
    -   Used to finalize monitoring and cleanup resources, if any, that are not automatically closed.

## Define Batch Scope

Method: List<sObject>/QueryLocator start(BatchableContext)

-   Avoid adding system internal fields to the list of selected fields for the claims to select. For example, fields used for Version Handling. Fields that should be excluded are:
    -   cgcloud\_\_Version\_\_c
    -   cgcloud\_\_Offplatform\_Version\_\_c
    -   cgcloud\_\_Skip\_Version\_Update\_\_c
-   This hint is not only relevant for claim processing, but also for the processing of other versioned objects.
    -   cgcloud\_\_Promotion\_\_c

    -   cgcloud\_\_Account\_Plan\_\_c (a.k.a. CBP)

    -   Assortment


## Manipulating Claims

Method: execute(BatchableContext, List<SObject>)

-   If payments are updated with the batch, avoid using the scoped record instance. Instead, create a new object instance where only the fields are set that identify the record (id field) and needs to be updated.
-   This prevents an accidental overwrite of fields that are outdated. For example, if the field is managed and set by a trigger such as version fields.

## Calculating Claims

Method: execute(BatchableContext, List<sObject>), finish(BatchableContext)

-   The automatic claim calculation through trigger is not considered when payments are updated in a Batch Context. The payments must be scheduled directly through a callout.
-   If claims should be calculated within a batch that also manipulates the claim, the claim calculation must not rely on a version that was previously loaded. For example, by the start method.
    -   The Scheduling of the Calculation must be executed in a queueable or future method and not in the same transaction because callout after DML statements are not allowed.

    -   Before a payment calculation is scheduled, reload the version to get the current value.

-   If the batch only schedules payments for calculation and does not update the claim, then load the version field into the scope.
