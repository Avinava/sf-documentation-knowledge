---
title: "Get Time-Dependent Account Product List"
domain: retail-api
topic: get-time-dependent-account-product-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.840Z
estimatedTokens: 335
keywords: [Time-Dependent, Account, Product, Retrieves, array, products]
---

# Get Time-Dependent Account Product List

> Retrieves an array of products from the time-dependent account
      product list.

# Get Time-Dependent Account Product List

Retrieves an array of products from the time-dependent account product list.

A time-dependent list is generated from the products that are included in the product assortment that's been defined for the purpose. See [Understand Account Product List](https://help.salesforce.com/s/articleView?id=ind.tpm_admin_concept_account_product_list.htm&type=5&language=en_US "HTML (New Window)").

Limits:

-   Maximum number of months based on TradeCalMaxNumberMonths. Default value is 18. See [Soft Limits of Trade Calendar](https://help.salesforce.com/s/articleView?id=ind.tpm_reference_trade_calender_soft_limits.htm&type=5&language=en_US "HTML (New Window)").
-   Maximum number of products in the time-dependent account product list based on TimeDepAccProdListResponseMaxProds. Default value is 30000.

Resource

```

```

Available version

55.0

Request Parameters

| Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| accountId | String | ID of the account record from Salesforce. | Required |
| validFrom | Number | The date and time that specifies the beginning of the time period (in timestamp format). | Required |
| validThru | Number | The date and time that specifies the end of the time period (in timestamp format). | Required |

Apex Request Example

```

```

## Code Examples

```
GET_TIME_DEPENDENT_ACCOUNT_PRODUCT_LIST
```

```apex
// Logical endpoint name
String endpointName = 'GET_TIME_DEPENDENT_ACCOUNT_PRODUCT_LIST';
// name of the salesorg for which the hob should be scheduled
String salesOrg = '0001';
<namespace>.OffplatformCallout callout = new <namespace>.OffplatformCallout(endpointName, salesOrg);

// Log Transaction Id
String txId = <namespace>.TransactionHandler.getTransactionIdentifier();

// Account Id for which the products in the global apl should be retrieved
Id accountId = '001B000001Q48yMIAR'; // Kroger Atlanta
DateTime validFrom = DateTime.valueOfGmt('2022-01-01 00:00:00Z');
DateTime validThru = DateTime.valueOfGmt('2022-12-31 00:00:00Z');

Map<String, String> urlParameters = new Map<String,String>();
urlParameters.put('accountsfid', accountId);
urlParameters.put('validfrom', validFrom.getTime());
urlParameters.put('validthru', validThru.getTime());

String payload = null;

<namespace>.OffplatformCalloutResponse response = callout.execute(txId, urlParameters, payload);

if (response.status != 200) {
   // Handle error and return error info to caller
  
} 
// Fetch the list from the response
Set<Id> accountproducts = new Set<Id>();
String aplListString = (String) response.Result;
if (!String.isEmpty(aplListString)) {
    Map<String, Object> mapAccountProductList = (Map<String, Object>) JSON.deserializeUntyped(
        aplListString
    );
    List<Object> listAccountProductListIds = (List<Object>) mapAccountProductList.get(
    'accountproducts'
    );
    for (Object obj : listAccountProductListIds) {
        accountproducts.add((Id) obj);
    }
}
```
