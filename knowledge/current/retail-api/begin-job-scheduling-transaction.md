---
title: "Begin Job Scheduling Transaction"
domain: retail-api
topic: begin-job-scheduling-transaction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.821Z
estimatedTokens: 266
keywords: [Begin, Job, Scheduling, Transaction, chain]
---

# Begin Job Scheduling Transaction

> Begin a scheduling transaction for a job in a job chain.

# Begin Job Scheduling Transaction

Begin a scheduling transaction for a job in a job chain. The job either starts an open transaction (if the number of job items is not announced) that must be explicitly committed to, or communicates the expected number of job items to the off-platform system.

Optionally, a scheduling timeout between 30 seconds and 15 minutes can be specified. The default is 5 minutes. This is the time when the scheduling processes must provide the job items. Timeout is calculated from the last time job items were added to the transaction.

Resource

```

```

Available version

55.0

Request Parameters

| Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| jobChain | String | ID of the job chain record. | Required |
| jobId | String | ID of the job record for which scheduling transaction is to be started. | Required |

Apex Request Example

PromotionImport is used when you schedule a top promotion by grouping the imported promotions.

```

```

Generic is used in the calculation chain flow.

```

```

## Code Examples

```
BEGIN_JOB_SCHEDULING_TRANSACTION
```

```
<namespace>.BeginPromotionImportCallout callout = new <namespace>.BeginPromotionImportCallout();

// Import Id, the promotion import is grouped under this ID
String importId = '12345678-1234-1234-1234-123456789012'; 
// Number of promotions to be imported
Integer nrOfItems = 100;
// Timeout in seconds: number of seconds between two schedule promotion callouts
// for this import
Integer timeout = 400;

<namespace>.OffplatformCalloutResponse response = callout.execute(importId, nrOfItems, timeout);

if (response.status != 200) {
   // Handle error
}
```

```
// name of the salesorg for which the job must be scheduled
String salesOrg = '0001';
<namespace>.JobSchedulingBeginCallout callout = new <namespace>.JobSchedulingBeginCallout(salesOrg);

// Log Transaction Id
String txId = <namespace>.TransactionHandler.getTransactionIdentifier();

// Job object
<namespace>.Job job = new <namespace>.Job();
job.JobChainName = 'TPM_Calculation_Chain_<timestamp>';
job.JobName = 'PromotionCalculation';

// Timeout in seconds: number of seconds between two schedule promotion callouts
// for this import
Integer timeout = 350;

<namespace>.OffplatformCalloutResponse response = callout.execute(txId, job, timeout);

if (response.status != 200) {
   // Handle error
}
```
