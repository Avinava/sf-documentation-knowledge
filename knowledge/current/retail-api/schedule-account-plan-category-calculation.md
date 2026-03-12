---
title: "Schedule Account Plan Category Calculation"
domain: retail-api
topic: schedule-account-plan-category-calculation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.863Z
estimatedTokens: 70
keywords: [Schedule, Account, Plan, Category, Calculation, Schedules, multiple, categories, batch]
---

# Schedule Account Plan Category Calculation

> Schedules one or multiple account plan categories for batch
      calculation.

# Schedule Account Plan Category Calculation

Schedules one or multiple account plan categories for batch calculation. It accepts up to 1000 account plan categories and schedules them for calculation.

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
SCHEDULE_ACCOUNT_PLAN_CATEGORY_CALC
```

```apex
// name of the salesorg for which the hob should be scheduled
String salesOrg = '0001';
<namespace>.ScheduleAccountPlanCategoryCalcCallout callout = new <namespace>.ScheduleAccountPlanCategoryCalcCallout (salesOrg);

// Log Transaction Id
String txId = <namespace>.TransactionHandler.getTransactionIdentifier();

// Job object
<namespace>.Job job = new <namespace>.Job();
job.JobChainName = 'TPM_Calculation_Chain_<timestamp>';
job.JobName = 'AccountPlanCategoryCalculation';
job.BatchChainType = 'default';

// Account Plans in Scope
List<cgcloud__Account_Plan_Category__c> accountPlanCategoriesToCalculate = [
    SELECT Id FROM cgcloud__Account_Plan__c 
    // WHERE cgcloud__Account_Plan__r.cgcloud__Sales_Org__c = :salesOrg 
    // AND ... 
];

<namespace>.OffplatformCalloutResponse response = callout.execute(txId, job, accountPlanCategoriesToCalculate, options);

if (response.status != 200) {
   // Handle error
}
```
