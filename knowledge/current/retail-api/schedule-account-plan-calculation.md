---
title: "Schedule Account Plan Calculation"
domain: retail-api
topic: schedule-account-plan-calculation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.856Z
estimatedTokens: 673
keywords: [Schedule, Account, Plan, Calculation, plans, IDs, category, time, range, KPI, collection]
---

# Schedule Account Plan Calculation

> Schedule calculation for account plans for the given account plan
      IDs, category IDs, and time range for a given KPI collection.

# Schedule Account Plan Calculation

Schedule calculation for account plans for the given account plan IDs, category IDs, and time range for a given KPI collection.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

When you create a new project, use the SCHEDULE\_ACCOUNT\_PLAN\_CALCULATION\_V2 endpoint to calculate the Account Plan, which is handled by Customer Business Plans.

A batch process is started to calculate and write back values for an account plan. The batch processes the products, retrieves measure data, initializes a calculation based on the KPI configuration, and generates write back data based on the outcome. For more information on the product resolution, see [/Products/GetProducts](atlas.en-us.retail_api.meta/retail_api/cgtpm_get_products.htm "Retrieve a list of products. The list is returned based on the Product Definition Level setting that you configured in the promotion template.").

Soft limits:

-   Maximum number of months based on TradeCalMaxNumberMonths. Default value is 48.
-   Maximum number of accounts based on AccountLoaderMaxNumberOfAccounts. Default value is 1000.
-   Maximum number of categories based on AccountLoaderMaxNumberOfCategories. Default value is 50.
-   Maximum number of KPI Plans based on KpiSetMaxKPIPlan. Default value is 130.
-   Maximum number of writeback KPI plans based on KpiSetMaxWritebackKPIPlan. Default value is 70.
-   Maximum number of KPI Promotions based on KpiSetMaxKPIPromotion. Default value is 130.
-   Maximum number of writeback KPI Promotions based on KpiSetMaxWritebackKPIPromotion. Default value is 70.
-   Maximum number of KPI SubAccounts based on KpiSetMaxSubAccountsKPI. Default value is 10.

See [Soft Limits of Account Plan](https://help.salesforce.com/s/articleView?id=ind.tpm_concept_soft_limits.htm&type=5&language=en_US "HTML (New Window)").

Resource

```

```

Available version

55.0

Request Parameters

| Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| salesOrg | String | ID of the Salesforce org. | Required |
| jobName | String | Name of the job to be schedule for calculation. | Required |
| processName | String | Name of the process. | Required |
| jobThreads | Number | Number of job threads. | Required |
| batchChain | String | Name of the batch chain. | Required |
| batchChainType | String | Type of the batch chain. | Required |
| accountId | String | ID of the account record. |  |
| kpiSetId | String | ID of the KPI collection record. |  |
| year | String | Time range for a given KPI collection. |  |
| categoryId | String | ID of the category record. |  |

Apex Request Example

```

```

## Code Examples

```
SCHEDULE_ACCOUNT_PLAN_CALCULATION
```

```apex
// Logical endpoint name
String endpointName = 'SCHEDULE_ACCOUNT_PLAN_CALCULATION';
// name of the salesorg for which the hob should be scheduled
String salesOrg = '0003';
<namespace>.OffplatformCallout callout = new <namespace>.OffplatformCallout(endpointName, salesOrg);

// Log Transaction Id
String txId = <namespace>.TransactionHandler.getTransactionIdentifier();

// No Url Parameters
Map<String, String> urlParameters = new Map<String,String>();

// Payload
Map<String, Object> payloadParams = new Map<String, Object>();
payloadParams.put('salesorg', salesOrg);
payloadParams.put('processname', 'AccountPlanCalculation');
payloadParams.put('accountids', new List<Id> {'001TC000000Nl00YAC'}); // Kroger Atlanta (Account)
payloadParams.put('datefrom', DateTime.valueOfGmt('2022-01-01 00:00:00Z').getTime());
payloadParams.put('datethru', DateTime.valueOfGmt('2022-12-31 00:00:00Z').getTime());
payloadParams.put('categoryids', new List<Id> {'01tTC0000001Z52YAE'}); // Beverages (Product)
payloadParams.put('kpisetid', 'a1aTC0000000eYlYAI'); // Kpi Set (Usage Plan, taken from Account Template)
payloadParams.put('jobname', 'AccountPlanCalculation');
payloadParams.put('batchchain', 'TPM_Calculation_<timestamp>');
payloadParams.put('batchchaintype', 'default');
payloadParams.put('jobthreads', 1);
String payload = JSON.serialize(payloadParams);

<namespace>.OffplatformCalloutResponse response = callout.execute(txId, urlParameters, payload);

if (response.status != 200) {
   // Handle error and return error info to caller
}
```

## Related Topics

- /Products/GetProducts (atlas.en-us.retail_api.meta/retail_api/cgtpm_get_products.htm)
