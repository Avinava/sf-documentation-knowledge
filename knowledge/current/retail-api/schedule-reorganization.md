---
title: "Schedule Reorganization"
domain: retail-api
topic: schedule-reorganization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.883Z
estimatedTokens: 129
keywords: [Schedule, Reorganization, Performs, off-platform, data, cleanup]
---

# Schedule Reorganization

> Performs off-platform data cleanup and reorganization.

# Schedule Reorganization

Performs off-platform data cleanup and reorganization. Promotions in Salesforce that are deleted, inactive, or cancelled are removed from off-platform data. Additionally, softly deleted measure data is hard deleted.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

It is recommended that this request must be run as the first step in the nightly batch chain.

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
SCHEDULE_REORGANIZATION
```

```apex
String endpointName = 'SCHEDULE_REORGANIZATION';
String jobName = 'Reorg';
String salesOrg = '0001'; // Sales Organization name
<namespace>.OffPlatformCallout request = new <namespace>.OffPlatformCallout(endpointName, salesOrg);
<namespace>.OffplatformCalloutResponse response = request.execute(
    <namespace>.TransactionHandler.getTransactionIdentifier(), 
    new Map<String,String>(), 
    JSON.serialize(
        new Map<String, Object>{
            'jobname' => jobName, 
            'salesorg' => salesOrg,
            'batchchain' =>  String.format(
                'TPM_Calculation_Chain_{0}_{1}',
                new List<String>{
                    salesOrg,
                    System.now().format('YYYYMMdd_hhmmss')
                }
            ),
            'jobthreads' => 1
        }
    )
);

if (response.status != 200) {
    //Handle errors
}
```
