---
title: "Commit Job Scheduling Transaction"
domain: retail-api
topic: commit-job-scheduling-transaction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.825Z
estimatedTokens: 114
keywords: [Commit, Job, Scheduling, Transaction, Explicitly, open, chain]
---

# Commit Job Scheduling Transaction

> Explicitly commit an open scheduling transaction for a job in a job
      chain.

# Commit Job Scheduling Transaction

Explicitly commit an open scheduling transaction for a job in a job chain.

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

```

```

## Code Examples

```
COMMIT_JOB_SCHEDULING_TRANSACTION
```

```
// name of the salesorg for which the hob should be scheduled
String salesOrg = '0001';
<namespace>.JobSchedulingCommitCallout callout = new <namespace>.JobSchedulingCommitCallout(salesOrg);

// Log Transaction Id
String txId = <namespace>.TransactionHandler.getTransactionIdentifier();

// Job object
<namespace>.Job job = new <namespace>.Job();
job.JobChainName = 'TPM_Calculation_Chain_<timestamp>';
job.JobName = 'PromotionCalculation';

<namespace>.OffplatformCalloutResponse response = callout.execute(txId, job);

if (response.status != 200) {
   // Handle error
}
```
