---
title: "Schedule Rate Based Funding Calculation"
domain: retail-api
topic: schedule-rate-based-funding-calculation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.880Z
estimatedTokens: 107
keywords: [Schedule, Rate, Funding, Calculation, Schedules, collection, RBF, Objects]
---

# Schedule Rate Based Funding Calculation

> Schedules a collection of Rate Based Funding (RBF) Objects for
      calculation.

# Schedule Rate Based Funding Calculation

Schedules a collection of Rate Based Funding (RBF) Objects for calculation.

The calculation process creates conditions from the Rate Based Funding calculation results and write them to the account product measures storage. Some KPIs can also be written back to the Rate Based Funding Objects in Salesforce.

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
SCHEDULE_RATE_BASED_FUNDING_CALCULATION
```

```apex
String salesOrg = '0001'; // Sales Organization name
<namespace>.Job jobInstance = new <namespace>.Job();
Set<Id> rbfIds = new Set<Id>{'rbfId_1','rbfId_2'};//Ids from RBF records
jobInstance.JobChainName = 'TPM_Calculation_Chain_'+Datetime.now().getTime();
jobInstance.JobName = 'ScheduleRateBaseFundingJob';
jobInstance.JobModes = new List<String>{'MapCalculationResultsWithKpiMap','WritebackConditionRecords'}; 
List<cgcloud__Rate_Based_Funding__c> rbfs = new List<cgcloud__Rate_Based_Funding__c>([SELECT Id FROM cgcloud__Rate_Based_Funding__c WHERE Id IN :rbfIds]);
<namespace>.ScheduleRBFCalculationCallout callout = new <namespace>.ScheduleRBFCalculationCallout(salesOrg);
<namespace>.OffPlatformCalloutResponse response = callout.execute(
    <namespace>.TransactionHandler.getTransactionIdentifier(), 
    jobInstance, 
    rbfs
);
if (response.status != 200) {
    //Handle error
}
```
