---
title: "Get Global Account Product List"
domain: retail-api
topic: get-global-account-product-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.829Z
estimatedTokens: 202
keywords: [Account, Product, Retrieves, products, volumes, measures, customer]
---

# Get Global Account Product List

> Retrieves the account products from the global account product list
      based on the volumes and measures for the customer for the account.

# Get Global Account Product List

Retrieves the account products from the global account product list based on the volumes and measures for the customer for the account.

A product is included in a global list if one of these criteria is met.

-   Volume or condition record exists for the product.
-   The product is included in a promotion that's created for the customer.

See [Understand Account Product List](https://help.salesforce.com/s/articleView?id=ind.tpm_admin_concept_account_product_list.htm&type=5&language=en_US "HTML (New Window)").

Resource

```

```

Available version

55.0

Request Parameters

| Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| accountId | String | ID of the account record from Salesforce. | Required |

Apex Request Example

```

```

## Code Examples

```
GET_GLOBAL_ACCOUNT_PRODUCT_LIST
```

```apex
// Logical endpoint name
String endpointName = 'GET_GLOBAL_ACCOUNT_PRODUCT_LIST';
// name of the salesorg for which the API must be scheduled
String salesOrg = '0001';
<namespace>.OffplatformCallout callout = new <namespace>.OffplatformCallout(endpointName, salesOrg);

// Log Transaction Id
String txId = <namespace>.TransactionHandler.getTransactionIdentifier();

// Account Id for which the products in the global apl should be retrieved
Id accountId = '001B000001Q48yMIAR'; // Kroger Atlanta

Map<String, String> urlParameters = new Map<String,String>();
urlParameters.put('accountid', accountId);

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
