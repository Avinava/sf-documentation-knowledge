---
title: "Update Product Assortment"
domain: retail-api
topic: update-product-assortment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.894Z
estimatedTokens: 210
keywords: [Product, Assortment, Receives, products, time-dependent, account, updates]
---

# Update Product Assortment

> Receives a list of products within the time-dependent account
      product list and updates it.

# Update Product Assortment

Receives a list of products within the time-dependent account product list and updates it.

Soft limits:

-   Maximum number of products per assortment is based on MaxNumberOfProductsPerAssortment. Default value is 10000.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

To submit large number of items, see [Begin Job Scheduling Transaction](atlas.en-us.retail_api.meta/retail_api/cgtpm_begin_job_sch_transaction.htm "Begin a scheduling transaction for a job in a job chain. The job either starts an open transaction (if the number of job items is not announced) that must be explicitly committed to, or communicates the expected number of job items to the off-platform system.").

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
UPDATE_PRODUCT_ASSORTMENT
```

```apex
String DEFAULT_JOBNAME = 'Update';
Integer DEFAULT_JOBTHREADS = 1;
String DEFAULT_BATCHCHAIN = 'Assortment';
String DEFAULT_BATCHCHAINTYPE = 'paapla';

Id assortmentId = 'assortmentId1';
List<Map<String, Object>> papList = new List<Map<String, Object>>();
Set<Id> accountIds = new Set<Id>();

Assortment productAssortment = [
    SELECT Id, cgcloud__Sales_Org__c, cgcloud__Valid_From__c, cgcloud__Valid_Thru__c, cgcloud__Version__c
    FROM Assortment
    WHERE Id = :assortmentId
    LIMIT 1
];

for (AssortmentProduct pap : [SELECT ProductId, cgcloud__Valid_From__c, cgcloud__Valid_Thru__c FROM AssortmentProduct where AssortmentId =: assortmentId]) {
    papList.add(
        new Map<String, Object>{
            'sfid' => pap.ProductId,
            'validfrom' => Datetime.newInstanceGmt(pap.cgcloud__Valid_From__c.year(), pap.cgcloud__Valid_From__c.month(), pap.cgcloud__Valid_From__c.day()).getTime(),
            'validthru' => Datetime.newInstanceGmt(pap.cgcloud__Valid_Thru__c.year(), pap.cgcloud__Valid_Thru__c.month(), pap.cgcloud__Valid_Thru__c.day()).getTime()
        }
    );
}
    
for (
    StoreAssortment customerProductAssortment :  [
    SELECT Id, AccountId
    FROM StoreAssortment
    WHERE AssortmentId = :assortmentId
]
) {
    accountIds.add(customerProductAssortment.AccountId);
}


String payload = JSON.serialize(
    new Map<String, Object> {
        'accountsfids' => accountIds,
        'validfrom' => Datetime.newInstanceGmt(productAssortment.cgcloud__Valid_From__c.year(), productAssortment.cgcloud__Valid_From__c.month(), productAssortment.cgcloud__Valid_From__c.day()).getTime(),
        'validthru' => Datetime.newInstanceGmt(productAssortment.cgcloud__Valid_Thru__c.year(), productAssortment.cgcloud__Valid_Thru__c.month(), productAssortment.cgcloud__Valid_Thru__c.day()).getTime(),
        'version' => productAssortment.cgcloud__Version__c,
        'salesorg' => productAssortment.cgcloud__Sales_Org__c,
        'products' => papList,
        'jobname' => DEFAULT_JOBNAME,
        'jobthreads' => DEFAULT_JOBTHREADS,
        'batchchain' => DEFAULT_BATCHCHAIN,
        'batchchaintype' => DEFAULT_BATCHCHAINTYPE
    }
);

<namespace>.OffplatformCallout request = new <namespace>.OffplatformCallout('UPDATE_PRODUCT_ASSORTMENT', productAssortment.cgcloud__Sales_Org__c);
<namespace>.OffPlatformCalloutResponse response = request.execute(
    <namespace>.TransactionHandler.getTransactionIdentifier(),
    new Map<String, String>{'productassortmentid' => assortmentId},
    payload
);

System.debug(response.status);
```

## Related Topics

- Begin Job Scheduling Transaction (atlas.en-us.retail_api.meta/retail_api/cgtpm_begin_job_sch_transaction.htm)
