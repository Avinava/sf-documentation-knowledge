---
title: "Schedule Account Plan Calculation V2"
domain: retail-api
topic: schedule-account-plan-calculation-v2
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:36.861Z
estimatedTokens: 194
keywords: [Schedule, Account, Plan, Calculation, Schedules, plans]
---

# Schedule Account Plan Calculation V2

> Schedules the calculation of account plans.

# Schedule Account Plan Calculation V2

Schedules the calculation of account plans. Batch chains support editable account plans. It can schedule up to 500 account plan IDs for calculation.

Use this endpoint to calculate the Account Plan, which is handled by Customer Business Plans when creating a new project. See [Calculation of Account Plans](https://help.salesforce.com/s/articleView?id=ind.tpm_account_plan_calculation.htm&type=5&language=en_US "HTML (New Window)") and [Customer Business Plans](https://help.salesforce.com/s/articleView?id=ind.tpm_account_plan_cbp_parent.htm&type=5&language=en_US "HTML (New Window)").

Resource

```

```

Available version

55.0

Apex Request Example

**Baseline Plan Calculation**

```

```

**BusinessPlan Calculation**

```

```

## Code Examples

```
SCHEDULE_ACCOUNT_PLAN_CALCULATION_V2
```

```apex
// name of the salesorg for which the hob should be scheduled
String salesOrg = '0001';
<namespace>.ScheduleAccountPlanCalculationV2Callout callout = new <namespace>.ScheduleAccountPlanCalculationV2Callout(salesOrg);

// Log Transaction Id
String txId = <namespace>.TransactionHandler.getTransactionIdentifier();

// Job object
<namespace>.Job job = new <namespace>.Job();
job.JobChainName = 'TPM_Calculation_Chain_<timestamp>';
job.JobName = 'AccountPlanCalculationBasic';
job.BatchChainType = 'default';

// Account Plans in Scope
List<cgcloud__Account_Plan__c> accountPlansToCalculate = [
    SELECT Id FROM cgcloud__Account_Plan__c WHERE cgcloud__Sales_Org__c = :salesOrg 
    // AND ... 
];

<namespace>.ScheduleAccountPlanCalculationV2Callout.Options options = new <namespace>.ScheduleAccountPlanCalculationV2Callout.Options();
options.writebacksubsets = new List<String> { 'basic' };
options.cleanupobsoletemeasures = false;


<namespace>.OffplatformCalloutResponse response = callout.execute(txId, job, accountPlansToCalculate, options);

if (response.status != 200) {
   // Handle error
}
```

```apex
// name of the salesorg for which the hob should be scheduled
String salesOrg = '0001';
<namespace>.ScheduleAccountPlanCalculationV2Callout callout = new <namespace>.ScheduleAccountPlanCalculationV2Callout(salesOrg);

// Log Transaction Id
String txId = <namespace>.TransactionHandler.getTransactionIdentifier();

// Job object
<namespace>.Job job = new <namespace>.Job();
job.JobChainName = 'TPM_Calculation_Chain_<timestamp>';
job.JobName = 'AccountPlanCalculationBusinessPlan';

// Account Plans in Scope
List<cgcloud__Account_Plan__c> accountPlansToCalculate = [
    SELECT Id FROM cgcloud__Account_Plan__c WHERE cgcloud__Sales_Org__c = :salesOrg 
    // AND ...  
];

<namespace>.ScheduleAccountPlanCalculationV2Callout.Options options = new <namespace>.ScheduleAccountPlanCalculationV2Callout.Options();
options.writebacksubsets = new List<String> { 'businessplan' };
options.cleanupobsoletemeasures = false;


<namespace>.OffplatformCalloutResponse response = callout.execute(txId, job, accountPlansToCalculate, options);

if (response.status != 200) {
   // Handle error
}
```
