---
title: "Schedule Promotion Calculation"
domain: retail-api
topic: schedule-promotion-calculation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.877Z
estimatedTokens: 81
keywords: [Schedule, Promotion, Calculation, Enqueues, jobs, batch, IDs]
---

# Schedule Promotion Calculation

> Enqueues promotion jobs for batch calculation based on the promotion
      IDs.

# Schedule Promotion Calculation

Enqueues promotion jobs for batch calculation based on the promotion IDs.

Soft limits:

-   Maximum number of promotions in a promotion loader based on PromotionLoaderMaxNumberOfPromotions. Default value is 1000.

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
SCHEDULE_PROMOTION_CALCULATION
```

```apex
// Endpoint name
String endpointName = 'SCHEDULE_PROMOTION_CALCULATION';
// Sales Organization name
String salesOrg = '0001';
// 
String jobName = '<PromotionCalculationJobName>';
Set<Id> promosIds = new Set<Id>{'<promotionId_1>', '<promotionId_2>'};

<namespace>.OffPlatformCallout callout = new <namespace>.OffPlatformCallout(
    endpointName,
    salesOrg
);

<namespace>.OffPlatformCalloutResponse response = callout.execute(
    <namespace>.TransactionHandler.getTransactionIdentifier(),
    new Map<String, String>(),
    JSON.serialize(
        new Map<String, Object> {
            'jobname' => jobName,
            'salesorg' => salesOrg,
            'promotionids' => promosIds,
            'batchchain' => String.format(
                'Promotion_Batch_Transaction_{0}',
                new List<String>{
                    <namespace>.TransactionHandler.getTransactionIdentifier()
                }
            )
        }
    )
);
if (response.status != 200) {
   // Handle error
}
```
