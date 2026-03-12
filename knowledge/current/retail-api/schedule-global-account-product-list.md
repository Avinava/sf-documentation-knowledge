---
title: "Schedule Global Account Product List"
domain: retail-api
topic: schedule-global-account-product-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.873Z
estimatedTokens: 72
keywords: [Schedule, Account, Product, Schedules, job]
---

# Schedule Global Account Product List

> Schedules a job to update the global account product
    list.

# Schedule Global Account Product List

Schedules a job to update the global account product list.

Soft limits:

-   Maximum number of accounts based on AccountLoaderMaxNumberOfAccounts. Default value is 1000.

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
SCHEDULE_GLOBAL_ACCOUNT_PRODUCT_LIST
```

```apex
// Logical endpoint name
String endpointName = 'SCHEDULE_GLOBAL_ACCOUNT_PRODUCT_LIST';
// name of the salesorg for which the API must be scheduled
String salesOrg = '0001';
<namespace>.OffplatformCallout callout = new <namespace>.OffplatformCallout(endpointName, salesOrg);

// Log Transaction Id
String txId = <namespace>.TransactionHandler.getTransactionIdentifier();

// Account Id for which the products in the global apl should be retrieved
Id accountId = '001B000001Q48yMIAR'; // Kroger Atlanta

Map<String, String> urlParameters = new Map<String,String>();

Map<String, Object> payloadParams = new Map<String, Object>();
payloadParams.put('jobname', 'GlobalAPLUpdate');
payloadParams.put('salesorg', salesOrg);
payloadParams.put('accountids', new List<Id>{accountId}); // up to 1000 accounts
payloadParams.put('refreshaccountproductlist', false); // add only new products or recalculate completely
payloadParams.put('batchchain', 'TPM_Calculation_Chain_<timestamp>');
payloadParams.put('jobthreads',  1);

String payload = JSON.serialize(payloadParams);

<namespace>.OffplatformCalloutResponse response = callout.execute(txId, urlParameters, payload);

if (response.status != 200) {
   // Handle error and return error info to caller
  
}
```
