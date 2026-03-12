---
title: "Schedule Fund Calculation"
domain: retail-api
topic: schedule-fund-calculation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.870Z
estimatedTokens: 68
keywords: [Schedule, Fund, Calculation, Enqueues, funds, batch]
---

# Schedule Fund Calculation

> Enqueues a given list of funds for batch calculation.

# Schedule Fund Calculation

Enqueues a given list of funds for batch calculation. The calculation result is transferred back to Salesforce via the KPI Upload once the calculation is finished.

Resource

```

```

Available version

55.0

Apex Request Example

```

```

## Code Examples

```
SCHEDULE_FUND_CALCULATION
```

```apex
// name of the salesorg for which the hob should be scheduled
String salesOrg = '0001';
<namespace>.ScheduleFundCalculationCallout callout = new <namespace>.ScheduleFundCalculationCallout(salesOrg);

// Log Transaction Id
String txId = <namespace>.TransactionHandler.getTransactionIdentifier();

// Job object
<namespace>.Job job = new <namespace>.Job();
job.JobChainName = 'TPM_Calculation_Chain_<timestamp>';
job.JobName = 'FundCalculation';
job.BatchChainType = 'default';

// Account Plans in Scope
List<cgcloud__Fund__c> fundsToCalculate = [
    SELECT Id FROM cgcloud__Fund__c 
    // WHERE cgcloud__Sales_Org__c = :salesOrg 
    // AND ... 
];

<namespace>.OffplatformCalloutResponse response = callout.execute(txId, job, fundsToCalculate);

if (response.status != 200) {
   // Handle error
}
```
